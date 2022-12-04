import Heading from "../../../atoms/Heading";
import { useId } from "react";
import style from "./aboutContent.module.scss";
import { heading, descriptionTitle, description } from "../../../../config/section/data";

export const AboutContent = () => {
    const ID = useId();
    return (
        <div className={style.content}>
            <Heading variant="h2" bold>
                {heading}
            </Heading>
            <div className={style.desciption}>
                <p className={style.descritpionTitle}>{descriptionTitle}</p>
                <ul>
                    {description.map((item) => (
                        <li key={`${ID}-${item}`}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
