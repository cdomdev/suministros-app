export function formateValue(value: string | number): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "$0";
  return `$${num.toFixed(2)}`;
}

export const priceFormated = (value: number | string) => {
  if (typeof value === "string") {
    return formateValue(value);
  } else {
    let valueText = value.toString();
    return formateValue(valueText);
  }
};
