import type { Producto } from "@/types/types";
import { calcularCostoEnvio } from "@/utils/calcularCostoDeEnvio";
import { calcularSubTotal } from "@/utils/calcularSubTotal";
import { formateValue } from "@/utils/formatearValor";
import { useState, useEffect } from "react";
import { calcularTotal } from "@/utils/calcularPago";
import { useUbicacion } from "@/hook/useUbicacion";

const DatosProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const { departamento } = useUbicacion();

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setProductos(carrito);
  }, []);

  const subtotal = calcularTotal(productos);
  const envio = calcularCostoEnvio({ departamento, subtotal });
  const valorString = formateValue(envio.toString());

  return (
    <div className=" max-h-96 overflow-y-auto ">
      {productos && productos.length > 0 ? (
        <span className="text-xs md:text-sm leading-5 text-balance flex flex-col">
          Este es el costo de envio de tu compra
          <span>
            <strong>Costo de envio: $: {valorString}</strong>{" "}
          </span>
        </span>
      ) : (
        <p className="text-sm text-center text-gray-400">
          No hay datos par un proceso de pago
        </p>
      )}
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="flex flex-col  border bg-white my-2 p-1"
        >
          <div className="flex items-center">
            <img
              src={producto.image}
              alt={producto.titulo}
              className="size-24 md:size-32 mb-2"
            />
            <div>
              <p className="text-xs md:text-sm text-balance">
                <strong>Producto: </strong> {producto.titulo}
              </p>
              <span className="text-xs md:text-sm flex gap-1">
                <strong>Precio unidad:</strong> {formateValue(producto.precio)}
              </span>
              <span className="text-xs md:text-sm flex gap-1">
                <strong>Cantidada:</strong> {producto.quantity}
              </span>
              <span className="text-xs md:text-sm flex gap-1">
                <strong>Referencia:</strong> {producto.referencia}
              </span>
              <span className="text-xs md:text-sm flex gap-1">
                <strong>Descuento:</strong>{" "}
                <span className="text-red-600">{producto.descuento || 0}%</span>{" "}
              </span>
            </div>
          </div>
          <div className="w-full border p-2">
            <span className="px-1 text-sm ">
              <strong>Subtotal:</strong> {calcularSubTotal(producto)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DatosProductos;
