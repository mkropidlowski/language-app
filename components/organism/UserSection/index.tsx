import Heading from "components/atoms/Heading";
import { FC, HTMLProps, ReactNode } from "react";
import style from "./userSection.module.scss";

export interface Props {
    className?: string;
    children?: ReactNode;
}

const UserSection: FC<Props & HTMLProps<HTMLDivElement>> = ({ className, children }) => (
    <div>
        <Heading variant="h3" bold className={style.heading}>
            Użytkownicy
        </Heading>
    </div>
);

export default UserSection;
