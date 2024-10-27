import axios from "axios"
import type { DataUserUpdate, PedidosResponse } from "@/types/types";
import type { ResponsIPInfo } from "@/types/types";
import { HOST } from "@/congif";

const token = import.meta.env.PUBLIC_TOKEN_IPINFO

export const getOrdersBy = async (id: string): Promise<PedidosResponse> => {
    try {
        const response = await axios.get(`${HOST}/user/pedidos/${id}`);
        return response.data as PedidosResponse;
    } catch (error) {
        throw error;
    }
};

export const updateProfile = async (email: string, dataUpdate: DataUserUpdate) => {
    try {
        const response = await axios.post(`${HOST}/user/profile-update`, { email, dataUpdate });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getDataIp = async (): Promise<ResponsIPInfo> => {
    try {
        const response = await axios.get(`https://ipinfo.io/json?token=${token}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching IP data:", error);
        throw error;
    }
};