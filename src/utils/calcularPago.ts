import { calcularDescuentoParaTotal } from "./calcularDescuento";
import type { Producto } from "@/types/types";

export const calcularTotal = (items: Producto[] | null | undefined): number => {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  return items.reduce((total, item) => {
    const cantidad = item.quantity || 0;
    const valor = parseFloat(item.precio);

    let valorFinal;

    if (item.discount && item.discount > 0) {
      // Verifica si hay descuento y calcula el valor con descuento
      valorFinal = parseFloat(
        calcularDescuentoParaTotal(item.precio, item.discount)
      );
    } else {
      valorFinal = valor;
    }

    // Sumar el valor final multiplicado por la cantidad
    return total + valorFinal * cantidad;
  }, 0);
};
