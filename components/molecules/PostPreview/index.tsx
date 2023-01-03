import { FC } from "react";
import Heading from "components/atoms/Heading";
import style from "./postPreview.module.scss";

export interface Props {
    heading?: string;
    content?: string;
    author?: string;
}
const PostPreview: FC<Props> = ({ heading, author, content }) => (
    <div className={style.wrapper}>
        <Heading variant="h4" bold>
            Widok posta na stronie głównej
        </Heading>
        <div className={style.content}>
            <Heading variant="h3" className={style.viewHeading}>
                {heading}
            </Heading>
            <span className={style.viewAuthor}>{author}</span>
            <div className={style.viewContent}>{content}</div>
        </div>
    </div>
);

export default PostPreview;
