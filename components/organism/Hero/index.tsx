import { FC, HTMLProps } from "react";
import style from "./hero.module.scss";
import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage/HeroImage";
import clsx from "clsx";

export interface Props {
    className?: string;
}

const Hero: FC<Props & HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
    <div className={clsx(style.wrapper, className)} {...rest}>
        <HeroImage />
        <HeroContent />
    </div>
);

export default Hero;
