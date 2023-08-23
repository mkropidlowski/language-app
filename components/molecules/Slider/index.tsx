import { FC, HTMLProps, useId, useState } from "react";
import style from "./slider.module.scss";
import Image from "next/image";
import { Arrow } from "components/icons";
import clsx from "clsx";
import Heading from "components/atoms/Heading";

export interface Props {
    slides: SliderData[];
}

export interface SliderData {
    image?: string;
}

const Slider: FC<Props & HTMLProps<HTMLImageElement>> = ({ slides, className }) => {
    const id = useId();

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={clsx(style.slider, className)} id="galery">
            <Heading variant="h1" bold className={style.sectionHeading}>
                Galeria
            </Heading>
            <div className={style.slideItem}>
                {slides.map((item, i) => (
                    <div key={`${id}-${i}`} className={clsx(i === current ? style.slide && style.acive : style.slide)}>
                        {i === current && (
                            <Image
                                src={item.image}
                                alt="slide image"
                                className={style.image}
                                width={"800px"}
                                height={"500px"}
                                loading={"eager"}
                                objectFit="contain"
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className={style.arrowBox}>
                <Arrow
                    width={"44px"}
                    height={"44px"}
                    className={clsx(style.leftArrow, style.arrow)}
                    onClick={prevSlide}
                />
                <Arrow
                    width={"44px"}
                    height={"44px"}
                    className={clsx(style.rightArrow, style.arrow)}
                    onClick={nextSlide}
                />
            </div>
        </div>
    );
};

export default Slider;
