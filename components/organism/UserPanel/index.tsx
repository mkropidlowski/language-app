import style from "./userPanel.module.scss";
import { FC, useState } from "react";
import PanelContent from "components/molecules/PanelContent";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import { panelHeading, panelMenuLinks } from "config/panelMenu/data";

export interface Props {
    text?: string;
    links?: Props[];
}

const UserPanel: FC<Props> = ({ links = panelMenuLinks }) => {
    const [section, setSection] = useState<JSX.Element>(null);

    return (
        <div className={style.wrapper}>
            <div className={style.leftColumn}>
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
    );
};

export default UserPanel;
