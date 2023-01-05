import clsx from "clsx";
import { FC } from "react";
import Dashboard from "../Dashboard";
import style from "./panelContent.module.scss";

interface Props {
    content?: JSX.Element;
    className?: string;
}

const PanelContent: FC<Props> = ({ content, className }) => (
    <div className={clsx(style.wrapper, className)}>{content ? content : <Dashboard />}</div>
);

export default PanelContent;
