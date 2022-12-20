import clsx from "clsx";
import Heading from "components/atoms/Heading";
import { FC, ReactNode } from "react";
import style from "./sectionLayout.module.scss";

export interface Props {
    className?: string;
    heading: string;
    children: ReactNode;
}
const SectionLayout: FC<Props> = ({ heading, className, children }) => (
    <div className={clsx(style.wrapper, className)}>
        <Heading variant="h3" className={style.heading}>
            {heading}
        </Heading>
        {children}
    </div>
);

export default SectionLayout;
