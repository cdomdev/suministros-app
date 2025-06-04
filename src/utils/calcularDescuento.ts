import { formateValue } from "./formatearValor";

export function calcularDescuento(value: string, descuento: number) {
  // Convierte el valor de string a número
  const valueNumber = parseFloat(value);

  // Si el descuento es null o 0, retorna el valor original formateado
  if (!descuento) {
    const valueString = valueNumber.toString();
    // Retorna el valor formateado
    return formateValue(valueString);
  }

  // Calcula el descuento
  const descuentoOfert = (valueNumber * descuento) / 100;
  const valueFinish = valueNumber - descuentoOfert;

  // Formatea el valor final y retorna como string
  const valueFinishString = valueFinish.toString();
  return formateValue(valueFinishString);
}

export const calcularDescuentoParaTotal = (
  valor: string,
  descuento: number
): string => {
  const valorNumerico = parseFloat(valor);
  const descuentoAplicado = valorNumerico - valorNumerico * (descuento / 100);
  return descuentoAplicado.toFixed(2);
};
