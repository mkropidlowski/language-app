import Footer from "components/molecules/Footer";
import NavBar from "components/molecules/NavBar";
import PolicyPrivacy from "components/molecules/PolicyPrivacy";

import { NextPage } from "next";

const PolicyPage: NextPage = () => (
    <>
        <NavBar />
        <PolicyPrivacy />
        <Footer />
    </>
);

export default PolicyPage;
