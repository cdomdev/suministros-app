import { useEffect, useState } from "react"

const Contador = () => {
    const [cantidad, setCantidad] = useState<number>(0)
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
        setCantidad(carrito.length);
    }, [])

    return (
        <div className="size-6 flex items-center justify-center rounded-full bg-[#243a5e] text-white font-semibold">{cantidad}</div>
    )
}

export default Contador