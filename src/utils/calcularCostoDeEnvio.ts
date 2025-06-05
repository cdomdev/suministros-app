interface Envio {
  departamento: string;
  subtotal: number;
}

export const calcularCostoEnvio = ({ departamento, subtotal }: Envio): number => {
  const ENVIO_GRATIS_UMBRAL = 400000;

  if (subtotal >= ENVIO_GRATIS_UMBRAL) return 0;

  const departamentoNormalizado = departamento.trim().toLowerCase();

  const departamentosConEnvioReducido = ["cundinamarca", "bogotá d.c."];

  const esEnvioReducido = departamentosConEnvioReducido.includes(departamentoNormalizado);

  return esEnvioReducido ? 20000 : 40000;
};
