import { FC, HTMLProps } from "react";
import style from "./post.module.scss";
import Heading from "components/atoms/Heading";
import ReadMoreReadLess from "components/atoms/ReadMore";
import Button from "components/atoms/Button";

export interface Props {
    className?: string;
    id?: string;
    heading: string;
    content: string;
    author: string;
}

const Post: FC<Props & HTMLProps<HTMLDivElement>> = ({ className, heading, content, author, children }) => {
    return (
        <div className={style.wrapper}>
            <Heading variant="h3" className={style.heading}>
                {heading}
            </Heading>
            <p className={style.postAuthor}>{author} / 11-11-1111</p>
            <ReadMoreReadLess className={style.postContent}>{content}</ReadMoreReadLess>
            {children}
        </div>
    );
};

export default Post;
