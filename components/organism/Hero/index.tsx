import { FC, HTMLProps } from "react";
import style from "./hero.module.scss";
import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage/HeroImage";

export interface Props {
    className?: string;
}

const Hero: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => (
    <div className={style.wrapper}>
        <HeroImage />
        <HeroContent />
    </div>
);

export default Hero;
