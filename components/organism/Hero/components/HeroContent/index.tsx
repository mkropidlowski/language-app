import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import style from "./heroContent.module.scss";
import { heading, content } from "config/hero/data";
import phone from "../../../../../public/images/phone-call.png";
import Link from "next/link";
import Image from "next/image";

const HeroContent = () => (
    <div className={style.content}>
        <Heading variant="h1" bold className={style.contentHeading}>
            {heading}
        </Heading>
        <p className={style.description}>{content}</p>
        <Link href="tel:555555555">
            <Button color="primary" buttonSize="big" className={style.contactUsBtn}>
                <div className={style.phoneBox}>
                    <Image src={phone} width={30} height={30} alt="phoneCall" />
                    <span>555 555 555</span>
                </div>
            </Button>
        </Link>
    </div>
);

export default HeroContent;
