import { calcularTotal } from "@/utils/calcularPago";
import type { Producto } from "@/types/types";
import { formateValue } from "@/utils/formatearValor";
import { useEffect, useState } from "react"


const Summary = () => {
    const [productos, setProductos] = useState<Producto[]>([])
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
        setProductos(carrito);
    }, []);


    const total = calcularTotal(productos).toString()
    let totalParseado = formateValue(total)

    if (!productos) return null

    return (
        <div className="flex flex-col">
            <span className="my-3 text-xs md:text-sm">Subtotal: <strong> $ {totalParseado}</strong> </span>
            <hr />
            <h2 className="my-2 text-xs md:text-sm">Total a pagar ----- <strong> $ {totalParseado}</strong> </h2>
            <hr />
            <div className="flex items-center justify-center gap-2 my-2">
                <p className="text-xs md:text-sm font-semibold ">El costo de envio aun  no esta incluido </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-octagon size-6 stroke-red-700" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                </svg>
            </div>
        </div>
    )
}

export default Summary