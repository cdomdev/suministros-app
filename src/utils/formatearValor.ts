export function formateValue(value?: string) {
  if (!value) return null;
  const valueParse = parseFloat(value);
  return valueParse.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const priceFormated = (value: number | string) => {
  if (typeof value === "string") {
    return formateValue(value);
  } else {
    let valueText = value.toString();
    return formateValue(valueText);
  }
};
