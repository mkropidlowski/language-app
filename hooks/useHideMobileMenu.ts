import { useState } from "react";
const isBrowser = typeof window !== "undefined";

export const useHideMobileMenu = () => {
    const [isNavbarHide, setIsNavbarHide] = useState<boolean>(false);

    const hideMenu = () => {
        if (window.scrollY > 20) {
            setIsNavbarHide(true);
        } else {
            setIsNavbarHide(false);
        }
    };
    if (isBrowser) {
        window.addEventListener("scroll", hideMenu);
    }
    return isNavbarHide;
};
