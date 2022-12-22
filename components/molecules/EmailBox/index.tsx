import Heading from "components/atoms/Heading";
import { FC } from "react";
import style from "./emailBox.module.scss";

export interface Props {
    name?: string;
    sender_email?: string;
    message?: string;
    added_at?: string;
}

const EmailBox: FC<Props> = ({ added_at, name, sender_email, message }) => {
    return (
        <div className={style.wrapper}>
            <Heading variant="h4">
                {name} - {sender_email} : {added_at}
            </Heading>
            <div className={style.message}>{message}</div>
        </div>
    );
};

export default EmailBox;
