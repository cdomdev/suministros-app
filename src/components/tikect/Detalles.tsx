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
    const totalString = formateValue(total.toString())
    const envio = calcularCostoEnvio({ destino, precio: total });
    const valorConEnvio = (total + envio).toString();
    const valuFormated = formateValue(valorConEnvio);
    const envioFormated = formateValue(envio.toString());
    const paymentMethod = sessionStorage.getItem('paymentMethod') || null

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
            doc.text(`- ${producto.nombre} - (Cantidad: ${producto.quantity})`, 10, y);
            // doc.text(`Subtotal: $${formateValue(calcularSubTotal(producto))}`, 150, y, { align: "right" });
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

        doc.save(`Ticket-payment-${datos?.nombre?.toLocaleLowerCase()}.pdf`);
    };

    return (
        <>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                            <tr key={producto.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-balance">
                                    {producto.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {producto.quantity}
                                </td>
                                <td className="px-6 py-4 text-red-600">
                                    {producto.discount || 0} %
                                </td>
                                <td className="px-6 py-4">
                                    {formateValue(producto.valor)}
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
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3">{totalString}</td>
                        </tr>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Costo de envio</th>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3">{envioFormated}</td>
                        </tr>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Metodo de pago</th>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3">{paymentMethod ? 'Contraentrega' : 'Mercadopago'}</td>
                        </tr>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Pago Total</th>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3">{valuFormated}</td>
                        </tr>
                    </tfoot>
                </table>

                <div className='flex mt-4 mb-2 gap-2 items-center justify-center'>
                    <button className='flex items-center gap-1 border px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white duration-300  ' onClick={generateTicket}>
                        Descargar factura
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><path d="M17 18h2" /><path d="M20 15h-3v6" /><path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" /></svg>
                    </button>
                    <a href='/' className='flex items-center gap-1 border  px-4 py-2 rounded-md  hover:bg-blue-600 hover:text-white duration-300'>Volver al inicio <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg></a>
                </div>
            </div>
        </>
    );
};

export default Detalles;
