import { FC, ReactNode } from "react";
import SeoData from "../../atoms/SeoData";
import Footer from "../../organism/Footer";
import NavBar from "../NavBar";
import style from "./pageLayout.module.scss";

interface Props {
    title: string;
    description: string;
    children: ReactNode;
    shouldNavbarBeTransparentOnLoad?: boolean;
}

const PageLayout: FC<Props> = ({ title, description, shouldNavbarBeTransparentOnLoad, children }) => (
    <>
        <SeoData title={title} description={description} />
        <NavBar shouldNavbarBeTransparentOnLoad={shouldNavbarBeTransparentOnLoad} className={style.wrapper} />
        <main className={style.container}>{children}</main>
        <Footer />
    </>
);

export default PageLayout;
