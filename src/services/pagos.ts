import axios from "axios"
import type { DatosUsurio, Producto } from "@/types/types"

type propPago = {
    productos: Producto[]
    datos: DatosUsurio | undefined,
    ruta: string,
    valorDeEnvio: number,
    metodoPago: string
}

const API_HOST = 'http://localhost:3000'
export const pago = async ({ productos, datos, ruta, valorDeEnvio, metodoPago }: propPago) => {
    try {
        const response = await axios.post(`${API_HOST}/finish/${ruta}`, {
            datos,
            valorDeEnvio,
            productos,
            metodoPago
        })
        return response
    } catch (e) {
        throw e
    }
}




