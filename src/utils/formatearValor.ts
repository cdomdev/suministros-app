export function formateValue(value: string) {
    const valueParse = parseFloat(value)
    return valueParse.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}