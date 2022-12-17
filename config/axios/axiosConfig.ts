import axios from "axios";
import { publicEnvs } from "config/envs";

export const instance = axios.create();
instance.defaults.baseURL = publicEnvs.BASE_URL_API;
