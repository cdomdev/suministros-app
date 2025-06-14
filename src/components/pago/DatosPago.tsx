import type { DatosUsurio, Producto } from "@/types/types";
import { calcularCostoEnvio } from "@/utils/calcularCostoDeEnvio";
import { calcularTotal } from "@/utils/calcularPago";
import { formateValue } from "@/utils/formatearValor";
import { useState, useEffect } from "react";
import MercadoPago from "@/components/pago/MercadoPago";
import { useUbicacion } from "@/hook/useUbicacion";
import Cookies from "js-cookie";
import OpcionesPago from "./OpcionPago";

const DetosPago = () => {
  const [datos, setDatos] = useState<DatosUsurio>();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [datosUserLogin, setDatosUserLogin] = useState<DatosUsurio>();
  const { departamento } = useUbicacion();

  useEffect(() => {
    const datosUsuario = JSON.parse(Cookies.get("dataUserForBuy") || "[]");
    const datosUsuarioLog = JSON.parse(Cookies.get("user_sesion") || "[]");
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setDatos(datosUsuario);
    setDatosUserLogin(datosUsuarioLog);
    setProductos(carrito);
  }, []);

  const subtotal = calcularTotal(productos);
  const envio = calcularCostoEnvio({ departamento, subtotal });
  const valorConEnvio = (subtotal + envio).toString();
  const valuFormated = formateValue(valorConEnvio);

  return (
    <>
      {productos && productos.length > 0 ? (
        <div className="flex flex-col py-1">
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="flex flex-col border-dashed border-2 py-3 px-4">
              <h3 className="font-semibold text-xs md:text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1">
                Datos de usuario
              </h3>
              <span className="text-xs md:text-sm flex gap-1 flex-col pl-1">
                <strong>Nombre:</strong>
                {datos?.nombre || datosUserLogin?.nombre}
              </span>
              <span className="text-xs md:text-sm flex gap-1 flex-col pl-1">
                <strong>Correo:</strong>
                {datos?.email || datosUserLogin?.email}
              </span>
              <span className="text-xs md:text-sm flex gap-1 flex-col pl-1">
                <strong>Telefono:</strong>
                {datos?.telefono || datosUserLogin?.telefono}
              </span>
            </div>
            <div className="flex flex-col border-dashed border-2 py-3 px-4">
              <h3 className="font-semibold text-xs md:text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1">
                Datos de envio
              </h3>
              <span className="text-xs md:text-sm flex flex-col pl-1">
                <strong>Direccion:</strong>
                {datos?.direccion}
              </span>
              <span className="text-xs md:text-sm flex flex-col pl-1 text-balance">
                <strong>Detalles:</strong>
                {datos?.detalles}
              </span>
            </div>
            <div className="flex flex-col border-dashed border-2 py-3 px-4 min-w-[200px]">
              <h3 className="font-semibold text-xs md:text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1">
                {" "}
                Total a pagar
              </h3>
              <span className="font-semibold text-center ">
                {" "}
                $: {valuFormated}
              </span>
            </div>
          </div>
          <div className="w-[90%] mx-auto mt-3">
            <h3 className="font-semibold text-xs md:text-sm uppercase text-center bg-[#e3e3e3] py-1 px-2 mb-1">
              Medios de pago
            </h3>
            <p className="text-xs md:text-sm pt-3 text-wrap  mb-4">
              Para que tengas total confianza al pagar tus compras, ponemos a tu
              disposición estas dos opciones de pago. Asegúrate de revisar los
              términos de cada opción en nuestra página de{" "}
              <a
                href="/medios-de-pago"
                className="text-sm font-semibold text-blue-600 hover:text-blue-500 duration-150"
              >
                Medios de pago
              </a>
              .
            </p>
            <MercadoPago />
            <OpcionesPago />
          </div>
        </div>
      ) : (
        <span className="text-center text-gray-400 text-sm block py-2">
          No hay datos para procesar un pago
        </span>
      )}
    </>
  );
};

export default DetosPago;
