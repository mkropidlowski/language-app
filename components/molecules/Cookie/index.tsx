import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import style from "./cookie.module.scss";
import Button from "components/atoms/Button";

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(!Cookie.get("cookie_token"));

    useEffect(() => {
        const acceptCookies = Cookie.get("cookie_token");
        if (acceptCookies !== "true") {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        Cookie.set("cookie_token", "true", { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner || typeof window === "undefined") {
        return null;
    }
    return (
        showBanner && (
            <div className={style.wrapper}>
                <p>Ta strona używa plików cookie. Klikając &quot;Akceptuj&quot;, wyrażasz zgodę na ich użycie.</p>
                <Button type="button" color="primary" onClick={handleAcceptCookies}>
                    Akceptuj
                </Button>
            </div>
        )
    );
};

export default CookieBanner;
