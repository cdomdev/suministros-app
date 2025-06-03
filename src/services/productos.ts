import { query } from "./query";

export const getAllProducts = async (category: string, param: string) => {
  const response = await query(
    `products/${category}-list?${category}=${param}`,
    "GET"
  );
  return response.data;
};

export const getProductoBy = async (id: string) => {
  const response = await query(`products/${id}`, "GET");

  return response.data.producto;
};

export const getMostSalled = async () => {
  const response = await query(`/products/list-most-salleds`, "GET");

  return response.data;
};

export const getOfertas = async () => {
  const response = await query(`products/list-oferts`, "GET");

  return response.data;
};

export const busquedaProductos = async (searchTerm: string) => {
  const response = await query(`/products/search-products`, "POST", {
    query: searchTerm,
  });
  return response;
};
