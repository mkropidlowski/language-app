import axios from "axios";
import { publicEnvs } from "config/envs";
import { FC, useEffect, useState } from "react";
import { errorTextForDataCouldntFetch } from "config/errorsText/data";
import { postSectionHeader } from "config/panelSection/data";
import SectionLayout from "components/molecules/SectionLayout";
import Post from "components/molecules/Post";
import ErrorPage from "../ErrorPage";
import style from "./postSection.module.scss";
import { Loading } from "components/icons";
import Button from "components/atoms/Button";

const API = `${publicEnvs.BASE_URL_API}/posts`;

const PostSection: FC = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        axios
            .get(API)
            .then((response) => {
                setData(response.data);
                setError(false);
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    const DeletePost = (postId: number) => {
        axios
            .delete(`${API}/${postId}`)
            .then((response) => {
                setData(response.data);
                setError(false);
            })
            .catch((err) => setError(true));
    };

    return (
        <SectionLayout heading={postSectionHeader}>
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
                                    >
                                        <Button
                                            type="button"
                                            color="primary"
                                            buttonSize="small"
                                            data-id={id}
                                            className={style.deleteBtn}
                                            onClick={() => DeletePost(id)}
                                        >
                                            Usuń
                                        </Button>
                                    </Post>
                                </>
                            ))}
                        </>
                    ) : (
                        <Loading />
                    )}
                </div>
            )}
        </SectionLayout>
    );
};

export default PostSection;
