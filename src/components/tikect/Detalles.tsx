import type { Producto, DatosUsurio } from "@/types/types";
import { useEffect, useState } from "react";
import {
  calcularCostoEnvio,
  calcularSubTotal,
  calcularTotal,
  formateValue,
  generateTicket,
} from "@/utils";

const Detalles = () => {
  const [productos, setProductos] = useState<Producto[]>();
  const [datos, setDatos] = useState<DatosUsurio>();
  const [data, setData] = useState<DatosUsurio>({})

  useEffect(() => {
    try {
      const carrito = JSON.parse(sessionStorage.getItem("carrito") || "[]");
      const dataUser = JSON.parse(
        sessionStorage.getItem("infoProfileUSer") || "{}"
      );

        // data de usuario envio
      const data = JSON.parse(localStorage.getItem("dataUserForBuy") || "{}")
      
      
      if (dataUser && typeof dataUser === "object") setData(data);
      if (Array.isArray(carrito)) setProductos(carrito);
      if (dataUser && typeof dataUser === "object") setDatos(dataUser);
    } catch (error) {
      console.error("Error al parsear los datos del sessionStorage", error);
    }
  }, []);

  const destino = datos?.destino || "0";
  const total = calcularTotal(productos) || 0;
  const totalString = formateValue(total.toString());

  const envioRaw = calcularCostoEnvio({ destino, precio: total });
  const envio = isNaN(envioRaw) ? 0 : envioRaw;

  const valorConEnvio = (total + envio).toString();
  const valuFormated = formateValue(valorConEnvio);
  const envioFormated = formateValue(envio.toString());

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table
          id="table-pdf"
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-2 md:px-6 py-3 font-semibold">
                Productos
              </th>
              <th scope="col" className="px-2 md:px-6 py-3 font-semibold">
                Cantidad
              </th>
              <th scope="col" className="px-2 md:px-6 py-3 font-semibold">
                Descuento
              </th>
              <th scope="col" className="px-2 md:px-6 py-3 font-semibold">
                Precio
              </th>
              <th scope="col" className="px-2 md:px-6 py-3 font-semibold">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {productos?.map((producto) => (
              <tr
                key={producto.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="md:px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-balance"
                >
                  {producto.titulo}
                </th>
                <td className="md:px-6 py-4">{producto.quantity}</td>
                <td className="md:px-6 py-4 text-red-600">
                  {producto.descuento || 0} %
                </td>
                <td className="md:px-6 py-4">
                  {formateValue(producto.precio)}
                </td>
                <td className="md:px-6 py-4">{calcularSubTotal(producto)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="text-gray-900 dark:text-white">
            <tr>
              <td colSpan={5}>
                <hr className="border-dashed mb-1 w-full" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-3 text-sm md:text-base">
                Subtotal
              </th>
              <td colSpan={4} className="px-6 py-3">
                {totalString}
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <hr className="border-dashed mb-1 w-full" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-3 text-sm md:text-base">
                Costo de envío
              </th>
              <td colSpan={4} className="px-6 py-3">
                {envioFormated}
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <hr className="border-dashed mb-1 w-full" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-3 text-sm md:text-base">
                Método de pago
              </th>
              <td colSpan={4} className="px-6 py-3">
                Contra entrega
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <hr className="border-dashed mb-1 w-full" />
              </td>
            </tr>
            <tr className="font-bold">
              <th scope="row" className="px-6 py-3 text-sm md:text-base">
                Pago Total
              </th>
              <td colSpan={4} className="px-6 py-3">
                {valuFormated}
              </td>
            </tr>
          </tfoot>
        </table>

        <hr className="border-dashed mb-1 w-full" />
        <div className="flex flex-col md:flex-row mt-4 mb-2 gap-2 items-center justify-center">
          <button
            className="flex items-center gap-1 uppercase text-xs font-semibold border px-4 py-2.5 md:py-2 rounded-md bg-blue-600 text-white duration-300 hover:text-gray-400 hover:bg-gray-500"
            onClick={() => generateTicket(datos ?? {}, productos || null, data)}
          >
            Descargar factura
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf size-4 md:size-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
              <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
              <path d="M17 18h2" />
              <path d="M20 15h-3v6" />
              <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
            </svg>
          </button>
          <a
            href="/"
            className="flex items-center uppercase text-xs gap-1 font-semibold border px-[3.3em] py-2.5 md:py-2 rounded-md bg-gray-400 duration-300 hover:text-slate-50 hover:bg-blue-500"
          >
            Volver al inicio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-home size-4 md:size-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Detalles;
