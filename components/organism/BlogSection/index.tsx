import ErrorPage from "components/atoms/ErrorPage";
import { Loading } from "components/icons";
import Post from "components/molecules/Post";
import { publicEnvs } from "config/envs";
import { errorTextForDataCouldntFetch } from "config/errorsText/data";
import { getPost } from "modules/blog/services";
import { FC, useEffect, useState } from "react";
import style from "./blogSection.module.scss";

const API = `${publicEnvs.BASE_URL_API}/posts`;

export interface Props {}

const BlogSection: FC<Props> = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getPost(API)
            .then((response) => {
                setData(response);
                setError(false);
            })
            .catch(() => {
                setError(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={style.wrapper} id="posts">
            {error ? (
                <ErrorPage
                    errorHeading={errorTextForDataCouldntFetch.errorHeading}
                    shouldRedirectLink
                    errorRedirectButtonText={errorTextForDataCouldntFetch.errorRedirectButtonText}
                    errorHref={errorTextForDataCouldntFetch.errorRedirectHref}
                />
            ) : (
                <div className={style.posts}>
                    {data ? (
                        <>
                            {Object.values(data).map(({ added_at, id, postContent }) => (
                                <>
                                    <Post
                                        key={added_at + id}
                                        heading={postContent.heading}
                                        content={postContent.content}
                                        author={postContent.author}
                                        added_at={added_at}
                                        className={style.post}
                                    ></Post>
                                </>
                            ))}
                        </>
                    ) : (
                        <Loading />
                    )}
                </div>
            )}
        </div>
    );
};

export default BlogSection;
