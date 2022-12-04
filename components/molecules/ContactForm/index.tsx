import { FC, HTMLProps } from "react";
import Heading from "../../atoms/Heading";
import style from "./contactForm.module.scss";

export interface Props {}

const ContactForm: FC<Props & HTMLProps<HTMLDivElement>> = () => (
    <>
        <div className={style.wrapper}>
            <Heading variant="h2">Formularz</Heading>
        </div>
    </>
);

export default ContactForm;
