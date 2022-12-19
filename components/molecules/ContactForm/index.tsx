import { FC, useState } from "react";
import style from "./contactForm.module.scss";
import { useForm } from "react-hook-form";
import Input from "components/atoms/Input";
import { contactFormField, contactFormResponseStatuses, ResponseStatus } from "./data/data";
import Button from "components/atoms/Button";
import Textarea from "components/atoms/Textarea";
import { FormContent } from "./components/ContactFormDetails/FormContent";
import { sendMessage } from "modules/contatc/services";
import { validationSchema } from "./data/validation";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ContactFormProps {
    sender_emial?: string;
    name?: string;
    message?: string;
}

const ContactForm: FC = () => {
    const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ContactFormProps>({ mode: "all", resolver: yupResolver(validationSchema) });

    const submitForm = async () => {
        const formData = getValues();

        setResponseStatus("pending");
        try {
            await sendMessage(formData);
            setResponseStatus("sent");
        } catch {
            setResponseStatus("error");
        }
    };
    return (
        <div className={style.contactWrapper} id="contact">
            <form
                className={style.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
            >
                <div className={style.leftColumn}>
                    {contactFormField.map(({ formKey, label }) => {
                        const formInputKey = formKey as keyof ContactFormProps;
                        return (
                            <Input
                                key={formKey}
                                type="text"
                                label={label}
                                {...register(formInputKey)}
                                error={!!errors[formInputKey]?.message}
                                errorText={errors[formInputKey]?.message}
                                shouldRenderLabel
                                required
                            />
                        );
                    })}
                    <Textarea label={"Twoja wiadomość"} {...register("message")} shouldRenderLabel required />
                    <div className={style.errorMessage}>
                        {responseStatus === "error" ? "Wystąpił błąd podczas wysyłania wiadomości." : null}
                    </div>
                    <Button type="submit" color="primary" className={style.submitButton}>
                        {contactFormResponseStatuses[responseStatus] ?? contactFormResponseStatuses.default}
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
