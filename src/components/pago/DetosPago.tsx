import type { DatosEnvio, ProductItem } from "@/types/types"
import { calcularCostoEnvio } from "@/utils/calcularCostoDeEnvio"
import { calcularTotal } from "@/utils/calcularPago"
import { formateValue } from "@/utils/formatearValor"
import { useState, useEffect } from "react"
import MercadoPago from "@/components/pago/MercadoPago"
import ModalOpcionesPago from "../modales/ModalOpcionesPago"
interface ExpandedProps {
    isAuthenticated: boolean;
}

const DetosPago: React.FC<ExpandedProps> = ({ isAuthenticated }) => {
    const [datos, setDatos] = useState<DatosEnvio>()
    const [productos, setProductos] = useState<ProductItem[]>([])
    const [datosUserLogin, setDatosUserLogin] = useState<DatosEnvio>()

    useEffect(() => {
        const datosUsuario = JSON.parse(localStorage.getItem('dataUserSendOrder') || '[]');
        const datosUsuarioLog = JSON.parse(localStorage.getItem('infoProfileUSer') || '[]');
        const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
        setDatos(datosUsuario)
        setDatosUserLogin(datosUsuarioLog)
        const formattedItems = carrito.map((item: any) => ({
            cantidad: item.quantity || 0,
            valor: parseFloat(item.valor) || 0
        }));
        setProductos(formattedItems)
    }, [])

    const destino = datos?.destino || '0'
    const total = calcularTotal(productos)
    const envio = calcularCostoEnvio({ destino, precio: total });
    const valorConEnvio = (total + envio).toString()
    const valuFormated = formateValue(valorConEnvio)

    return (
        <div className="flex flex-col py-1">
            <div className="flex flex-col md:flex-row justify-evenly">
                <div className="flex flex-col border-dashed border-2 py-3 px-4">
                    <h3 className="font-semibold text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1">Datos de usuario</h3>
                    <span className="text-sm flex gap-1 flex-col pl-1"><strong>Nombre:</strong>{datos?.nombre || datosUserLogin?.nombre}</span>
                    <span className="text-sm flex gap-1 flex-col pl-1"><strong>Correo:</strong>{datos?.email || datosUserLogin?.email}</span>
                    <span className="text-sm flex gap-1 flex-col pl-1"><strong>Telefono:</strong>{datos?.telefono || datosUserLogin?.telefono}</span>
                </div>
                <div className="flex flex-col border-dashed border-2 py-3 px-4">
                    <h3 className="font-semibold text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1">Datos de envio</h3>
                    <span className="text-sm flex flex-col pl-1"><strong>Direccion:</strong>{datos?.direccion}</span>
                    <span className="text-sm flex flex-col pl-1"><strong>Detalles:</strong>{datos?.direccion}</span>
                </div>
                <div className="flex flex-col border-dashed border-2 py-3 px-4">
                    <h3 className="font-semibold text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1"> Total a pagar</h3>
                    <span className="font-semibold text-center "> $: {valuFormated}</span>
                </div>
            </div>
            <div className="w-[90%] mx-auto mt-3">
                <h3 className="font-semibold text-sm uppercase text-center bg-[#e3e3e3] py-1 px-2 mb-1">
                    opciones de pago
                </h3>
                <p className="text-sm pt-3 text-balance mb-4">
                    Hola {datos?.nombre || datosUserLogin?.nombre}, para que tengas total confianza al pagar tus compras, ponemos a tu disposición estas dos opciones de pago. Asegúrate de revisar los términos de cada opción en nuestra página de <a href="/Medios-de-pago" className="text-sm font-semibold text-blue-600 hover:text-blue-500 duration-150">opciones de pago</a>.
                </p>
                <MercadoPago />
                <ModalOpcionesPago isAuthenticated={isAuthenticated} />
            </div>
        </div>
    )
}

export default DetosPago