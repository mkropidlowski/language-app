import { instance } from "config/axios/axiosConfig";
import { ContactFormProps } from "./types";

const FORM_URL = `http://localhost:4000/api/email`;

export const sendMessage = async (body: ContactFormProps) => {
    const res = await instance.post(FORM_URL, body, {
        headers: {
            Signature: "to jest sygnaturaaaa",
        },
    });
};
