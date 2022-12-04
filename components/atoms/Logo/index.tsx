import { FC, HTMLProps } from "react";
import Image from "next/image";
import Heading from "../../atoms/Heading";
import Link from "next/link";
import style from "./Logo.module.scss";

export interface Props {
    className?: string;
}

const Logo: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => (
    <div className={style.logo}>
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
