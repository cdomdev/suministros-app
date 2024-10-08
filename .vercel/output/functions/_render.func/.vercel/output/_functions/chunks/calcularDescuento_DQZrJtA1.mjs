import { f as formateValue } from './formatearValor_CeQA56j4.mjs';

function calcularDescuento(value, discount) {
  const valueNumber = parseFloat(value);
  if (!discount) {
    const valueString = valueNumber.toString();
    return formateValue(valueString);
  }
  const discountOfert = valueNumber * discount / 100;
  const valueFinish = valueNumber - discountOfert;
  const valueFinishString = valueFinish.toString();
  return formateValue(valueFinishString);
}
const calcularDescuentoParaTotal = (valor, discount) => {
  const valorNumerico = parseFloat(valor);
  const descuentoAplicado = valorNumerico - valorNumerico * (discount / 100);
  return descuentoAplicado.toFixed(2);
};

export { calcularDescuentoParaTotal as a, calcularDescuento as c };
