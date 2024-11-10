import { useEffect, useState } from "react";
import ModalAuth from "../modales/ModalAuth";
import type { Producto } from '@/types/types';
import { eventEmitter } from "@/events/carritoChanged";
import { UpdateSteps } from "../UpdateSteps";

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
                            <div className="font-font-cust-2 mt-2">
                                <p className="text-xs md:text-sm mb-2 ">Registrate o inicia sesion para tener un historial de tus compras o hacer seguiento del estado de tu pedido.</p>
                                <ModalAuth triggerElement={<button className="bg-blue-600 w-full text-white py-2 rounded-md uppercase text-xs md:text-sm  mt-2  hover:bg-blue-700 hover:shadow-none">Iniciar sesion</button>} />
                                <UpdateSteps bg="bg-white" textColor="text-black" ruta="/informacion-para-envio" textContent="continuar como invitado" />
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