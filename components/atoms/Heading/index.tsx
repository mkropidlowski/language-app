import clsx from "clsx";
import { FC, HTMLProps } from "react";
import style from "./heading.module.scss";

export type HeadingVariants = "h1" | "h2" | "h3" | "h4";

interface Props extends HTMLProps<HTMLHeadElement> {
    variant?: HeadingVariants;
    bold?: boolean;
    className?: string;
}

const Heading: FC<Props> = ({ variant, bold = false, children, className }) => {
    const HeadingVariant = variant;
    return (
        <HeadingVariant className={clsx(style[`${variant}`], bold && style.bold, className)}>{children}</HeadingVariant>
    );
};

export default Heading;
