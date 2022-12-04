import { FC, HTMLProps } from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import Heading from "../../atoms/Heading";
import { heading, content } from "./helpers/Content";
import Button from "../../atoms/Button";

export interface Props {
    className?: string;
}

const Hero: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => (
    <div className={style.wrapper}>
        <HeroContent />
        <div className={style.image}>
            <Image src={`/images/teach.gif`} alt="exams gif" width="500px" height="500px" />
        </div>
    </div>
);

const HeroContent = () => (
    <div className={style.content}>
        <Heading variant="h2" className={style.contentHeading}>
            {heading}
        </Heading>
        <p className={style.description}>{content}</p>
        <Button color="primary" buttonSize="medium" className={style.contactUsBtn}>
            Skontaktuj się z nami!
        </Button>
    </div>
);

export default Hero;
