import { formateValue } from "./formatearValor";

export type ProductItem = {
    cantidad: number;
    valor: number;
};

export const calcularTotal = (items: ProductItem[] | null | undefined): number => {
    if (!Array.isArray(items) || items.length === 0) {
        return 0;
    }

    return items.reduce((total, item) => {
        const itemCantidad = item.cantidad || 0;
        const itemValor = parseFloat(item.valor.toString()) || 0;
        return total + itemCantidad * itemValor;
    }, 0);
};
