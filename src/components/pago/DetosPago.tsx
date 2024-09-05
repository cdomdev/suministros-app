import type { DatosEnvio, ProductItem } from "@/types/types"
import { calcularCostoEnvio } from "@/utils/calcularCostoDeEnvio"
import { calcularTotal } from "@/utils/calcularPago"
import { formateValue } from "@/utils/formatearValor"
import { useState, useEffect } from "react"

const DetosPago = () => {
    const [datos, setDatos] = useState<DatosEnvio>()
    const [productos, setProductos] = useState<ProductItem[]>([])

    useEffect(() => {
        const datosUsuario = JSON.parse(localStorage.getItem('dataUserSendOrder') || '[]');
        const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
        setDatos(datosUsuario)
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
        <div className="flex flex-col md:flex-row justify-evenly py-3">
            <div className="flex flex-col border-dashed border-2 py-3 px-4">
                <h3 className="font-semibold text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1">Datos de usuario</h3>
                <span className="text-sm flex gap-1 flex-col pl-1"><strong>Nombre:</strong>{datos?.nombre}</span>
                <span className="text-sm flex gap-1 flex-col pl-1"><strong>Correo:</strong>{datos?.email}</span>
                <span className="text-sm flex gap-1 flex-col pl-1"><strong>Telefono:</strong>{datos?.telefono}</span>
            </div>
            <div className="flex flex-col border-dashed border-2 py-3 px-4">
                <h3 className="font-semibold text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1">Datos de envio</h3>
                <span className="text-sm flex flex-col pl-1"><strong>Direccion</strong>{datos?.direccion}</span>
                <span className="text-sm flex flex-col pl-1"><strong>Detalles</strong>{datos?.direccion}</span>
            </div>
            <div className="flex flex-col border-dashed border-2 py-3 px-4">
                <h3 className="font-semibold text-sm uppercase bg-[#e3e3e3] py-1 px-2 mb-1"> Total a pagar</h3>
                <span className="font-semibold text-center "> $: {valuFormated}</span>
            </div>
        </div>
    )
}

export default DetosPago