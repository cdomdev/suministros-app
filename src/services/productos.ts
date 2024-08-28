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


export const getProductoBy = async ({ id }: { id: string }) => {
  try {
    const response = await `http://localhost:3000/productos/${id}`
    return response
  } catch (error) {
    console.error('Error a listar el producto por id', error)
  }
}