import { FC, HTMLProps, useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Button from "components/atoms/Button";
import Logo from "components/atoms/Logo";
import { menuLinks } from "config/navbar/data";
import { useActiveNavbarHook } from "hooks/useActiveNavbarHook";
import { BREAKPOINT } from "./types";
import useMediaQuery from "hooks/useMediaQuery";
import { useHideMobileMenu } from "hooks/useHideMobileMenu";
import { useAuthContext } from "hooks/useAuthContext";
import { useLogout } from "hooks/useLogout";
import style from "./navBar.module.scss";

export interface Props {
    links?: Props[];
    text?: string;
    shouldNavbarBeTransparentOnLoad?: boolean;
    hideNavbar?: boolean;
}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({
    links = menuLinks,
    className,
    shouldNavbarBeTransparentOnLoad = false,
    hideNavbar = false,
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const isMobileDevice = useMediaQuery(BREAKPOINT["MAX-MD"]);
    const isNavbarActive = useActiveNavbarHook();
    const isNavbarHide = useHideMobileMenu();
    const { user } = useAuthContext();
    const { logout } = useLogout(user);

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
                className
            )}
        >
            <Logo />
            {isMobile ? (
                <>
                    <input className={style.menuToggle} type="checkbox" id="menuToggle" />
                    <label className={style.menuContainer} htmlFor="menuToggle">
                        <div className={clsx(style.menuButton, hideNavbar && !isNavbarHide && style.menuDefault)}></div>
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
                    {!user ? (
                        <Link href="/logowanie">
                            <a>
                                <Button type="button" color="secondary" buttonSize="small">
                                    Zaloguj
                                </Button>
                            </a>
                        </Link>
                    ) : (
                        <div className={style.additionalBtnBox}>
                            <Link href="/panel_uzytkownika">
                                <a>
                                    <Button type="button" color="primary" buttonSize="small">
                                        Panel
                                    </Button>
                                </a>
                            </Link>
                            <Button type="button" color="secondary" buttonSize="small" onClick={logout}>
                                Wyloguj
                            </Button>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
