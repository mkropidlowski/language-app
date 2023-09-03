import Heading from "components/atoms/Heading";
import style from "./formContent.module.scss";
import { formHeading, formContentText } from "config/form/data";

import Newsletter from "components/icons/Newsletter";

export const FormContent = () => (
    <div className={style.content}>
        <Newsletter width={"300px"} height={"300px"} className={style.image} />
        <div className={style.heading}>
            <Heading variant="h4">{formHeading}</Heading>
            <p className={style.contentText}>{formContentText}</p>
        </div>
    </div>
);
