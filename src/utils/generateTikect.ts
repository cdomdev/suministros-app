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

  const maxWidth = 180;

  // Título principal
  doc.setFont("Roboto", "bold");
  doc.setFontSize(17);
  doc.text("DETALLES DE TU COMPRA", 105, 18, { align: "center" });

  doc.setLineDashPattern([3, 1], 0);
  doc.line(10, 25, 200, 27);

  // Texto descriptivo
  const texto = `Estimado usuario, agradecemos por preferirnos para las compras de sus productos`;
  const texto2 = `Ducumento expedido a los ${dia} días del mes ${mes} del ${año} a las ${timeFormatted} horas`;
  doc.setFontSize(12);
  doc.setFont("Roboto", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text(texto, 12, 35, { maxWidth: maxWidth });

  doc.setFontSize(9);
  doc.setTextColor(85, 85, 85);
  doc.text(texto2, 105, 24, { align: "center" });

  doc.setFont("Roboto", "bold");
  doc.setFontSize(12);
  doc.text("DATOS DEL COMPRADOR", 12, 50);

  // Espacio antes de los productos
  doc.text("DATOS DE LOS PRODUCTOS", 12, 85);

  autoTable(doc, {
    startY: 53,
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
    producto.nombre,
    producto.quantity || 0,
    `${producto.discount || 0} %`,
    formateValue(producto.valor),
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
      fontStyle: "italic",
    },
  });

  // Guardar PDF
  doc.save(`Ticket-${datos?.nombre?.toLowerCase()}.pdf`);
};

export default generateTicket;
