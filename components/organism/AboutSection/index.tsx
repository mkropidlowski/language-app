import { FC, HTMLProps } from "react";
import style from "./aboutSection.module.scss";
import Image from "next/image";
import { AboutContent } from "./components/AboutContent";

export interface Props {
    className?: string;
}

const AboutSection: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => {
    return (
        <div className={style.wrapper} id="about">
            <AboutContent />
            <div className={style.image}>
                <Image src="/images/undraw_exams.svg" alt="writing tests" width="380px" height="380px" />
            </div>
        </div>
    );
};

export default AboutSection;
