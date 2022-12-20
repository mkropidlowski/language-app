import { instance } from "config/axios/axiosConfig";
import { AddFormProps } from "./types";
import { publicEnvs } from "config/envs";

const FORM_URL = `${publicEnvs.BASE_URL_API}/posts`;

export const addPost = async (body: AddFormProps) => {
    const res = await instance.post(FORM_URL, body, {
        headers: {
            Signature: "to jest sygnaturaaaa",
        },
    });
};
