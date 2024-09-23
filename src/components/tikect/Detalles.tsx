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


    console.log(datos)
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
                {productos?.map((producto, index) => (
                    <>
                        <div className="flex justify-between">
                            <span>
                                <p>{producto.nombre}</p>
                                <p> Unidades <strong> {producto.quantity}</strong></p>
                            </span>
                            <p>$: {calcularSubTotal(producto)}</p>
                        </div>
                        <hr className="border-dashed my-1" />
                    </>
                ))}
            </div>
            <div className="flex justify-between ">
                <div className="flex flex-col pt-2">
                    <h4 className="text-xs md:text-base uppercase font-semibold">Costo de envio</h4>
                    <p className="pl-2">$: {formateValue(envioFormated)}</p>
                </div>
                <div className="flex flex-col pt-2">
                    <h4 className="text-xs md:text-base uppercase font-semibold">pago total</h4>
                    <p className="pl-2">$: {valuFormated}</p>
                </div>
            </div>
            <hr className="border-dashed my-4" />
            <div className="flex justify-between">
                <span>
                    <h4 className="text-xs md:text-base uppercase font-semibold">Datos de envio</h4>
                    <p> {datos?.nombre}</p>
                    <p> {datos?.email}</p>
                    <p> {datos?.telefono}</p>
                </span>
                <span>
                    <h4 className="text-xs md:text-base uppercase font-semibold">Datos de envio</h4>
                    <p> {datos?.direccion}</p>
                    <p> {datos?.detalles}</p>
                </span>
            </div>
        </div>
    )
}

export default Detalles