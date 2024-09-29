import axios from "axios"
const API_HOST = "http://localhost:3000";
export const busquedaProductos = async (searchTerm: string) => {
    try {
        const response = await axios.post(`${API_HOST}/busqueda-productos`, { query: searchTerm })
        return response
    } catch (e) {
        throw e
    }
}