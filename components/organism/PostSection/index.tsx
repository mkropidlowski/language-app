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
                            {Object.values(data).map(({ added_at, postContent }) => (
                                <Post
                                    key={added_at}
                                    heading={postContent.heading}
                                    content={postContent.content}
                                    author={postContent.author}
                                />
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
