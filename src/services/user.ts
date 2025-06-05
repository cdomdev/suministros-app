import type { DataUserUpdate } from "@/types/types";
import { query } from "./query";

export const getOrdersBy = async (id?: string) => {
  const response = await query(`/user/pedidos/${id}`, "GET");
  return response.data;
};

export const updateProfile = async (
  email: string,
  dataUpdate: DataUserUpdate
) => {
  const response = await query(`/user/update-profile`, "PUT", {
    email,
    dataUpdate,
  });
  return response;
};

export const getMessages = async (id: number | undefined) => {
  const response = await query(`/user/mssm/${id}`, "GET");

  console.log(response);
  return response;
};
