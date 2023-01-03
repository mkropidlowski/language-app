import { FC, ReactNode } from "react";
import clsx from "clsx";
import Heading from "components/atoms/Heading";
import { Loading } from "components/icons";
import { useAuthContext } from "hooks/useAuthContext";
import style from "./sectionLayout.module.scss";

export interface Props {
    className?: string;
    heading: string;
    children: ReactNode;
}
const SectionLayout: FC<Props> = ({ heading, className, children }) => {
    const { user } = useAuthContext();
    return (
        <>
            {user ? (
                <div className={clsx(style.wrapper, className)}>
                    <Heading variant="h3" className={style.heading}>
                        {heading}
                    </Heading>
                    {children}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default SectionLayout;
