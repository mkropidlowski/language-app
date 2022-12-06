import { FC, HTMLProps, useId, useState } from "react";
import style from "./slider.module.scss";
import Image from "next/image";
import { LeftArrow, RightArrow } from "../../icons";

export interface Props {
    slides: SliderData[];
}

export interface SliderData {
    image?: string;
}

const Slider: FC<Props & HTMLProps<HTMLImageElement>> = ({ slides }) => {
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
        <div className={style.slider} id="galery">
            <LeftArrow width={"44px"} height={"44px"} className={style.arrow} onClick={prevSlide} />
            <div className={style.slideItem}>
                {slides.map((item, i) => (
                    <div key={`${id}-${i}`} className={i === current ? "slide active" : "slide"}>
                        {i === current && (
                            <Image
                                src={item.image}
                                alt="slide image"
                                className={style.image}
                                width={"1000px"}
                                height={"600px"}
                            />
                        )}
                    </div>
                ))}
            </div>
            <RightArrow width={"44px"} height={"44px"} className={style.arrow} onClick={nextSlide} />
        </div>
    );
};

export default Slider;
