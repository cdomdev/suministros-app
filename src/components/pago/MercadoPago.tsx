import { useEffect, useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import type { Producto, DatosUsurio } from '@/types/types'
import { calcularTotal } from "@/utils";
import { calcularCostoEnvio } from "@/utils";
import { mercadoPago } from '@/services/pagos'
import { Toast } from "../cammon/Toast";

interface ExpandedProps {
    isAuthenticated: boolean;
}

const MercadoPago: React.FC<ExpandedProps> = ({ isAuthenticated }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [datosEnvio, setDatosEnvio] = useState<DatosUsurio | null>(null);
    const [datosUsuarioLog, setDatosusuarioLog] = useState<DatosUsurio>();
    const [datosProductos, setdatosproductos] = useState<Producto[]>([])
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    const clientMercadopago = import.meta.env.PUBLIC_CLIENT_MERCADOPAGO;
    initMercadoPago(clientMercadopago, {
        locale: "es-CO",
    });

    useEffect(() => {
        let productosLocal = JSON.parse(localStorage.getItem('carrito') || '[]');
        let datosEnvioLocal = localStorage.getItem('dataUserForBuy');
        let datosUsuarioLogLocal = JSON.parse(localStorage.getItem('infoProfileUSer') || '{}');
        if (datosEnvioLocal) {
            let datos = JSON.parse(datosEnvioLocal)
            setDatosEnvio(datos);
        }
        setDatosusuarioLog(datosUsuarioLogLocal);
        setdatosproductos(productosLocal);
    }, [])

    const datosUrio = { ...datosEnvio, ...datosUsuarioLog };
    const total = calcularTotal(datosProductos);
    const destino = datosEnvio?.destino || '0';
    const envio = calcularCostoEnvio({ destino, precio: total });
    const rutaUser = 'mercadopago-user'
    const rutainvitado = 'mercadopago-invited'


    const createOrder = async () => {
        try {
            if (!datosProductos || !datosEnvio || datosProductos.length === 0) {
                setToastMessage('Faltan algunos datos, verifica eh intentalo de nuevo');
                setBgToast('toast-fail');
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            if (isAuthenticated) {
                const pagoUsuario = await mercadoPago({
                    productos: datosProductos,
                    datos: datosUrio,
                    ruta: rutaUser,
                    valorDeEnvio: envio
                })
                if (pagoUsuario.status === 200) {
                    const { init_point } = pagoUsuario.data;
                    window.location.href = init_point;
                    localStorage.removeItem('dataUserForBuy')
                    localStorage.removeItem('carrito')
                }
            } else {
                const pagoInvitado = await mercadoPago({
                    productos: datosProductos,
                    datos: datosEnvio,
                    ruta: rutainvitado,
                    valorDeEnvio: envio
                })
                if (pagoInvitado.status === 200) {
                    const { init_point } = pagoInvitado.data;
                    window.location.href = init_point;
                    localStorage.removeItem('dataUserForBuy')
                    localStorage.removeItem('carrito')
                }
            }

        } catch (e) {
            console.log(e);
            setToastMessage('No pudimos procesar tu compra, por favor intentalo de nuevo o intentalo despues');
            setBgToast('toast-fail');
            setTimeout(() => setShowToast(false), 3000);
            setShowToast(true);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <Toast
                showToast={showToast}
                setShowToast={setShowToast}
                toastMessage={toastMessage}
                setToastMessage={setToastMessage}
                bgToast={bgToast}
                setBgToast={setBgToast}
            />
            <div className="flex flex-col items-center justify-center mb-3 ">
                <button className="border flex py-2 px-4 items-center gap-1 rounded-md bg-[#009ee3] text-white hover:bg-[#0049e5ef] duration-100" onClick={createOrder}>
                    {isLoading ? (
                        <>
                            <img src="../../../mercadopago.webp" alt="logo de mercadopago" className="size-7" />
                            Estamos procesando tu pago...
                        </>
                    ) : (
                        <>
                            <img src="../../../mercadopago.webp" alt="logo de mercadopago" className="size-7" />
                            Pagar con Mercado Pago
                        </>
                    )}
                </button>
                <span className="text-gray-500 text-xs mt-1">Paga de forma segura</span>
            </div>
        </>
    );
};

export default MercadoPago