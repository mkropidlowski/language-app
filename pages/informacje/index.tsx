import SeoData from "components/atoms/SeoData";
import Information from "components/molecules/Information";
import NavBar from "components/molecules/NavBar";
import { NextPage } from "next";
import styles from "./information.module.scss";

const InformationPage: NextPage = () => {
    return (
        <>
            <SeoData title="ABCFC.pl" description="Szkoła nauki języka Angielskiego!" />
            <NavBar className={styles.nav} />
            <Information />
        </>
    );
};

export default InformationPage;
