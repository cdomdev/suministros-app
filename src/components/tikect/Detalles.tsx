import type { Producto, DatosUsurio } from "@/types/types";
import { useEffect, useState } from "react";
import {
    calcularCostoEnvio,
    calcularSubTotal,
    calcularTotal,
    formateValue,
    generateTicket
} from "@/utils";


const Detalles = () => {
    const [productos, setProductos] = useState<Producto[]>();
    const [datos, setDatos] = useState<DatosUsurio>();

    useEffect(() => {
        setProductos(JSON.parse(sessionStorage.getItem("carrito") || "[]"));
        setDatos(JSON.parse(sessionStorage.getItem("dataUserForBuy") || "[]"));
    }, []);

    const destino = datos?.destino || "0";
    const total = calcularTotal(productos);
    const totalString = formateValue(total.toString());
    const envio = calcularCostoEnvio({ destino, precio: total });
    const valorConEnvio = (total + envio).toString();
    const valuFormated = formateValue(valorConEnvio);
    const envioFormated = formateValue(envio.toString());

    return (
        <>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table
                    id="table-pdf"
                    className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Productos
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descuento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos?.map((producto) => (
                            <tr
                                key={producto.id}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-balance">
                                    {producto.titulo}
                                </th>
                                <td className="px-6 py-4">{producto.quantity}</td>
                                <td className="px-6 py-4 text-red-600">
                                    {producto.discount || 0} %
                                </td>
                                <td className="px-6 py-4">{formateValue(producto.precio)}</td>
                                <td className="px-6 py-4">{calcularSubTotal(producto)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className=" text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-sm md:ext-base">
                                Subtotal
                            </th>

                            <td className="px-6 py-3">{totalString}</td>
                        </tr>
                        <tr className=" text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-sm md:text-base">
                                Costo de envio
                            </th>

                            <td className="px-6 py-3">{envioFormated}</td>
                        </tr>
                        <tr className=" text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-sm md:text-base">
                                Metodo de pago
                            </th>

                            <td className="px-6 py-3">
                                Contraentrega
                            </td>
                        </tr>
                        <tr className=" text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-sm md:text-base">
                                Pago Total
                            </th>

                            <td className="px-6 py-3">{valuFormated}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="flex flex-col md:flex-row mt-4 mb-2 gap-2 items-center justify-center">
                    <button
                        className="flex items-center uppercase text-xs  font-semibold border px-4 py-2.5 md:py-2 rounded-md bg-blue-600 text-white duration-300 hover:text-gray-400 hover:bg-gray-500 "
                        onClick={() => generateTicket(datos ?? {}, productos || null)}>
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf size-4 md:size-5">
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
                        className="flex items-center uppercase text-xs  font-semibold border px-[3.3em]  py-2.5 md:py-2 rounded-md bg-gray-400 duration-300 hover:text-slate-50 hover:bg-blue-500 ">
                        Volver al inicio{" "}
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-home size-4 md:size-5">
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
