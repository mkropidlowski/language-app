import Heading from "components/atoms/Heading";
import UserTable from "components/molecules/UserTable";
import { FC, HTMLProps, ReactNode } from "react";
import style from "./userSection.module.scss";

export interface Props {
    className?: string;
    children?: ReactNode;
}

const UserSection: FC<Props & HTMLProps<HTMLDivElement>> = ({ className, children }) => (
    <div className={style.wrapper}>
        <Heading variant="h3" bold className={style.heading}>
            Użytkownicy
        </Heading>
        <UserTable />
    </div>
);

export default UserSection;
