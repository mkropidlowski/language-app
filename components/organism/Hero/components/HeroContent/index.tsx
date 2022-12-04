import Button from "../../../../atoms/Button";
import Heading from "../../../../atoms/Heading";
import style from "./heroContent.module.scss";
import { heading, content, buttonText } from "../../../../../config/hero/data";

const HeroContent = () => (
    <div className={style.content}>
        <Heading variant="h1" bold className={style.contentHeading}>
            {heading}
        </Heading>
        <p className={style.description}>{content}</p>
        <Button color="primary" buttonSize="big" className={style.contactUsBtn}>
            {buttonText}
        </Button>
    </div>
);

export default HeroContent;
