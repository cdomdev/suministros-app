import type { DataForgotPassword, ValuesIniSesion, ValuesRegistro, ResetPassword } from "@/types/types"
import axios from "axios"

const HOST = "http://localhost:3000"
export const validaSesion = async (values: ValuesIniSesion) => {
    try {
        const response = await axios.post(`${HOST}/user/login`, values, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export const register = async (values: ValuesRegistro) => {
    try {
        const response = await axios.post(`${HOST}/user/register`, values, {
            withCredentials: true
        })
        return response
    } catch (e) {
        throw e
    }
}


export const sendRequestResettPassword = async (values: DataForgotPassword) => {
    try {
        const response = await axios.post(`${HOST}/user/validate-email`, values, {
            withCredentials: true
        })
        return response
    } catch (e) {
        throw e
    }

}

export const resetPassword = async ({ values, token }: ResetPassword) => {
    if (!token) {
        throw new Error('Token is missing.');
    }

    try {
        const response = await axios.post(`${HOST}/reset-password/${token}`, values, {
            withCredentials: true
        });
        return response;
    } catch (e) {
        throw e;
    }
};

