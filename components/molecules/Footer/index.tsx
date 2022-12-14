import { FC, HTMLProps, useId } from "react";
import Logo from "components/atoms/Logo";
import style from "./footer.module.scss";
import { Column } from "components/molecules/Footer/components/Column";
import { ColumnLinks } from "config/footer/data";
import clsx from "clsx";

export interface Props {
    heading?: string;
    text?: string[];
    column?: Props[];
}

const Footer: FC<Props & HTMLProps<HTMLDivElement>> = ({ className, column = ColumnLinks }) => {
    const id = useId();
    return (
        <div className={clsx(style.wrapper, className)}>
            <Logo className={style.footerLogo} />
            <div className={style.footerContainer}>
                <div className={style.columnContainer}>
                    {column.map((e, i) => (
                        <Column key={`${id}-${i}`} heading={e.heading} text={e.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
