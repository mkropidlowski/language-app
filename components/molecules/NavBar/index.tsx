import { FC, HTMLProps, useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Button from "components/atoms/Button";
import { menuLinks } from "config/navbar/data";
import { BREAKPOINT } from "./types";
import useMediaQuery from "hooks/useMediaQuery";
import style from "./navBar.module.scss";
import Logo from "components/icons/Logo";

export interface Props {
    links?: Props[];
    text?: string;
    hideNavbar?: boolean;
}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({ links = menuLinks, className, hideNavbar = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const isMobileDevice = useMediaQuery(BREAKPOINT["MAX-LG"]);

    useEffect(() => {
        if (isMobileDevice) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [isMobileDevice]);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={clsx(style.wrapper, className)}>
            <Link href={"/"} className={style.logoLink}>
                <div className={style.logo}>
                    <Logo width={50} height={50} />
                    <h3>ABC FC Langowska</h3>
                </div>
            </Link>

            {isMobile ? (
                <div className={style.hamburgerIcon} onClick={handleMenuClick}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
            ) : null}

            <ul className={clsx(style.menu, isOpen ? style.open : "")} data-cy="navLinks">
                {Object.values(links).map(({ id, text, redirectToComponent }) => {
                    const linksHref = `/#${id}`;
                    const hrefToComponent = `/${id}`;
                    return (
                        <li key={text} className={style.menuLinks}>
                            {redirectToComponent ? (
                                <Link href={hrefToComponent}>
                                    <Button
                                        type="button"
                                        color="tertiary"
                                        buttonSize="medium"
                                        className={style.linkButton}
                                        onClick={handleLinkClick}
                                    >
                                        {text}
                                    </Button>
                                </Link>
                            ) : (
                                <Link href={linksHref}>
                                    <a>
                                        <Button
                                            type="button"
                                            color="tertiary"
                                            buttonSize="medium"
                                            className={style.linkButton}
                                            onClick={handleLinkClick}
                                        >
                                            {text}
                                        </Button>
                                    </a>
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
