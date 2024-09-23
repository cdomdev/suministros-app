import axios from "axios"
import type { DataUserUpdate, Pedido, PedidosResponse } from "@/types/types";
const HOST = "http://localhost:3000"

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