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

export interface PropsItemsCat {
  ruta: string;
  nombre: string;
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

export interface ValuesIniSesion {
  email: string,
  password: string,
}

export interface ValuesRegistro {
  nombre: string,
  email: string,
  password: string,
}

export interface PropProfile {
  picture: string,
  nombre: string,
  email: string,
}

export interface DatosEnvio {
  nombre?: string | null,
  apellido?: string | null,
  email?: string | null,
  telefono: string,
  direccion: string,
  destino: string
  detalles: string
}

export interface DataForgotPassword {
  nombre?: string,
  email?: string
}

export interface ValuesPassWords {
  password: string;
  password2: string;
}

export interface ResetPassword {
  values: ValuesPassWords;
  token: string;
}


export type ProductItem = {
  cantidad: number;
  valor: number;
};