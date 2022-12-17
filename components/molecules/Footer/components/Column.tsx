import Heading from "components/atoms/Heading";
import { FC, HTMLProps, useId } from "react";
import style from "./column.module.scss";

export interface Props {
    heading?: string;
    text?: string[];
}
export const Column: FC<Props & HTMLProps<HTMLDivElement>> = ({ heading, text }) => {
    const id = useId();
    return (
        <div className={style.column}>
            <Heading variant="h3" bold>
                {heading}
            </Heading>
            <ul className={style.columnList}>
                {text.map((item, i) => (
                    <li key={`${id}-${i}`}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
