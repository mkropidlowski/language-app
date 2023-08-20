import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "components/atoms/Button";
import { formStatusCode, ResponseStatus } from "./data/data";
import { FormContent } from "./components/ContactFormDetails/FormContent";
import { validationSchema } from "./data/validation";
import style from "./contactForm.module.scss";
import Heading from "components/atoms/Heading";
import { publicEnvs } from "config/envs";
import { sendContactForm } from "lib/contactForm/contact";
import Label from "components/atoms/Label";

export interface ContactFormProps {
    email?: string;
    name?: string;
    message?: string;
}

const EMAIL_ADRESS = `${publicEnvs.GMAIL_ADRESS}`;

const ContactForm: FC = () => {
    const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ContactFormProps>({
        mode: "all",
        resolver: yupResolver(validationSchema),
    });

    const submitForm = async () => {
        const formData = getValues();

        setResponseStatus("pending");

        const userEmail = {
            name: formData.name,
            address: formData.email,
            to: EMAIL_ADRESS,
            text: formData.message,
        };
        try {
            await sendContactForm(userEmail);
            setResponseStatus("sent");
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
                        <textarea
                            className={style.formTextArea}
                            placeholder={"Wiadomość"}
                            {...register("message")}
                            data-cy="userMessage"
                        ></textarea>
                        <p className={style.errorText}>{errors.message?.message}</p>
                    </Label>

                    <Button type="submit" color="primary" className={style.submitButton}>
                        {formStatusCode[responseStatus] ?? formStatusCode.default}
                    </Button>
                </div>
                <div className={style.rightColumn}>
                    <FormContent />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
