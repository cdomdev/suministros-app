import { formateValue } from "./formatearValor";

export function calcularDescuento(value: string, discount: number) {
  // Convierte el valor de string a número
  const valueNumber = parseFloat(value);

  // Si el descuento es null o 0, retorna el valor original formateado
  if (!discount) {
    const valueString = valueNumber.toString();
    // Retorna el valor formateado
    return formateValue(valueString);
  }

  // Calcula el descuento
  const discountOfert = (valueNumber * discount) / 100;
  const valueFinish = valueNumber - discountOfert;

  // Formatea el valor final y retorna como string
  const valueFinishString = valueFinish.toString();
  return formateValue(valueFinishString);
}

export const calcularDescuentoParaTotal = (
  valor: string,
  discount: number
): string => {
  const valorNumerico = parseFloat(valor);
  const descuentoAplicado = valorNumerico - valorNumerico * (discount / 100);
  return descuentoAplicado.toFixed(2);
};
