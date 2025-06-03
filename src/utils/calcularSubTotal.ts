import type { Producto } from "@/types/types";
import { formateValue } from "./formatearValor";

export const calcularSubTotal = (producto: Producto) => {
  const cantidad = producto.quantity ?? 0;
  const valor = parseFloat(producto.precio) ?? 0;
  const descuento = producto.discount;

  let valorTotal;
  if (descuento && descuento > 0) {
    let valorDeDescuento = (valor * descuento) / 100;
    valorTotal = (valor - valorDeDescuento) * cantidad;
  } else {
    valorTotal = cantidad * valor;
  }

  const valueParsed = valorTotal.toFixed(2);
  return formateValue(valueParsed);
};
