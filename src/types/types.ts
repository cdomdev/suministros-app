// types.ts
export interface Producto {
  id: number;
  marca: string;
  nombre: string;
  valor: string;
  description: string;
  image: string;
  referencia: string;
  discount: number | null;
  subcategoria: any;
  quantity?: number
}


export type ProductoCarrito = {
  image?: string;
  nombre: string;
  quantity?: number;
  referencia: string;
  id: number
};

export interface ApiResponse {
  productos: Producto[];
}


