import { instance } from "config/axios/axiosConfig";

const FORM_URL = `http://localhost:4000/api/email`;

export const sendMessage = async () => {
    const res = await instance.post(FORM_URL, {
        headers: {
            Signature: "to jest sygnaturaaaa",
        },
    });
};
