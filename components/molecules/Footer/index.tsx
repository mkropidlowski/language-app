import { FC, HTMLProps, useId } from "react";
import style from "./footer.module.scss";
import { Column } from "components/molecules/Footer/components/Column";
import { ColumnLinks, ColumnContact } from "config/footer/data";

import clsx from "clsx";
import Logo from "components/icons/Logo";
import Heading from "components/atoms/Heading";
import Link from "next/link";

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
    const date = new Date();
    const authorString = `Wykonał - Michał Kropidłowski - ${date.getFullYear()}`;
    return (
        <div className={clsx(style.wrapper, className)}>
            <div className={style.logo}>
                <Logo width={50} height={50} />
                <h3>ABC FC Langowska</h3>
            </div>
            <div className={style.footerContainer}>
                <div className={style.columnContainer}>
                    <div className={style.column}>
                        <Heading variant="h3" bold>
                            {contactColumn.heading}
                        </Heading>
                        <ul className={style.columnList}>
                            {contactColumn.text.map((item) => (
                                <li key={item} className={style.columnItem}>
                                    <Link href={`tel:${item}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {column.map((item: { heading: string; text: string[] }, i: number) => (
                        <Column key={`${id}-${i}`} heading={item.heading} text={item.text} />
                    ))}
                </div>
            </div>
            <div className={style.bottomPanel}>
                <Link
                    href="https://www.mkropidlowski.pl"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={style.heading}
                >
                    <a target="_blank" rel="noopener noreferrer">
                        {authorString}
                    </a>
                </Link>

                <Link href="/polityka-prywatnosci" className={style.heading}>
                    Polityka prywatności
                </Link>
            </div>
        </div>
    );
};

export default Footer;
