import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Link from "next/link";
import style from "./errorPage.module.scss";
import { errorText, redirectToLoginPage } from "./helpers/data";
const ErrorPage = () => (
    <div className={style.wrapper}>
        <Heading variant="h4">{errorText}</Heading>
        <Link href="/logowanie">
            <a>
                <Button color="tertiary" className={style.redirectBtn}>
                    {redirectToLoginPage}
                </Button>
            </a>
        </Link>
    </div>
);
export default ErrorPage;
