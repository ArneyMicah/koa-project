import axios from "axios";
import { proxyAgent } from "./config.js";
const instance = axios.create({
    baseURL: "localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    httpsAgent: proxyAgent(),
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default instance;