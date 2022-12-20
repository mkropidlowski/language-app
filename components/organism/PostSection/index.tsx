import Heading from "components/atoms/Heading";
import Post from "components/molecules/Post";
import style from "./postSection.module.scss";
import { FC, useState } from "react";
import { publicEnvs } from "config/envs";
import axios from "axios";
import { errorTextForDataCouldntFetch } from "config/errorsText/data";
import ErrorPage from "../ErrorPage";

const API = `${publicEnvs.BASE_URL_API}/posts`;

const PostSection: FC = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState<boolean>(false);
    axios
        .get(API)
        .then((response) => {
            setData(response.data);
            setError(false);
        })
        .catch(() => {
            setError(true);
        });

    return (
        <div className={style.wrapper}>
            <Heading variant="h3" bold className={style.heading}>
                Posty
            </Heading>
            {error ? (
                <ErrorPage
                    errorHeading={errorTextForDataCouldntFetch.errorHeading}
                    shouldRedirectLink
                    errorRedirectButtonText={errorTextForDataCouldntFetch.errorRedirectButtonText}
                    errorHref={errorTextForDataCouldntFetch.errorRedirectHref}
                />
            ) : (
                <div className={style.posts}>
                    {Object.values(data).map(({ heading, content, author }) => (
                        <Post key={heading} heading={heading} content={content} author={author} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostSection;
