import Link from "next/link";
import style from "./socialButtons.module.scss";
import { socialMediaLinks } from "../../../../../config/form/data";
import { FC, ReactElement, SVGProps, HTMLProps } from "react";

export interface Props {
    links?: LinksProps[];
}
export interface LinksProps {
    href?: string;
    icon?: ReactElement<SVGProps<SVGSVGElement>>;
}

export const SocialButton: FC<Props & HTMLProps<HTMLDivElement>> = ({ links = socialMediaLinks }) => (
    <div className={style.wrapper}>
        {Object.values(links).map(({ href, icon }) => {
            return (
                <Link key={href} href={href}>
                    <a>{icon}</a>
                </Link>
            );
        })}
    </div>
);
