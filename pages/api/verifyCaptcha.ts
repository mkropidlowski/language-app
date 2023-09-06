import { publicEnvs } from "config/envs";
("use server");

const SECRET_KEY = publicEnvs.RECAPTCHA_SECRET_KEY;

export async function verifyCaptcha(token: string | null) {
    try {
        const res = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`,
            {
                method: "POST",
                mode: "no-cors",
            }
        );

        if (res) {
            return "success!";
        } else {
            throw new Error("Failed Captcha");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
