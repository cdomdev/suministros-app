import axios from "axios"
import { HOST } from "@/congif";

export const busquedaProductos = async (searchTerm: string) => {
    try {
        const response = await axios.post(`${HOST}/busqueda-productos`, { query: searchTerm })
        return response
    } catch (e) {
        throw e
    }
}