import { useState } from 'react'
import { useEffect } from 'react';
import CardCarrito from '../cards/CardCarrito';
import type { Producto } from '@/types/types';
import { CarritoEmpty } from './CarritoEmpty';
import './style.css'

const DetallesCarrito = () => {
    const [productos, setProductos] = useState<Producto[]>([])
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
        setProductos(carrito);
    }, []);


    return (
        <>
            {!productos ? (
                <CarritoEmpty />
            ) :
                <div className='flex flex-col gap-2 overflow-y-auto max-h-96'>
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                            <CardCarrito
                                key={producto.id}
                                producto={producto}
                                productos={productos}
                                setProductos={setProductos}
                            />
                        ))
                    ) : (
                        <CarritoEmpty />
                    )}
                    <a href='/categoria/pisos-y-paredes' className='bg-[#f4f4f4] btn-add-more-products  hover:bg-blue-600 hover:text-white hover:stroke-white duration-200 max-w-[40%] mx-auto shadow-md cursor-pointer py-2 my-3 px-4 rounded-3xl flex items-center hover:shadow-none'>
                        {productos && productos.length > 0 ? 'Continuar comprando' : 'Agregar productos al carrito'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus size-5 stroke-black hover:stroke-white" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M12.5 17h-6.5v-14h-2" />
                            <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                            <path d="M16 19h6" />
                            <path d="M19 16v6" />
                        </svg></a>
                </div>
            }

        </>
    )
}

export default DetallesCarrito