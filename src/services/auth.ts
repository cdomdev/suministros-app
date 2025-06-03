import type {
  DataForgotPassword,
  ValuesIniSesion,
  ValuesRegistro,
  ResetPassword,
  GoogleAuthResponse,
} from "@/types/types";
import { query } from "./query";

export const validaSesion = async (values: ValuesIniSesion) => {
  const response = await query(`/auth/login`, "POST", {
    values,
  });
  return response;
};

export const googleAuth = async (response: GoogleAuthResponse) => {
  const responseServer = await query(`/auth/google`, "POST", {
    token: response.access_token,
  });
  return responseServer;
};

export const register = async (values: ValuesRegistro) => {
  const response = await query(`/auth/register`, "POST", {
    values,
  });
  return response;
};

export const sendRequestResettPassword = async (values: DataForgotPassword) => {
  const response = await query(`/auth/forgot-password`, "POST", {
    values,
  });
  return response;
};

export const resetPassword = async ({ values, token }: ResetPassword) => {
  if (!token) {
    throw new Error("Token is missing.");
  }

  const response = await query(`/auth/reset-password?token=${token}`, "POST", {
    values,
  });
  return response;
};

const clearStorege = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const logout = async () => {
  await query(`/auth/logout`, "POST");
  clearStorege();
  window.location.reload();
};
