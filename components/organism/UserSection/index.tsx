import SectionLayout from "components/molecules/SectionLayout";
import UserTable from "components/molecules/UserTable";
import { userSectionHeader } from "config/panelSection/data";
import { FC } from "react";

const UserSection: FC = () => (
    <SectionLayout heading={userSectionHeader}>
        <UserTable />
    </SectionLayout>
);

export default UserSection;
