import { FC, HTMLProps, useId } from "react";
import Logo from "../../atoms/Logo";
import style from "./Footer.module.scss";
import { Column } from "./components/Column";
import { ColumnLinks } from "../../../config/footer/data";

export interface Props {
    heading?: string;
    text?: string[];
    column?: Props[];
}

const Footer: FC<Props & HTMLProps<HTMLDivElement>> = ({ className, column = ColumnLinks }) => {
    const id = useId();
    return (
        <div className={style.wrapper} id="contact">
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
