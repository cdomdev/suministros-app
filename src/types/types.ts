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
  subcategoria: any | null;
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


export interface Ruta {
  nombre: string[];
  ruta: string[];
}

export interface PropsItems {
  ruta: string[];
  nombre: string[];
}


export interface ContenidoPagina {
  titulo: string;
  subTitulo: string;
  texto: string;
  categoria: string
}

export interface Contenidos {
  [key: string]: ContenidoPagina;
}
