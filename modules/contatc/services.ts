import { instance } from "config/axios/axiosConfig";
import { ContactFormProps } from "./types";
import { publicEnvs } from "config/envs";

const FORM_URL = `${publicEnvs.BASE_URL_API}/api/email`;

export const sendMessage = async (body: ContactFormProps) => {
    const res = await instance.post(FORM_URL, body, {
        headers: {
            Signature: "",
        },
    });
};
