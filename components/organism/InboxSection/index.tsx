import axios from "axios";
import { Loading } from "components/icons";
import EmailBox from "components/molecules/EmailBox";
import SectionLayout from "components/molecules/SectionLayout";
import { publicEnvs } from "config/envs";
import { errorTextForDataCouldntFetch } from "config/errorsText/data";
import { inboxSectionHeader } from "config/panelSection/data";
import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage";
import style from "./inboxSection.module.scss";

const API = `${publicEnvs.BASE_URL_API}/emails`;

const InboxSection = () => {
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
        <SectionLayout heading={inboxSectionHeader}>
            {error ? (
                <ErrorPage
                    errorHeading={errorTextForDataCouldntFetch.errorHeading}
                    shouldRedirectLink
                    errorRedirectButtonText={errorTextForDataCouldntFetch.errorRedirectButtonText}
                    errorHref={errorTextForDataCouldntFetch.errorRedirectHref}
                />
            ) : (
                <div className={style.container}>
                    {data ? (
                        <>
                            {Object.values(data).map(({ added_at, content }) => (
                                <EmailBox
                                    key={added_at}
                                    added_at={added_at}
                                    name={content.name}
                                    sender_email={content.sender_email}
                                    message={content.message}
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

export default InboxSection;
