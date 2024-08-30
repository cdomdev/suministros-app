import type { Producto } from "@/types/types";
import { formateValue } from "./formatearValor";

export const calcularSubTotal = (producto: Producto) => {
    const cantidad = producto.quantity ?? 0;
    const valor = parseFloat(producto.valor) ?? 0;

    // Verificación explícita de tipos para evitar errores
    const total = (typeof cantidad === 'number' && typeof valor === 'number')
        ? cantidad * valor
        : 0;

    const valueParsed = total.toString();
    return formateValue(valueParsed);
};