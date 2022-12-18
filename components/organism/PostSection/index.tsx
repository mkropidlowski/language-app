import Heading from "components/atoms/Heading";
import Post from "components/molecules/Post";
import style from "./postSection.module.scss";
import { sectionHeading, fakeJson } from "components/molecules/Post/data";
import { FC } from "react";

interface Props {
    postData?: PostProps[];
    className?: string;
}

export interface PostProps {
    id?: string;
    heading: string;
    content: string;
    author: string;
}
const PostSection: FC<Props> = ({ postData = fakeJson }) => {
    return (
        <div className={style.wrapper}>
            <Heading variant="h3" bold className={style.heading}>
                {sectionHeading}
            </Heading>
            <div className={style.posts}>
                {postData.map(({ id, heading, content, author }) => (
                    <Post key={id} heading={heading} content={content} author={author} />
                ))}
            </div>
        </div>
    );
};

export default PostSection;
