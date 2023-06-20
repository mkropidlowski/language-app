import { FC, ReactNode } from "react";
import SeoData from "components//atoms/SeoData";
import Footer from "components/molecules/Footer";
import NavBar from "components/molecules/NavBar";
import style from "./pageLayout.module.scss";

interface Props {
    title: string;
    description: string;
    children: ReactNode;
    hideNavbar?: boolean;
}

const PageLayout: FC<Props> = ({ title, description, hideNavbar, children }) => (
    <>
        <SeoData title={title} description={description} />
        <NavBar hideNavbar={hideNavbar} className={style.wrapper} />
        <main className={style.container}>{children}</main>
        <Footer />
    </>
);

export default PageLayout;
