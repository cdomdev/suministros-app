import type { Values } from "@/types/types"
import axios from "axios"

export const validaSesion = async (values: Values) => {
    try {
        const response = await axios.post(`http://localhost:3000/user/login`, values, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        throw error;
    }
};