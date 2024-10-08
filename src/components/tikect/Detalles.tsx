import type { Producto, DatosUsurio } from "@/types/types"
import { useEffect, useState } from "react"
import { calcularCostoEnvio, calcularSubTotal, calcularTotal, formateValue } from '@/utils'
const Detalles = () => {
    const [productos, setProductos] = useState<Producto[]>()
    const [datos, setDatos] = useState<DatosUsurio>()

    useEffect(() => {
        const carrito = JSON.parse(sessionStorage.getItem('carrito') || '[]');
        const datosUsuario = JSON.parse(sessionStorage.getItem('dataUserForBuy') || '[]');
        setProductos(carrito)
        setDatos(datosUsuario)
    }, [])

    const destino = datos?.destino || '0'
    const total = calcularTotal(productos)
    const envio = calcularCostoEnvio({ destino, precio: total });
    const valorConEnvio = (total + envio).toString()
    const valuFormated = formateValue(valorConEnvio)
    const envioFormated = envio.toString()

    return (
        <div>
            <div>
                <div className="flex justify-between">
                    <h4 className="text-xs md:text-base uppercase font-semibold">Productos</h4>
                    <h4 className="text-xs md:text-base uppercase font-semibold">Subtotal</h4>
                </div>
                {productos?.map((producto) => (
                    <>
                        <div className="flex justify-between">
                            <span>
                                <p className="text-xs md:text-sm text-balance">{producto.nombre}</p>
                                <p className="text-xs md:text-sm"> Unidades <strong> {producto.quantity}</strong></p>
                            </span>
                            <p className="text-xs md:text-sm">$: {calcularSubTotal(producto)}</p>
                        </div>
                        <hr className="border-dashed my-1" />
                    </>
                ))}
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col pt-2">
                    <h4 className="text-xs md:text-base uppercase font-semibold">Costo de envio</h4>
                    <p className="pl-2 text-xs md:text-sm">$: {formateValue(envioFormated)}</p>
                </div>
                <div className="flex flex-col pt-2">
                    <h4 className="text-xs md:text-base uppercase font-semibold">pago total</h4>
                    <p className="pl-2 text-xs md:text-sm">$: {valuFormated}</p>
                </div>
            </div>
            <hr className="border-dashed my-4" />
            <div className="flex justify-between">
                <span>
                    <h4 className="text-xs md:text-base uppercase font-semibold">Datos de envio</h4>
                    <p className="text-xs md:text-sm"> {datos?.nombre}</p>
                    <p className="text-xs md:text-sm"> {datos?.email}</p>
                    <p className="text-xs md:text-sm"> {datos?.telefono}</p>
                </span>
                <span>
                    <h4 className="text-xs md:text-base uppercase font-semibold">Datos de envio</h4>
                    <p className="text-xs md:text-sm"> {datos?.direccion}</p>
                    <p className="text-xs md:text-sm"> {datos?.detalles}</p>
                </span>
            </div>
        </div>
    )
}

export default Detalles