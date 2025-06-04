import { useEffect, useState } from "react";
import type { DatosUsurio, Producto, ResponsIPInfo } from "@/types/types";
import { Toast } from "../Toast";
import { pago } from "@/services/pagos";
import { calcularCostoEnvio } from "@/utils/calcularCostoDeEnvio";
import { calcularTotal } from "@/utils/calcularPago";
import { useToastStore } from "@/context/store.context";

export const ContraEntrega = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [datosProductos, setdatosproductos] = useState<Producto[]>([]);
  const [location, setLocation] = useState<ResponsIPInfo>();
  const [datosEnvio, setDatosEnvio] = useState<DatosUsurio | null>(null);
  const [datosUsuarioLog, setDatosusuarioLog] = useState<DatosUsurio>();

  const { showToast } = useToastStore();

  useEffect(() => {
    let dataLocation = JSON.parse(
      sessionStorage.getItem("referenceDataLocation") || ""
    );
    let productosLocal = JSON.parse(localStorage.getItem("carrito") || "[]");
    let datosEnvioLocal = JSON.parse(
      localStorage.getItem("dataUserForBuy") || ""
    );
    let datosUsuarioLogLocal = JSON.parse(
      sessionStorage.getItem("infoProfileUSer") || "{}"
    );

    setDatosEnvio(datosEnvioLocal);
    setLocation(dataLocation);
    setDatosusuarioLog(datosUsuarioLogLocal);
    setdatosproductos(productosLocal);
  }, []);

  const datosUsuario = { ...datosEnvio, ...datosUsuarioLog, ...location };
  const destino = datosEnvio?.destino || "0";
  const total = calcularTotal(datosProductos);
  const envio = calcularCostoEnvio({ destino, precio: total });

  const finalizarCompra = async () => {
    sessionStorage.setItem("carrito", JSON.stringify(datosProductos));
    sessionStorage.setItem("dataUserForBuy", JSON.stringify(datosEnvio));
    sessionStorage.setItem("paymentMethod", JSON.stringify(true));
    setIsLoading(true);
    if (!datosEnvio || !datosProductos || datosProductos.length === 0) {
      showToast(
        "Parece que faltan algnuos datos para proceder con la compra, por favor verificar antes de continuar",
        "error"
      );
      return;
    }

    const res = await pago({
      productos: datosProductos,
      datos: datosUsuario,
      valorDeEnvio: envio,
    });

    const { status } = res;

    if (status === 201) {
      window.location.href = `/success/${res.data.message}`;
      localStorage.removeItem("carrito");
      localStorage.removeItem("steps");
    } else if (status === 404 || 400) {
      setIsLoading(false);
      showToast(
        `Algo salio mal al procesar tu compra, intentalo de nuevo`,
        "error"
      );
    } else if (status === 500) {
      setIsLoading(false);
      showToast(
        "Ocurrio un probla interno, por favor intenra realizar tu compra mas tarde o cuminicate con el equipo de soporte",
        "error"
      );
    }
  };

  return (
    <>
      <Toast />
      <p className="text-sm md:text-base font-semibold mb-3 flex items-center gap-3 ">
        Por favor tenga en cuenta lo siguiente
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-exclamation-circle size-4 md:size-6  stroke-red-600"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 9v4" />
          <path d="M12 16v.01" />
        </svg>
      </p>
      <ul className="text-sm mb-4 pl-6">
        <li className="mb-2 list-disc  text-balance">
          En caso de no poder recibir la compra, deje a alguien encargado para
          que la reciba por usted.
        </li>
        <li className="mb-2 list-disc text-balance">
          Al momento de recibir su compra tenga en cuanta que el pago debe ser
          en efectivo.
        </li>
        <li className=" list-disc text-balance">
          Si tiene dudas sobre el metodo de pago seleccionado, antes de
          continuar lo invitamos a consultar la pagina de{" "}
          <a href="/Medios-de-pago" className="text-blue-500 font-semibold">
            {" "}
            metodos de pago
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <button
          className="bg-blue-600 py-2 text-sm rounded-md text-white hover:bg-blue-700 duration-100"
          onClick={finalizarCompra}
        >
          {isLoading ? (
            <p>Procesando pago...</p>
          ) : (
            "Continuar con esta forma de pago"
          )}
        </button>
      </div>
    </>
  );
};
