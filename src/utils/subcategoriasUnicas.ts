import type { Producto } from "@/types/types";
// Funcion para obtener subcategorias
export const subcategoriasUnicas = (productos: Producto[]) => {
  const subcategorias = [
    ...new Set(
      productos.map((producto: Producto) => producto.subcategoria.nombre)
    ),
  ];
  return subcategorias;
};
