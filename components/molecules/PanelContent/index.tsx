import { FC } from "react";
import Dashboard from "../Dashboard";
import style from "./panelContent.module.scss";

interface Props {
    content?: JSX.Element;
}

const PanelContent: FC<Props> = ({ content }) => {
    return <div className={style.wrapper}>{content ? content : <Dashboard />}</div>;
};

export default PanelContent;
