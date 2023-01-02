import { FC, HTMLProps } from "react";
import style from "./post.module.scss";
import Heading from "components/atoms/Heading";
import ReadMoreReadLess from "components/atoms/ReadMore";
import clsx from "clsx";

export interface Props {
    className?: string;
    heading: string;
    content: string;
    author: string;
    added_at: string;
}

const Post: FC<Props & HTMLProps<HTMLDivElement>> = ({
    className,
    added_at,
    heading,
    content,
    author,
    children,
    ...rest
}) => (
    <div className={clsx(style.wrapper, className)} {...rest}>
        <Heading variant="h3" className={style.heading}>
            {heading}
        </Heading>
        <p className={style.postAuthor}>
            {author} - {added_at}
        </p>
        <ReadMoreReadLess className={style.postContent}>{content}</ReadMoreReadLess>
        {children}
    </div>
);

export default Post;
