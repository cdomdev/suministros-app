import axios from "axios";
export const prerender = false
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
    const response = await axios.get(`http://localhost:3000/producto/${id}`)
    return response.data.producto
  } catch (error) {
    console.error('Error a listar el producto por id', error)
    throw error
  }
}

export const getMostSalled = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/productos/list-most-salleds`)
    return response.data
  } catch (error) {
    console.error('Error al listar los productos mas vendidos', error)
    throw error
  }
}

export const getOfertas = async () => {
  try {
    const response = await axios.get('http://localhost:3000/ofertas')
    return response.data
  } catch (error) {
    console.log('Error al listar las ofertas', error)
    throw error
  }
}

