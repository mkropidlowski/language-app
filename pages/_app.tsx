import { AuthContextProvider } from "context/AuthContext";
import React from "react";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />;
        </AuthContextProvider>
    );
}

export default MyApp;
