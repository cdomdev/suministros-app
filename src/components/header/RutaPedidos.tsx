import { useState, useEffect } from 'react';

import type { PropProfile } from '@/types/types'
const RutaPedidos = () => {
    const [data, setData] = useState<PropProfile>();

    useEffect(() => {
        const dataLocal = localStorage.getItem('infoProfileUSer');
        if (dataLocal) {
            setData(JSON.parse(dataLocal));
        }
    }, []);

    return (
        <>
            <a className="flex flex-col items-center cursor-pointer" href="/usuario/perfil">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-box-seam w-8 h-8 md:w-11 md:h-11"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"></path>
                    <path d="M12 12l8 -4.5"></path>
                    <path d="M8.2 9.8l7.6 -4.6"></path>
                    <path d="M12 12v9"></path>
                    <path d="M12 12l-8 -4.5"></path>
                </svg>
                <small
                    className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100"
                >Compras</small>
            </a>
        </>

    )
}


export default RutaPedidos