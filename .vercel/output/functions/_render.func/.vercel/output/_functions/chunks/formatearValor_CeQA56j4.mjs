function formateValue(value) {
  const valueParse = parseFloat(value);
  return valueParse.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export { formateValue as f };
