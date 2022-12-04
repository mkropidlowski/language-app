import { FC, HTMLProps, useId } from "react";
import style from "./AboutSection.module.scss";
import Image from "next/image";
import Heading from "../../atoms/Heading";
import { heading, description, descriptionTitle } from "./helpers";

export interface Props {
    className?: string;
}

const AboutSection: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => {
    return (
        <div className={style.wrapper} id="about">
            <AboutContent />
            <div className={style.image}>
                <Image src="/images/undraw_exams.svg" alt="writing tests" width="400px" height="400px" />
            </div>
        </div>
    );
};

const AboutContent = () => {
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

export default AboutSection;
