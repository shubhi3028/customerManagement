import axios from "axios";

export const BASE_URL = "http://localhost:81";

export const myAxios = axios.create({
    baseURL: BASE_URL,
});