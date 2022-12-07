import Heading from "../../../../atoms/Heading";
import style from "./formContent.module.scss";
import { formHeading, formContentText } from "../../../../../config/form/data";
import { SocialButton } from "../SocialButtons/SocialButons";

export const FormContent = () => (
    <div className={style.content}>
        <div className={style.heading}>
            <Heading variant="h3">{formHeading}</Heading>
            <p className={style.contentText}>{formContentText}</p>
        </div>
        <div className={style.socialMediaIcon}>
            <SocialButton />
        </div>
    </div>
);
