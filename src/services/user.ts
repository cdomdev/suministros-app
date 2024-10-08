import axios from "axios"
import type { DataUserUpdate, Pedido, PedidosResponse } from "@/types/types";
import type { ResponsIPInfo } from "@/types/types";
const HOST = "http://localhost:3000"
const token = import.meta.env.PUBLIC_TOKEN_PIINFO
export const getOrders = async (id: number): Promise<PedidosResponse> => {
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