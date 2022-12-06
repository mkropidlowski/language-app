import clsx from "clsx";
import { FC, HTMLProps, ReactNode } from "react";
import style from "./label.module.scss";

export interface Props {
    text?: ReactNode;
}
const Label: FC<Props & HTMLProps<HTMLDivElement>> = ({ text, className, ...rest }) => (
    <div className={clsx(style.label, className)} {...rest}>
        {text}
    </div>
);

export default Label;
