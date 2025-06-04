import type { propPago, propMercadopago } from "@/types/types";
import { query } from "./query";

export const pago = async ({ productos, datos, valorDeEnvio }: propPago) => {
  const response = query(`/user/shoping-finish`, "POST", {
    datos,
    valorDeEnvio,
    productos,
  });
  return response;
};

export const mercadoPago = async ({
  productos,
  datos,
  valorDeEnvio,
}: propMercadopago) => {
  const response = query(`/finish/`, "POST", {
    datos,
    valorDeEnvio,
    productos,
  });
  return response;
};
