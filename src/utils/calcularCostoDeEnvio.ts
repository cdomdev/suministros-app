interface Envio {
    destino: string,
    precio: number
}
export const calcularCostoEnvio = ({ destino, precio }: Envio): number => {
    const free = 400000;
    const destinoInt = parseInt(destino, 10);

    // Si el precio es mayor o igual al umbral de envío gratis
    if (precio >= free) {
        return 0;
    } else {
        // Determinar el costo de envío basado en el destino
        switch (destinoInt) {
            case 1:
                return 15000;
            case 2:
                return 25000;
            default:
                return 30000;
        }
    }
};

