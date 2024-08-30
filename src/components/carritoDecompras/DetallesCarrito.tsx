import { useState } from 'react'
import { useEffect } from 'react';
import eventEmitter from '@/events/carritoChanged';
import CardCarrito from '../cards/CardCarrito';
import type { Producto } from '@/types/types';
import { CarritoEmpty } from './CarritoEmpty';
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
                <div className='flex flex-col gap-2 overflow-y-auto max-h-screen'>
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
                </div>
            }

        </>
    )
}

export default DetallesCarrito