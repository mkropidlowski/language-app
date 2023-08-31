import { FC, HTMLProps, useId } from "react";
import style from "./footer.module.scss";
import { Column } from "components/molecules/Footer/components/Column";
import { ColumnLinks, ColumnContact } from "config/footer/data";

import clsx from "clsx";
import Logo from "components/icons/Logo";

export interface Props {
    heading?: string;
    text?: string[];
    column?: Props[];
    contactColumn?: Props;
}

const Footer: FC<Props & HTMLProps<HTMLDivElement>> = ({
    className,
    column = ColumnLinks,
    contactColumn = ColumnContact,
}) => {
    const id = useId();

    return (
        <div className={clsx(style.wrapper, className)}>
            <div className={style.logo}>
                <Logo width={50} height={50} />
                <h3>ABC FC Langowska</h3>
            </div>
            <div className={style.footerContainer}>
                <div className={style.columnContainer}>
                    <Column heading={contactColumn.heading} text={contactColumn.text} />

                    {column.map((item: { heading: string; text: string[] }, i: number) => (
                        <Column key={`${id}-${i}`} heading={item.heading} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
