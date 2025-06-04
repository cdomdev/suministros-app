export interface Producto {
  id: number;
  marca: string;
  titulo: string;
  precio: string;
  description: string;
  image: string;
  referencia: string;
  descuento: number;
  categoria?: Categoria;
  subcategoria?: Categoria;
  quantity?: number;
}

interface Categoria {
  id: string;
  nombre: string;
}
export type ProductoCarrito = {
  producto: Producto;
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
  categoria: string;
}

export interface ContenidoPaginaOfertas {
  titulo: string;
  subTitulo: string;
  texto: string;
}

export interface Contenidos {
  [key: string]: ContenidoPagina;
}

export interface ValuesIniSesion {
  email: string;
  password: string;
}

export interface ValuesRegistro {
  nombre: string;
  email: string;
  password: string;
}

export interface DatosUsurio extends ResponsIPInfo {
  id?: number;
  nombre?: string;
  apellido?: string;
  picture?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  destino?: string;
  detalles?: string;
}

export interface DataForgotPassword {
  nombre?: string;
  email?: string;
}

export interface ValuesPassWords {
  password: string;
  password2: string;
}

export interface ResetPassword {
  values: ValuesPassWords;
  token: string;
}

export interface GoogleAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  authuser?: string;
  prompt?: string;
}

export type DataUserUpdate = {
  telefono: number | string;
  direccion: string | string;
};

interface DetallePedido {
  id: number;
  precio_unitario: string;
  sub_total: string;
  cantidad: number;
  descuento: number;
  Producto: Producto;
}

export interface Pedido {
  id: string;
  costo_de_envio: number;
  pago_total: number;
  estado_pedido: string | null;
  detalles_pedido: DetallePedido[];
}

export interface PedidosResponse {
  pedidos: Pedido[];
}

export type ResponsIPInfo = {
  city?: string | null;
  region?: string | null;
  country?: string | null;
  postal?: string | null;
  loc?: string | null;
  ip?: string | null;
  org?: string | null;
  timezone?: string | null;
};

export type propPago = {
  productos: Producto[];
  datos: DatosUsurio;
  valorDeEnvio: number;
};

export type propMercadopago = {
  productos: Producto[];
  datos: DatosUsurio;
  ruta: string;
  valorDeEnvio: number;
};
