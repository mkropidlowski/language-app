import Image from "next/image";
import style from "./heroImage.module.scss";
import heroBackground from "public/images/background.jpg";
import herofilter from "public/images/filter.png";

const HeroImage = () => (
    <>
        <div className={style.image}>
            <Image src={heroBackground} alt="heroImage" layout="fill" objectFit="cover" />
        </div>
        <div className={style.image}>
            <Image src={herofilter} alt="herofilter" layout="fill" objectFit="cover" />
        </div>
    </>
);

export default HeroImage;
