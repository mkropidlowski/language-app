import { useState } from "react";
const isBrowser = typeof window !== "undefined";

export const useActiveNavbarHook = () => {
    const [isNavbarActive, setIsNavbarActive] = useState<boolean>(false);

    const changeColor = () => {
        if (window.scrollY > 80) {
            setIsNavbarActive(true);
        } else {
            setIsNavbarActive(false);
        }
    };
    if (isBrowser) {
        window.addEventListener("scroll", changeColor);
    }
    return isNavbarActive;
};
