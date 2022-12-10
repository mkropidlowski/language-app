import { FC, HTMLProps, useEffect, useState } from "react";
import style from "../NavBar/navBar.module.scss";
import Link from "next/link";
import { menuLinks } from "../../../config/navbar/data";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import clsx from "clsx";
import { useActiveNavbarHook } from "../../../hooks/useActiveNavbarHook";
import { BREAKPOINT } from "./types";
import useMediaQuery from "../../../hooks/useMediaQuery";

export interface Props {
    links?: Props[];
    text?: string;
    shouldNavbarBeTransparentOnLoad?: boolean;
    disableTransparentWhenMobile?: boolean;
}

export interface LinksProps {
    text?: string;
}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({
    links = menuLinks,
    className,
    shouldNavbarBeTransparentOnLoad = false,
    disableTransparentWhenMobile = false,
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const isMobileDevice = useMediaQuery(BREAKPOINT["MAX-MD"]);
    const isNavbarActive = useActiveNavbarHook();

    useEffect(() => {
        if (isMobileDevice) {
            setIsMobile(true);
        }
    }, [isMobileDevice]);

    return (
        <nav
            className={clsx(
                style.wrapper,
                shouldNavbarBeTransparentOnLoad && !isNavbarActive && style.active,
                isMobile ? !!isNavbarActive : null,
                className
            )}
        >
            <Logo />
            {isMobile ? (
                <>
                    <input className={style.menuToggle} type="checkbox" id="menuToggle" />
                    <label className={style.menuContainer} htmlFor="menuToggle">
                        <div className={style.menuButton}></div>
                    </label>
                </>
            ) : null}
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
                                        className={style.linkButton}
                                    >
                                        {text}
                                    </Button>
                                </a>
                            </Link>
                        </li>
                    );
                })}
                <li className={clsx(style.loginButton, style.menuLinks)}>
                    <Link href="/login">
                        <a>
                            <Button type="button" color="secondary" buttonSize="small">
                                Zaloguj
                            </Button>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
