import { FC, useState } from "react";
import style from "./userPanel.module.scss";
import PanelContent from "components/molecules/PanelContent";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import ErrorPage from "components/atoms/ErrorPage";
import { panelHeading, panelMenuLinks, greetingText } from "config/panelMenu/data";
import { useAuthContext } from "hooks/useAuthContext";
import { errorTextIfUserAuthFail } from "config/errorsText/data";

export interface Props {
    text?: string;
    links?: Props[];
}

const UserPanel: FC<Props> = ({ links = panelMenuLinks }) => {
    const [section, setSection] = useState<JSX.Element>(null);
    const { user } = useAuthContext();

    return (
        <>
            {user ? (
                <div className={style.wrapper}>
                    <div className={style.leftColumn}>
                        <Heading variant="h4" className={style.greetingHeading}>
                            {greetingText} {user.email}
                        </Heading>
                        <Heading variant="h3" bold className={style.heading}>
                            {panelHeading}
                        </Heading>
                        <ul className={style.menu}>
                            {Object.values(links).map(({ text, content, btnVariant }) => {
                                const contentHref = content;
                                return (
                                    <li key={text} className={style.menuLinks}>
                                        <Button
                                            type="button"
                                            color={btnVariant ? "primary" : "secondary"}
                                            buttonSize="medium"
                                            className={style.linkButton}
                                            onClick={() => setSection(contentHref)}
                                        >
                                            {text}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={style.rightColumn}>
                        <PanelContent content={section} />
                    </div>
                </div>
            ) : (
                <ErrorPage
                    shouldRedirectLink
                    errorHeading={errorTextIfUserAuthFail.errorHeading}
                    errorHref={errorTextIfUserAuthFail.errorRedirectHref}
                    errorRedirectButtonText={errorTextIfUserAuthFail.errorRedirectButtonText}
                />
            )}
        </>
    );
};

export default UserPanel;
