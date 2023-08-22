import { FC, HTMLProps, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import { AboutContent } from "./components/AboutContent";
import Heading from "components/atoms/Heading";
import { Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import style from "./aboutSection.module.scss";

const motionVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const itemVariants: Variants = {
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    imageInitial: {
        y: -150,
        opacity: 0,
    },
    imageAnimation: {
        y: 0,
        opacity: 1,
    },
};
const AboutSection: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const { ref: inViewRef } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -50% 0px",
        onChange(inView, entry) {
            setIsInView(inView);
        },
    });

    useEffect(() => {
        isInView ? isInView : null;
    }, [isInView]);
    return (
        <div className={clsx(style.wrapper, className)} ref={sectionRef} id="about">
            <Heading variant="h1" bold className={style.sectionHeading}>
                O nas
            </Heading>
            <motion.div
                className={style.container}
                ref={inViewRef}
                variants={motionVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
            >
                <motion.div variants={itemVariants}>
                    <AboutContent />
                </motion.div>

                <motion.div
                    className={style.image}
                    variants={itemVariants}
                    initial="imageInitial"
                    animate={isInView ? "imageAnimation" : "imageInitial"}
                    transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
                >
                    <Image src="/images/undraw_exams.svg" alt="writing tests" width="380px" height="380px" />
                </motion.div>
            </motion.div>
        </div>
    );
};
export default AboutSection;
