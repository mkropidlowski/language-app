"use client";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import style from "./heroContent.module.scss";
import { heading, content } from "config/hero/data";
import phone from "../../../../../public/images/phone-call.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroContent = () => (
    <motion.div
        initial={{ opacity: 0, y: 175 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={style.content}
    >
        <Heading variant="h1" bold className={style.contentHeading}>
            {heading}
        </Heading>
        <p className={style.description}>{content}</p>
        <Link href="tel:607827534">
            <Button color="primary" buttonSize="big" className={style.contactUsBtn}>
                <div className={style.phoneBox}>
                    <Image src={phone} width={30} height={30} alt="phoneCall" />
                    <span>607827534</span>
                </div>
            </Button>
        </Link>
    </motion.div>
);

export default HeroContent;
