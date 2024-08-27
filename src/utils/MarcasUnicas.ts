import type { Producto } from "@/types/types";

export const obtenerMarcasUnicas = (productos: Producto[]) => {
  const marcasUnicas = [
    ...new Set(productos.map((producto: Producto) => producto.marca)),
  ];
  return marcasUnicas;
};
