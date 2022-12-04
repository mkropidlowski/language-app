import { FC, HTMLProps } from "react";
import style from "../NavBar/navBar.module.scss";
import Link from "next/link";
import { menuLinks } from "../../../config/navbar/data";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import clsx from "clsx";
import { useActiveNavbarHook } from "../../../hooks/useActiveNavbarHook";

export interface Props {
    links?: Props[];
    text?: string;
    shouldNavbarBeTransparentOnLoad?: boolean;
}

export interface LinksProps {
    text?: string;
}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({
    links = menuLinks,
    className,
    shouldNavbarBeTransparentOnLoad = false,
}) => {
    const isNavbarActive = useActiveNavbarHook();
    return (
        <nav
            className={clsx(
                style.wrapper,
                shouldNavbarBeTransparentOnLoad && !isNavbarActive && style.active,
                className
            )}
        >
            <Logo />
            <ul className={style.menu}>
                {Object.values(links).map(({ id, text }) => {
                    const linksHref = `/#${id}`;
                    return (
                        <li key={text} className={style.menuLinks}>
                            <Link href={linksHref}>
                                <a>
                                    <Button
                                        type="button"
                                        color="tertiary"
                                        buttonSize="medium"
                                        className={style.menuButton}
                                    >
                                        {text}
                                    </Button>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className={style.loginButton}>
                <Link href="/login">
                    <a>
                        <Button type="button" color="secondary" buttonSize="small">
                            Zaloguj
                        </Button>
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
