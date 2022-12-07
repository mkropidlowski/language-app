import { FC, useState } from "react";
import style from "./contactForm.module.scss";
import { useForm } from "react-hook-form";
import Input from "../../atoms/Input";
import { contactFormField, contactFormResponseStatuses, ResponseStatus } from "./data/data";
import Button from "../../atoms/Button";
import Textarea from "../../atoms/Textarea";
import { FormContent } from "./components/ContactFormDetails/FormContent";

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
    } = useForm<ContactFormProps>({ mode: "all" });

    const submitForm = async () => {
        const formData = getValues();
        console.log(formData);
    };
    return (
        <div className={style.contactWrapper}>
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
