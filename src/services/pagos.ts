import axios from "axios"
import type { DatosUsurio, Producto } from "@/types/types"

type propPago = {
    productos: Producto[]
    datos: DatosUsurio,
    ruta: string,
    valorDeEnvio: number,
}

type propMercadopago = {
    productos: Producto[]
    datos: DatosUsurio,
    ruta: string,
    valorDeEnvio: number,
}

const API_HOST = 'http://localhost:3000'
export const pago = async ({ productos, datos, ruta, valorDeEnvio }: propPago) => {
    try {
        const response = await axios.post(`${API_HOST}/finish/${ruta}`, {
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
        const response = await axios.post(`${API_HOST}/finish/${ruta}`, {
            datos,
            valorDeEnvio,
            productos,
        })
        return response
    } catch (e) {
        throw e
    }
}

