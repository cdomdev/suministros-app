import axios from "axios";
import type { Producto } from "@/types/types";
import { HOST } from "@/congif";

export const getAllProducts = async (): Promise<Producto[]> => {
  try {
    const response = await axios.get(
      `${HOST}/productos`
    );
    return response.data;
  } catch (error) {
    console.error("Error al listar los productos", error);
    throw error;
  }
}

export const getProductos = async (categoria: string, producto: string) => {
  const encodedRuta = encodeURIComponent(producto);

  try {
    const response = await axios.get(
      `${HOST}/${categoria}/${encodedRuta}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al listar los productos", error);
    throw error;
  }
};


export const getProductoBy = async ({ id }: { id: string }) => {
  try {
    const response = await axios.get(`${HOST}/producto/${id}`)
    return response.data.producto
  } catch (error) {
    console.error('Error a listar el producto por id', error)
    throw error
  }
}

export const getMostSalled = async () => {
  try {
    const response = await axios.get(`${HOST}/productos/list-most-salleds`)
    return response.data
  } catch (error) {
    console.error('Error al listar los productos mas vendidos', error)
    throw error
  }
}

export const getOfertas = async () => {
  try {
    const response = await axios.get(`${HOST}/ofertas`)
    return response.data
  } catch (error) {
    console.log('Error al listar las ofertas', error)
    throw error
  }
}

