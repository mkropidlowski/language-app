import Heading from "components/atoms/Heading";
import { FC } from "react";
import style from "./emailBox.module.scss";

export interface Props {
    name?: string;
    sender_email?: string;
    message?: string;
}

const EmailBox: FC<Props> = ({ name, sender_email, message }) => (
    <div className={style.wrapper}>
        <Heading variant="h4">
            {name} - {sender_email}
        </Heading>
        <div className={style.message}>{message}</div>
    </div>
);

export default EmailBox;
