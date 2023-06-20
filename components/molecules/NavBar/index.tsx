import { FC, HTMLProps, useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Button from "components/atoms/Button";
import { menuLinks } from "config/navbar/data";
import { useActiveNavbarHook } from "hooks/useActiveNavbarHook";
import { BREAKPOINT } from "./types";
import useMediaQuery from "hooks/useMediaQuery";
import { useHideMobileMenu } from "hooks/useHideMobileMenu";
import style from "./navBar.module.scss";
import Logo from "components/icons/Logo";

export interface Props {
    links?: Props[];
    text?: string;
    hideNavbar?: boolean;
}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({ links = menuLinks, className, hideNavbar = false }) => {
    const [isMobile, setIsMobile] = useState(false);
    const isMobileDevice = useMediaQuery(BREAKPOINT["MAX-MD"]);
    const isNavbarHide = useHideMobileMenu();

    useEffect(() => {
        if (isMobileDevice) {
            setIsMobile(true);
        }
    }, [isMobileDevice]);

    return (
        <nav className={clsx(style.wrapper, className)}>
            <div className={style.logo}>
                <Logo width={50} height={50} />
                <h3>Nazwa_strony</h3>
            </div>
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
            </ul>
        </nav>
    );
};

export default NavBar;
