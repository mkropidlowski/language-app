import { FC, HTMLProps } from "react";
import Image from "next/image";
import Heading from "components/atoms/Heading";
import Link from "next/link";
import style from "./logo.module.scss";
import clsx from "clsx";

export interface Props {
    className?: string;
}

const Logo: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => (
    <div className={clsx(style.logo, className)}>
        <Link href="/">
            <a>
                <Image src={`/images/uk-logo.png`} alt="ABC Logo" width="35px" height="35px" />
            </a>
        </Link>
        <Heading variant="h3" bold>
            <span className={style.companyName}>ABC</span>
        </Heading>
    </div>
);

export default Logo;
