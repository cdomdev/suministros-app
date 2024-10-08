import type { Producto, DatosUsurio } from '@/types/types'
import { calcularCostoEnvio } from '@/utils/calcularCostoDeEnvio'
import { calcularSubTotal } from '@/utils/calcularSubTotal'
import { formateValue } from '@/utils/formatearValor'
import { useState, useEffect } from 'react'
import { calcularTotal } from '@/utils/calcularPago'

const DatosProductos = () => {
    const [productos, setProductos] = useState<Producto[]>([])
    const [datos, setDatos] = useState<DatosUsurio>()

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
        const datosUsuario = JSON.parse(localStorage.getItem('dataUserForBuy') || '[]');
        setProductos(carrito)
        setDatos(datosUsuario)
    }, [])

    const total = calcularTotal(productos);
    const destino = datos?.destino || '0';
    const envio = calcularCostoEnvio({ destino, precio: total });
    const valorString = formateValue(envio.toString())

    return (
        <div className=' max-h-96 overflow-y-auto '>
            <span className='text-xs md:text-sm leading-5 text-balance flex flex-col'>
                Este es el costo de envio de tu compra
                <span><strong>Costo de envio: $: {valorString}</strong> </span>
            </span>
            {
                productos.map((producto) => (
                    <div key={producto.id} className='flex flex-col  border bg-white my-2 p-1'>
                        <div className='flex items-center'>
                            <img src={producto.image} alt={producto.nombre} className='size-24 md:size-32 mb-2' />
                            <div>
                                <p className='text-xs md:text-sm text-balance'><strong>Producto: </strong> {producto.nombre}</p>
                                <span className='text-xs md:text-sm flex gap-1'><strong>Precio unidad:</strong> {formateValue(producto.valor)}</span>
                                <span className='text-xs md:text-sm flex gap-1'><strong>Cantidada:</strong> {producto.quantity}</span>
                                <span className='text-xs md:text-sm flex gap-1'><strong>Referencia:</strong> {producto.referencia}</span>
                                <span className='text-xs md:text-sm flex gap-1'><strong>Descuento:</strong> {producto.discount || 0}% </span>
                            </div>
                        </div>
                        <div className='w-full border'>
                            <span className='p-3 text-sm '> <strong>Subtotal:</strong>  {calcularSubTotal(producto)}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DatosProductos