import { useEffect, useState } from "react";
import { eventEmitter } from '@/events/carritoChanged'

const CarritoPageNav = () => {
    const [cantidad, setCantidad] = useState<number>(0);

    useEffect(() => {
        const handleCarritoChange = () => {
            const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
            setCantidad(carrito.length);
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
    }, []);

    return (
        <a className="relative p-0 m-0 flex flex-col items-center cursor-pointer" href="/carrito-de-compras" onClick={() => window.location.href = '/carrito-de-compras'} >
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart size-8 md:size-11 stroke-gray-700" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                <span className=" size-4 bg-red-600 text-xs md:text-sm rounded-full text-white absolute flex justify-center items-center right-1 top-[-0.5em]">
                    {cantidad}
                </span>
            </div>

            <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100 cursor-pointer">
                Carrito
            </small>
        </a>
    );
};

export default CarritoPageNav


