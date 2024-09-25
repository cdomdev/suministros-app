import { Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import type { DatosUsurio, Producto } from '@/types/types';
import { Toast } from '../cammon/Toast';
import { pago } from '@/services/pagos';
import axios from 'axios';
import { calcularCostoEnvio } from '@/utils/calcularCostoDeEnvio';
import { calcularTotal } from '@/utils/calcularPago';
import { getDataIp } from '@/services/user';


interface ExpandedProps {
    isAuthenticated: boolean;
}

export const ContraEntrega: React.FC<ExpandedProps> = ({ isAuthenticated }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [datosProductos, setdatosproductos] = useState<Producto[]>([])
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');
    const [datosEnvio, setDatosEnvio] = useState<DatosUsurio | null>(null);
    const [datosUsuarioLog, setDatosusuarioLog] = useState<DatosUsurio>();

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


    const datosUsuario = { ...datosEnvio, ...datosUsuarioLog };
    const total = calcularTotal(datosProductos);
    const destino = datosEnvio?.destino || '0';
    const envio = calcularCostoEnvio({ destino, precio: total });
    const rutaUser = 'buy-user'
    const rutainvitado = 'buy-invited'

    const finalizarCompra = async () => {
        sessionStorage.setItem('carrito', JSON.stringify(datosProductos))
        sessionStorage.setItem('dataUserForBuy', JSON.stringify(datosEnvio))
        setIsLoading(true)
        if (!datosEnvio) {
            setToastMessage('Faltan los datos de envío, por favor verificar antes de continuar.');
            setBgToast('toast-fail');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            setIsLoading(false);
            return;
        }

        if (!datosProductos || datosProductos.length === 0) {
            setToastMessage('No hay productos en el carrito.');
            setBgToast('toast-fail');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            setIsLoading(false);
            return;
        }
        try {
            if (isAuthenticated) {
                const pagoUsuario = await pago({
                    productos: datosProductos,
                    datos: datosUsuario,
                    ruta: rutaUser,
                    valorDeEnvio: envio,
                })
                if (pagoUsuario.status === 200) {
                    window.location.href = `/success/${pagoUsuario.data.message}`
                    localStorage.removeItem('carrito')
                    localStorage.removeItem('steps')
                }
            } else {
                const pagoInvitado = await pago({
                    productos: datosProductos,
                    datos: datosEnvio,
                    ruta: rutainvitado,
                    valorDeEnvio: envio,
                })
                if (pagoInvitado.status === 200) {
                    window.location.href = `/success/${pagoInvitado.data.message}`
                    localStorage.removeItem('carrito')
                    localStorage.removeItem('steps')
                }

            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { status } = error.response;
                if (status === 404) {
                    setBgToast('fail')
                    setShowToast(true)
                    setToastMessage(`algo salio mal con tu compra`)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                } else if (status === 500) {
                    setBgToast('fail')
                    setShowToast(true)
                    setToastMessage(`No pudidos proceder con tu compra`)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                }
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div >
            <Toast
                showToast={showToast}
                setShowToast={setShowToast}
                toastMessage={toastMessage}
                setToastMessage={setToastMessage}
                bgToast={bgToast}
                setBgToast={setBgToast}
            />
            <p className='text-base font-semibold mb-2 flex items-center gap-1 '>Por favor tenga en cuenta lo siguiente
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exclamation-circle size-6" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 9v4" />
                    <path d="M12 16v.01" />
                </svg>
            </p>
            <ul className='text-sm mb-3 pl-6'>
                <li className="mb-2 list-disc text-balance">
                    En caso de no poder recibir la compra, por favor deje a alguien
                    encargado para que la reciba por usted.
                </li>
                <li className='mb-2 list-disc text-balance'>
                    Al momento de recibir su compra tenga en cuanta que el pago debe ser
                    en efectivo.
                </li>
                <li className=' list-disc text-balance'>
                    Si tiene dudas sobre el metodo de pago seleccionado, antes de continuar lo invitamos a consultar la pagina de <a href="/Medios-de-pago" className='text-blue-500 font-semibold'> metodos de pago</a>
                </li>
            </ul>
            <div className='flex flex-col gap-2'>
                <button className='bg-blue-600 py-2 text-sm rounded-md text-white hover:bg-blue-700 duration-100' onClick={finalizarCompra}>
                    {isLoading ? (
                        <Spinner animation="border" role="status" size="sm" />
                    ) : (
                        "Continuar con esta forma de pago"
                    )}
                </button>
            </div>
        </div>
    )
}

