import { useEffect, useState } from "react";
import LoginAndShoping from "../LoginAndShoping";
import type { Producto } from '@/types/types';
import { eventEmitter } from "@/events/carritoChanged";

const VerifyAuth = () => {
    const [productos, setProductos] = useState<Producto[]>([])

    useEffect(() => {
        const handleCarritoChange = () => {
            const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
            setProductos(carrito);
        };
        if (eventEmitter) {
            eventEmitter.on('carritoChanged', handleCarritoChange);
        }

        handleCarritoChange();
        return () => {
            if (eventEmitter) {
                eventEmitter.off('carritoChanged', handleCarritoChange);
            }
        };
    }, [])

    return (
        <>
            {!productos ? (
                <>
                    <p className="text-xs md:text-sm text-center font-semibold my-2 text-red-400">No hay productos en tu carrito</p>
                </>
            ) : (
                <>
                    {
                        productos.length > 0 ? (
                            <div className="   mt-2">
                                <p className="text-xs md:text-sm mb-2 ">Registrate o inicia sesion para tener un historial de tus compras o hacer seguiento del estado de tu pedido.</p>
                                <LoginAndShoping  isBtn={true} isAuthenticated />
                            </div>
                        ) :
                            (
                                <p className="text-xs md:text-sm text-center font-semibold my-2 text-red-400">No hay productos en tu carrito</p>
                            )
                    }
                </>
            )
            }

        </>
    )
};

export default VerifyAuth