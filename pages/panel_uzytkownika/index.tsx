import clsx from "clsx";
import SeoData from "components/atoms/SeoData";
import NavBar from "components/molecules/NavBar";
import UserPanel from "components/organism/UserPanel";
import style from "./userPanelPage.module.scss";
import { NextPage } from "next";

const UserPanelPage: NextPage = () => (
    <>
        <SeoData title="Language-App" description="Rejestracja w portalu Laguage-App" />
        <NavBar className={style.nav} />
        <UserPanel className={style.panel} />
    </>
);

export default UserPanelPage;
