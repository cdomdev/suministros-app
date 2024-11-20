import { jsPDF } from 'jspdf';
import type { Producto, DatosUsurio } from "@/types/types";
import { useEffect, useState } from "react";
import { calcularCostoEnvio, calcularSubTotal, calcularTotal, formateValue } from '@/utils';

const Detalles = () => {
    const [productos, setProductos] = useState<Producto[]>();
    const [datos, setDatos] = useState<DatosUsurio>();

    useEffect(() => {
        const carrito = JSON.parse(sessionStorage.getItem('carrito') || '[]');
        const datosUsuario = JSON.parse(sessionStorage.getItem('dataUserForBuy') || '[]');
        setProductos(carrito);
        setDatos(datosUsuario);
    }, []);

    const destino = datos?.destino || '0';
    const total = calcularTotal(productos);
    const envio = calcularCostoEnvio({ destino, precio: total });
    const valorConEnvio = (total + envio).toString();
    const valuFormated = formateValue(valorConEnvio);
    const envioFormated = formateValue(envio.toString());

    const generateTicket = () => {
        const doc = new jsPDF();
        // Coordenada inicial vertical
        let y = 20;

        // Título
        doc.setFontSize(16);
        doc.text("Factura de Compra", 105, y, { align: "center" });
        y += 10;

        // Datos del usuario
        doc.setFontSize(12);
        doc.text(`Nombre: ${datos?.nombre || '-'}`, 10, y);
        doc.text(`Email: ${datos?.email || '-'}`, 10, y + 10);
        doc.text(`Teléfono: ${datos?.telefono || '-'}`, 10, y + 20);
        y += 30;

        // Dirección de envío
        doc.text("Dirección de Envío:", 10, y);
        doc.text(`Dirección: ${datos?.direccion || '-'}`, 10, y + 10);
        doc.text(`Detalles: ${datos?.detalles || '-'}`, 10, y + 20);
        y += 30;

        // Lista de productos
        doc.setFontSize(14);
        doc.text("Productos:", 10, y);
        y += 10;

        doc.setFontSize(12);
        productos?.forEach((producto) => {
            doc.text(`- ${producto.nombre} (x${producto.quantity})`, 10, y);
            doc.text(`Subtotal: $${formateValue(calcularSubTotal(producto))}`, 150, y, { align: "right" });
            y += 10;

            // Manejo de salto de página
            if (y > 280) {
                doc.addPage();
                y = 20;
            }
        });

        y += 10;

        doc.setFontSize(14);
        doc.text("Resumen:", 10, y);
        y += 10;

        doc.setFontSize(12);
        doc.text(`Costo de Envío: $${envioFormated}`, 10, y);
        doc.text(`Total: $${valuFormated}`, 10, y + 10);

        doc.save(`Factura-usuario.pdf`);
    };

    return (
        <>

            {/* <div>
                <div>
                    <div className="flex justify-between">
                        <h4 className="text-xs md:text-base uppercase font-semibold">Productos</h4>
                        <h4 className="text-xs md:text-base uppercase font-semibold">Subtotal</h4>
                    </div>
                    {productos?.map((producto) => (
                        <div key={producto.id}>
                            <div className="flex justify-between">
                                <span>
                                    <p className="text-xs md:text-sm">{producto.nombre}</p>
                                    <p className="text-xs md:text-sm"> Unidades: <strong>{producto.quantity}</strong></p>
                                </span>
                                <p className="text-xs md:text-sm">$: {calcularSubTotal(producto)}</p>
                            </div>
                            <hr className="border-dashed my-1" />
                        </div>
                    ))}
                </div>

                <div className="flex justify-between">
                    <div className="flex flex-col pt-2">
                        <h4 className="text-xs md:text-base uppercase font-semibold">Costo de envío</h4>
                        <p className="pl-2 text-xs md:text-sm">$: {formateValue(envioFormated)}</p>
                    </div>
                    <div className="flex flex-col pt-2">
                        <h4 className="text-xs md:text-base uppercase font-semibold">Pago total</h4>
                        <p className="pl-2 text-xs md:text-sm">$: {valuFormated}</p>
                    </div>
                </div>

                <button
                    onClick={generateTicket}
                    className="border bg-blue-600 text-white rounded-md py-2 px-4 mt-4"
                >
                    Decargar factura
                </button>
            </div>
 */}
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Productos
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Referencia
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
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
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {producto.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {producto.referencia}
                                </td>
                                <td className="px-6 py-4">
                                    {producto.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {producto.valor}
                                </td>
                                <td className="px-6 py-4">
                                    {calcularSubTotal(producto)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Subtotal</th>
                            <td className="px-6 py-3">3</td>
                            <td className="px-6 py-3">21,000</td>
                        </tr>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Costo de envio</th>
                            <td className="px-6 py-3">3</td>
                            <td className="px-6 py-3">21,000</td>
                        </tr>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Pago Total</th>
                            <td className="px-6 py-3">3</td>
                            <td className="px-6 py-3">21,000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>


        </>
    );
};

export default Detalles;
