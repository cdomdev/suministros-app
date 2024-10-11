import axios from "axios"
import type { propPago, propMercadopago } from "@/types/types"
import { HOST } from "@/congif"


export const pago = async ({ productos, datos, ruta, valorDeEnvio }: propPago) => {
    try {
        const response = await axios.post(`${HOST}/finish/${ruta}`, {
            datos,
            valorDeEnvio,
            productos,
        })
        return response
    } catch (e) {
        throw e
    }
}

export const mercadoPago = async ({ productos, datos, ruta, valorDeEnvio, }: propMercadopago) => {
    try {
        const response = await axios.post(`${HOST}/finish/${ruta}`, {
            datos,
            valorDeEnvio,
            productos,
        })
        return response
    } catch (e) {
        throw e
    }
}

