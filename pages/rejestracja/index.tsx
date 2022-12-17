import SeoData from "components/atoms/SeoData";
import RegisterForm from "components/organism/RegisterForm";
import { NextPage } from "next";

const RegisterPageDefault: NextPage = () => (
    <>
        <SeoData title="Language-App" description="Rejestracja w portalu Laguage-App" />
        <RegisterForm />
    </>
);

export default RegisterPageDefault;
