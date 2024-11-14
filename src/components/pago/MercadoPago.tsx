import { useEffect, useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import type { Producto, DatosUsurio, ResponsIPInfo } from '@/types/types'
import { calcularTotal } from "@/utils";
import { calcularCostoEnvio } from "@/utils";
import { mercadoPago } from '@/services/pagos'
import { Toast } from "../Toast";
import axios from "axios"

const clientMercadopago = import.meta.env.PUBLIC_CLIENT_MERCADOPAGO;
const rutaUser = import.meta.env.PUBLIC_URL_CLIENT_MERCADOPAGO
const rutainvitado = import.meta.env.PUBLIC_URL_INVITED_MERCADOPAGO

interface ExpandedProps {
    isAuthenticated: boolean;
}

const MercadoPago: React.FC<ExpandedProps> = ({ isAuthenticated }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [datosEnvio, setDatosEnvio] = useState<DatosUsurio | null>(null);
    const [datosUsuarioLog, setDatosusuarioLog] = useState<DatosUsurio>();
    const [datosProductos, setdatosproductos] = useState<Producto[]>([])
    const [location, setLocation] = useState<ResponsIPInfo>()
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    initMercadoPago(clientMercadopago, {
        locale: "es-CO",
    });

    useEffect(() => {
        let productosLocal = JSON.parse(localStorage.getItem('carrito') || '[]');
        let datosEnvioLocal = JSON.parse(localStorage.getItem('dataUserForBuy') || '');
        let datosUsuarioLogLocal = JSON.parse(localStorage.getItem('infoProfileUSer') || '{}');
        let dataLocation = JSON.parse(localStorage.getItem('referenceDataLocation') || '')
        setLocation(dataLocation)
        setDatosEnvio(datosEnvioLocal);
        setDatosusuarioLog(datosUsuarioLogLocal);
        setdatosproductos(productosLocal);
    }, [])

    const datosUsuario = { ...datosEnvio, ...datosUsuarioLog, ...location, };
    const datosInvitado = { ...datosEnvio, ...location }
    const total = calcularTotal(datosProductos);
    const destino = datosEnvio?.destino || '0';
    const envio = calcularCostoEnvio({ destino, precio: total });

    const handleToast = (bg: string, ms: string) => {
        setToastMessage(ms)
        setBgToast(bg)
        setShowToast(true)
        setIsLoading(false)
        setTimeout(() => {
            setShowToast(false)
        }, 5000)
    }

    const createOrder = async () => {
        try {
            if (!datosProductos || !datosEnvio || datosProductos.length === 0) {
                handleToast('toast-fail', 'Faltan algunos datos, verifica eh intentalo de nuevo')
                return;
            }

            setIsLoading(true);
            if (isAuthenticated) {
                const pagoUsuario = await mercadoPago({
                    productos: datosProductos,
                    datos: datosUsuario,
                    ruta: rutaUser,
                    valorDeEnvio: envio
                })
                if (pagoUsuario.status === 200) {
                    const { init_point } = pagoUsuario.data;
                    window.location.href = init_point;
                    // localStorage.removeItem('dataUserForBuy')
                    // localStorage.removeItem('carrito')
                }
            } else {
                const pagoInvitado = await mercadoPago({
                    productos: datosProductos,
                    datos: datosInvitado,
                    ruta: rutainvitado,
                    valorDeEnvio: envio
                })
                if (pagoInvitado.status === 200) {
                    const { init_point } = pagoInvitado.data;
                    window.location.href = init_point;
                    // localStorage.removeItem('dataUserForBuy')
                    // localStorage.removeItem('carrito')
                }
            }

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { status } = error.response;
                if (status === 400) {
                    handleToast('fail', `Algo salio mal al procesar tu compra, intentalo de nuevo`)
                }else{
                    handleToast('fail', `Ocurrio un error inesperado en el proceso de compra, intentalo mas tarde`)
                }
            }
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