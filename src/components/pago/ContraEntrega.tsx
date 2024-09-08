import { Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import type { DatosUsurio, Producto, ProductItem } from '@/types/types';
import { Toast } from '../cammons/Toast';
import { pago } from '@/services/pagos';
import axios from 'axios';
import { calcularCostoEnvio } from '@/utils/calcularCostoDeEnvio';
import { calcularTotal } from '@/utils/calcularPago';


interface ExpandedProps {
    isAuthenticated: boolean;
}

export const ContraEntrega: React.FC<ExpandedProps> = ({ isAuthenticated }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [datosProductos, setdatosproductos] = useState<Producto[]>([])
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');
    const [datosUsuario, setDatosusuario] = useState<DatosUsurio>()
    const [valorProducto, setValorProducto] = useState<ProductItem[]>([])


    // recuperar productos del local para finlizar la compra
    useEffect(() => {
        let productosLocal = JSON.parse(localStorage.getItem('carrito') || '[]');
        let datosUsuario = localStorage.getItem('dataUserForBuy')
        if (datosUsuario) {
            const datosParseados = JSON.parse(datosUsuario)
            setDatosusuario(datosParseados)
        }
        setdatosproductos(productosLocal)
        const formattedItems = productosLocal.map((item: any) => ({
            cantidad: item.quantity || 0,
            valor: parseFloat(item.valor) || 0
        }));
        setValorProducto(formattedItems)
    }, [])


    const total = calcularTotal(valorProducto);
    const destino = datosUsuario?.destino || '0';
    const envio = calcularCostoEnvio({ destino, precio: total });
    const metodoDePago = 'contre-entrega'
    const rutaUser = 'buy-user'
    const rutainvitado = 'buy-invited'


    const finalizarCompra = async () => {
        setIsLoading(true)
        if (!datosProductos || datosProductos.length === 0 || datosUsuario) {
            setToastMessage(`Parece que faltan datos para procesar tu compra, intentalo de nuevo`);
            setBgToast('toast-fail');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000)
        }
        try {
            if (isAuthenticated) {
                const pagoUsuario = await pago({
                    productos: datosProductos,
                    datos: datosUsuario,
                    ruta: rutaUser,
                    valorDeEnvio: envio,
                    metodoPago: metodoDePago
                })
            } else {
                const pagoInvitado = await pago({
                    productos: datosProductos,
                    datos: datosUsuario,
                    ruta: rutainvitado,
                    valorDeEnvio: envio,
                    metodoPago: metodoDePago
                })
                if (pagoInvitado.status === 200) {
                    console.log('Compra realizada', pagoInvitado.data)
                    window.location.href = `/sucess/${pagoInvitado.data.message}`
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
                <button className='bg-blue-600 py-2 rounded-md text-white hover:bg-blue-700 duration-100' onClick={finalizarCompra}>
                    {isLoading ? (
                        <Spinner animation="border" role="status" size="sm" />
                    ) : (
                        "Continuar"
                    )}
                </button>
            </div>
        </div>
    )
}

