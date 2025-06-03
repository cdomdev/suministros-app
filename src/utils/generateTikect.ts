import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { Producto, DatosUsurio } from "@/types/types";
import { formateValue } from "./formatearValor";
import { calcularCostoEnvio } from "./calcularCostoDeEnvio";
import { calcularTotal } from "./calcularPago";
import { calcularSubTotal } from "./calcularSubTotal";

export const generateTicket = (
  datos: DatosUsurio,
  productos: Producto[] | null
) => {
  const doc = new jsPDF();

  // Variables dinámicas
  const destino = datos?.destino || "0";
  const total = calcularTotal(productos);
  const envio = calcularCostoEnvio({ destino, precio: total });
  const envioFormated = formateValue(envio.toString());
  const valorConEnvio = (total + envio).toString();
  const valuFormated = formateValue(valorConEnvio);
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();
  const horas = `${fecha.getHours()}`.padStart(2, "0");
  const minutes = `${fecha.getMinutes()}`.padStart(2, "0");
  const seconds = `${fecha.getSeconds()}`.padStart(2, "0");

  const timeFormatted = `${horas}:${minutes}:${seconds}`;

  // Título principal
  doc.setFont("Roboto", "bold");
  doc.setFontSize(17);
  doc.text("DETALLES DE TU COMPRA", 105, 28, { align: "center" });

  // Fecha
  const textoFecha = `${dia} / ${mes} / ${año}  -  ${timeFormatted}`;
  doc.setFontSize(8);
  doc.setTextColor(85, 85, 85);
  doc.text(textoFecha, 105, 32, { align: "center" });

  // linea con estilo dashed
  doc.setLineDashPattern([1, 1], 0);
  doc.line(12, 35, 198, 35);

  // Primer subtitulo
  doc.setFont("Roboto", "bold");
  doc.setFontSize(12);
  doc.text("DATOS DEL CLIENTE", 12, 45);

  // Espacio antes de los productos
  doc.text("DATOS DE LOS PRODUCTOS", 12, 85);

  autoTable(doc, {
    startY: 50,
    head: [["Nombre", "Email", "Teléfono", "Dirección"]],
    body: [
      [
        datos?.nombre || "-",
        datos?.email || "-",
        datos?.telefono || "-",
        datos?.direccion || "-",
      ],
    ],
    margin: { left: 12, right: 12 },
    styles: {
      fontSize: 10,
      cellPadding: 4,
    },
    headStyles: {
      fillColor: [200, 200, 200],
      textColor: [0, 0, 0],
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240],
    },
  });

  // Tabla de productos
  const tableBody = productos?.map((producto) => [
    producto.titulo,
    producto.quantity || 0,
    `${producto.discount || 0} %`,
    formateValue(producto.precio),
    calcularSubTotal(producto),
  ]);

  autoTable(doc, {
    startY: 90,
    head: [["Productos", "Cantidad", "Descuento", "Precio", "Subtotal"]],
    body: tableBody,
    foot: [
      ["Subtotal", "", "", formateValue(total.toString())],
      ["Costo de Envío", "", "", envioFormated],
      ["Método de Pago", "", "", "Contraentrega"],
      ["Pago Total", "", "", valuFormated],
    ],
    margin: { top: 10, left: 12, right: 12 },
    styles: {
      fontSize: 10,
      cellPadding: 3,
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240],
    },
    headStyles: {
      fillColor: [200, 200, 200],
      textColor: [0, 0, 0],
      fontStyle: "bold",
    },
    footStyles: {
      fillColor: [240, 240, 240],
      textColor: [0, 0, 0],
      fontStyle: "normal",
    },
  });

  // posicion final de la tabla
  const finalY =
    (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
      .finalY + 10;

  doc.setFontSize(12);
  doc.setFont("Roboto", "bold");
  doc.text(
    "Gracias por su compra. ¡Esperamos volver a verlo pronto!",
    105,
    finalY + 3,
    { align: "center" }
  );

  doc.setFont("Roboto", "normal");
  doc.text(
    `Este documento es de caracter informativo y no puede ser utilizado como comprobante fiscal o de pago.`,
    12,
    finalY + 15
  );

  let mail = `contactosumi@sumi.com`;
  let wh = `+ 57 601 560 5000`;
  doc.setFont("Roboto", "normal");
  doc.text(
    `Si tiene alguna duda o consulta, puede contáctarnos: ${mail} - ${wh} `,
    12,
    finalY + 21,
    { maxWidth: 180 }
  );
  // Guardar PDF
  // doc.autoPrint({ variant: "non-conform" });
  doc.save(`Ticket-${datos?.nombre?.toLowerCase()}.pdf`);
};

export default generateTicket;
