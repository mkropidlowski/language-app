import { FC } from "react";
import SectionLayout from "components/molecules/SectionLayout";
import UserTable from "components/molecules/UserTable";
import { userSectionHeader } from "config/panelSection/data";

const UserSection: FC = () => (
    <SectionLayout heading={userSectionHeader}>
        <UserTable />
    </SectionLayout>
);

export default UserSection;
