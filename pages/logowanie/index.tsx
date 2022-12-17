import SeoData from "components/atoms/SeoData";
import LoginForm from "components/organism/LoginForm";
import { NextPage } from "next";

const LoginPageDefault: NextPage = () => (
    <>
        <SeoData title="Language-App" description="Logowanie do portalu Laguage-App" />
        <LoginForm />
    </>
);

export default LoginPageDefault;
