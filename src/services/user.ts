import axios from "axios";
import type { DataUserUpdate, PedidosResponse } from "@/types/types";
import { HOST } from "@/congif";
import { query } from "./query";

export const getOrdersBy = async (id: string): Promise<PedidosResponse> => {
  try {
    const response = await axios.get(`${HOST}/user/pedidos/${id}`, {
      withCredentials: true,
    });
    return response.data as PedidosResponse;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (
  email: string,
  dataUpdate: DataUserUpdate
) => {
  try {
    const response = await axios.post(
      `${HOST}/user/profile-update`,
      {
        email,
        dataUpdate,
      },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getDataIp = async () => {
  const response = await query(`/location/data-ip-info`, "GET");
  return response.data.data;
};

export const getMessages = async (id: number | undefined) => {
  try {
    const response = await axios.get(`${HOST}/user/mssm/${id}`, {
      withCredentials: true,
    });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
