import axios from "axios";
import Heading from "components/atoms/Heading";
import EmailBox from "components/molecules/EmailBox";
import SectionLayout from "components/molecules/SectionLayout";
import { publicEnvs } from "config/envs";
import { errorTextForDataCouldntFetch } from "config/errorsText/data";
import { inboxSectionHeader } from "config/panelSection/data";
import { useState } from "react";
import ErrorPage from "../ErrorPage";
import style from "./inboxSection.module.scss";

const API = `${publicEnvs.BASE_URL_API}/emails`;

const InboxSection = () => {
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
                    {Object.values(data).map(({ name, sender_email, message }) => {
                        return (
                            <EmailBox key={sender_email} name={name} sender_email={sender_email} message={message} />
                        );
                    })}
                </div>
            )}
        </SectionLayout>
    );
};

export default InboxSection;
