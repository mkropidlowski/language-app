import { FC, HTMLProps } from "react";
import Heading from "components/atoms/Heading";
import style from "./emailBox.module.scss";
import clsx from "clsx";

export interface Props {
    name?: string;
    sender_email?: string;
    message?: string;
    added_at?: string;
}

const EmailBox: FC<Props & HTMLProps<HTMLDivElement>> = ({
    added_at,
    name,
    sender_email,
    message,
    children,
    className,
    ...rest
}) => (
    <div className={clsx(style.wrapper, className)} {...rest}>
        <Heading variant="h4">
            {name} - {sender_email} : {added_at}
        </Heading>
        <div className={style.message}>{message}</div>
        {children}
    </div>
);

export default EmailBox;
