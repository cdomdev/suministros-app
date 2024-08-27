import axios from "axios";

export const getProductos = async (categoria: string, producto: string) => {
  const encodedRuta = encodeURIComponent(producto);

  try {
    const response = await axios.get(
      `http://localhost:3000/${categoria}/${encodedRuta}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al listar los productos", error);
    throw error;
  }
};
