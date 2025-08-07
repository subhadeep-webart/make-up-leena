"use server";

import axios from "axios";
import { BASE_URL } from "@/utils/constant";

// Create Axios instance
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        // "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
});

export default axiosInstance;
