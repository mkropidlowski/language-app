import { FC, HTMLProps, useId } from "react";
import style from "./footer.module.scss";
import { Column } from "components/molecules/Footer/components/Column";
import { ColumnLinks } from "config/footer/data";
import clsx from "clsx";
import Logo from "components/icons/Logo";

export interface Props {
    heading?: string;
    text?: string[];
    column?: Props[];
}

const Footer: FC<Props & HTMLProps<HTMLDivElement>> = ({ className, column = ColumnLinks }) => {
    const id = useId();
    return (
        <div className={clsx(style.wrapper, className)}>
            <div className={style.logo}>
                <Logo width={50} height={50} />
                <h3>Nazwa_strony</h3>
            </div>
            <div className={style.footerContainer}>
                <div className={style.columnContainer}>
                    {column.map((item, i) => (
                        <Column key={`${id}-${i}`} heading={item.heading} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
