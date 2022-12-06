import { FC, HTMLProps } from "react";
import style from "./contactForm.module.scss";
import { useForm } from "react-hook-form";

export interface Props {}

const ContactForm: FC = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({ mode: "all" });

    const submitForm = async () => {
        const formData = getValues();
    };
    return (
        <div className={style.contactWrapper}>
            <form
                className={style.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
            ></form>
        </div>
    );
};

export default ContactForm;
