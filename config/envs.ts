export const publicEnvs = {
    GMAIL_ADRESS: process.env.NEXT_PUBLIC_AUTH_GMAIL as string,
    GMAIL_PASSWORD: process.env.NEXT_PUBLIC_AUTH_PASS as string,
    RECAPTCHA_WEB_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_WEB_KEY as string,
    RECAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY as string,
};

export const isDevServer = process.env.NODE_ENV === "development";
