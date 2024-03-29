import { FC, useState, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "components/atoms/Button";
import { formStatusCode, ResponseStatus } from "./data/data";
import { FormContent } from "./components/ContactFormDetails/FormContent";
import { validationSchema } from "./data/validation";
import style from "./contactForm.module.scss";
import Heading from "components/atoms/Heading";
import { sendContactForm } from "lib/contactForm/contact";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "pages/api/verifyCaptcha";
import Label from "components/atoms/Label";
import { publicEnvs } from "config/envs";

const SITE_KEY = publicEnvs.RECAPTCHA_WEB_KEY;
export interface ContactFormProps {
    email?: string;
    name?: string;
    message?: string;
    phone?: string;
    address: string;
    to: string;
    text: string;
}

const ContactForm: FC = () => {
    const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    async function handleCaptchaSubmission(token: string | null) {
        await verifyCaptcha(token)
            .then(() => setIsVerified(true))
            .catch(() => setIsVerified(false));
    }

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm<ContactFormProps>({
        mode: "all",
        resolver: yupResolver(validationSchema),
    });

    const submitForm = async () => {
        const formData = getValues();

        setResponseStatus("pending");

        const data = {
            ...formData,
        };
        try {
            await sendContactForm(data);
            setResponseStatus("sent");
            reset();
        } catch (error) {
            setResponseStatus("error");
        }
    };

    return (
        <div className={style.contactWrapper} id="contact">
            <Heading variant="h1" bold className={style.sectionHeading}>
                Kontakt
            </Heading>
            <form
                className={style.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
            >
                <div className={style.leftColumn}>
                    <Label>
                        <input
                            type="text"
                            className={style.formInput}
                            placeholder={"Imię i nazwisko"}
                            {...register("name")}
                            data-cy="userName"
                        />
                        {errors.name && <p className={style.errorText}>{errors.name?.message}</p>}
                    </Label>
                    <Label>
                        <input
                            type="text"
                            className={style.formInput}
                            placeholder={"Adres e-mail"}
                            {...register("email")}
                            data-cy="emailAdress"
                        />
                        <p className={style.errorText}>{errors.email?.message}</p>
                    </Label>
                    <Label>
                        <input
                            type="text"
                            className={style.formInput}
                            placeholder={"Numer telefonu"}
                            {...register("phone")}
                            data-cy="phone"
                        />
                        <p className={style.errorText}>{errors.phone?.message}</p>
                    </Label>
                    <Label>
                        <textarea
                            className={style.formTextArea}
                            placeholder={"Wiadomość"}
                            {...register("message")}
                            data-cy="userMessage"
                        ></textarea>
                        <p className={style.errorText}>{errors.message?.message}</p>
                    </Label>

                    <Button type="submit" color="primary" className={style.submitButton} disabled={!isVerified}>
                        {formStatusCode[responseStatus] ?? formStatusCode.default}
                    </Button>
                    <ReCAPTCHA sitekey={SITE_KEY} ref={recaptchaRef} onChange={handleCaptchaSubmission} />
                </div>
                <div className={style.rightColumn}>
                    <FormContent />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
