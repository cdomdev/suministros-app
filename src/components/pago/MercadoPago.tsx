import { useEffect, useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import type { Producto, DatosUsurio } from "@/types/types";
import { calcularTotal } from "@/utils";
import { calcularCostoEnvio } from "@/utils";
import { mercadoPago } from "@/services/pagos";
import { Toast } from "../Toast";
import { useToastStore } from "@/context/store.context";
import { useUbicacion } from "@/hook/useUbicacion";
import Cookies from "js-cookie";
import { Spinner } from "../Spinner";

const clientMercadopago = import.meta.env.PUBLIC_CLIENT_MERCADOPAGO;
const rutaUser = import.meta.env.PUBLIC_URL_CLIENT_MERCADOPAGO;

const MercadoPago = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [datosEnvio, setDatosEnvio] = useState<DatosUsurio | null>(null);
  const [datosUsuarioLog, setDatosusuarioLog] = useState<DatosUsurio>();
  const [datosProductos, setdatosproductos] = useState<Producto[]>([]);

  const { departamento } = useUbicacion();
  const { showToast } = useToastStore();

  initMercadoPago(clientMercadopago, {
    locale: "es-CO",
  });

  useEffect(() => {
    let productosLocal = JSON.parse(localStorage.getItem("carrito") || "[]");
    let datosEnvioLocal = JSON.parse(Cookies.get("dataUserForBuy") || "");
    let datosUsuarioLogLocal = JSON.parse(Cookies.get("user_sesion") || "{}");
    setDatosEnvio(datosEnvioLocal);
    setDatosusuarioLog(datosUsuarioLogLocal);
    setdatosproductos(productosLocal);
  }, []);

  const datosUsuario = { ...datosEnvio, ...datosUsuarioLog, ...location };
  const subtotal = calcularTotal(datosProductos);
  const envio = calcularCostoEnvio({ departamento, subtotal });

  console.log(datosUsuario);

  const createOrder = async () => {
    if (!datosProductos || !datosEnvio || datosProductos.length === 0) {
      showToast(
        "Faltan algunos datos, verifica eh intentalo de nuevo",
        "error"
      );
      return;
    }

    setIsLoading(true);

    const res = await mercadoPago({
      productos: datosProductos,
      datos: datosUsuario,
      ruta: rutaUser,
      valorDeEnvio: envio,
    });
    const { status } = res;
    if (status === 201) {
      setIsLoading(false);
      const { init_point } = res.data;
      window.location.href = init_point;
    } else if (status === 400 || status === 404) {
      setIsLoading(false);
      showToast(
        `Algo salio mal al procesar tu compra, intentalo de nuevo`,
        "error"
      );
    } else if (status === 500) {
      setIsLoading(false);
      showToast(
        `Algo salio mal al procesar tu compra, intentalo mas tarde`,
        "error"
      );
    }
  };
  return (
    <>
      <Toast />
      <div className="flex flex-col items-center justify-center mb-3 ">
        <button
          className="border flex py-2 px-4 items-center gap-1 rounded-md bg-[#009ee3] text-white hover:bg-[#0049e5ef] duration-100 text-xs md:text-sm lg:text-base"
          onClick={createOrder}
        >
          {isLoading ? (
            <>
              <img
                src="mercadopago.webp"
                alt="logo de mercadopago"
                className="size-7 shrink-0"
              />
              <p className="text-xs">Procesando</p>
              <Spinner className="size-3" />
            </>
          ) : (
            <>
              <img
                src="mercadopago.webp"
                alt="logo de mercadopago"
                className="size-7"
              />
              Pagar con Mercado Pago
            </>
          )}
        </button>
        <span className="text-gray-500 text-xs mt-1">Paga de forma segura</span>
      </div>
    </>
  );
};

export default MercadoPago;
