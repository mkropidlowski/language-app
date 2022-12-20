import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Link from "next/link";
import { FC } from "react";
import style from "./errorPage.module.scss";

export interface Props {
    errorHeading: string;
    shouldRedirectLink?: boolean;
    errorHref?: string;
    errorRedirectButtonText?: string;
}

const ErrorPage: FC<Props> = ({ errorHeading, errorHref, shouldRedirectLink, errorRedirectButtonText }) => (
    <div className={style.wrapper}>
        <Heading variant="h4">{errorHeading}</Heading>
        {shouldRedirectLink ? (
            <Link href={`/${errorHref}`}>
                <a>
                    <Button color="tertiary" className={style.redirectBtn}>
                        {errorRedirectButtonText}
                    </Button>
                </a>
            </Link>
        ) : null}
    </div>
);
export default ErrorPage;
