import Button from "components/atoms/Button";
import Link from "next/link";
import { FC } from "react";
import style from "./redirectLink.module.scss";
import clsx from "clsx";

export interface Props {
    shouldRedirectLink?: boolean;
    href?: string;
    redirectButtonText?: string;
    className?: string;
}

const RedirectLink: FC<Props> = ({ href, shouldRedirectLink, redirectButtonText, className }) => (
    <div className={clsx(style.wrapper, className)}>
        {shouldRedirectLink ? (
            <Button color="tertiary" className={style.backToHomepageBtn}>
                <Link href={`${href}`}>
                    <a>{redirectButtonText}</a>
                </Link>
            </Button>
        ) : null}
    </div>
);
export default RedirectLink;
