import { calcularTotal } from "@/utils/calcularPago";
import type { Producto } from "@/types/types";
import { formateValue } from "@/utils/formatearValor";
import { useEffect, useState } from "react"
import { OctagonIcon } from "./icons/OctagonIcon";


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
               <OctagonIcon/>
            </div>
        </div>
    )
}

export default Summary