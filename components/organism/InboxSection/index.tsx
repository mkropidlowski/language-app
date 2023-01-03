import axios from "axios";
import { useEffect, useState } from "react";
import { publicEnvs } from "config/envs";
import Button from "components/atoms/Button";
import { Loading } from "components/icons";
import EmailBox from "components/molecules/EmailBox";
import SectionLayout from "components/molecules/SectionLayout";
import { errorTextForDataCouldntFetch } from "config/errorsText/data";
import { inboxSectionHeader } from "config/panelSection/data";

import ErrorPage from "../../atoms/ErrorPage";
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
    const DeletePost = (emailId: number) => {
        axios
            .delete(`${API}/${emailId}`)
            .then((response) => {
                setData(response.data);
                setError(false);
            })
            .catch(() => setError(false));
    };

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
                            {Object.values(data).map(({ added_at, id, content }) => (
                                <>
                                    <EmailBox
                                        key={id}
                                        added_at={added_at}
                                        name={content.name}
                                        sender_email={content.sender_email}
                                        message={content.message}
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
                                    </EmailBox>
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

export default InboxSection;
