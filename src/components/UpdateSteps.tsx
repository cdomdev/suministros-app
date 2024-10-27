import { useLocalStorage } from '@/hook/useLocalStoreage';
import type { Producto } from '@/types/types';
import { useEffect, useState } from 'react';

interface PropUpdate {
    ruta: string,
    bg: string,
    textColor?: string,
    textContent?: string,
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}


export const UpdateSteps: React.FC<PropUpdate> = ({ ruta, bg, textColor, textContent, type = 'button', disabled = false }) => {
    const [productos, setProductos] = useState<Producto[]>([])
    const [, setSteps] = useLocalStorage('steps', 1);
    let rutaCapitalice;
    if(ruta === 'pago'){
       return rutaCapitalice = ruta.toLocaleLowerCase();
    }

    console.log(rutaCapitalice)

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
        setProductos(carrito);
    }, [])

    const handleNextStep = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        setSteps((prev: number) => prev + 1);

        if (type === 'button' || type === 'submit' || type === 'reset') {
            window.location.href = `${ruta}`;
        }
    };


    if (productos.length === 0) {
        return <p className="text-sm text-center font-semibold my-2 text-red-400">No hay productos en tu carrito</p>
    }

    return (
        <>
            {type === 'button' || type === 'submit' || type === 'reset' ? (
                <button
                    onClick={handleNextStep}
                    type={type}
                    disabled={disabled}
                    className={`uppercase inline-block text-center text-xs md:text-sm border w-full py-2 rounded-md mb-2 hover:shadow-sm duration-150 mt-2 ${textColor} ${bg} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {textContent}
                </button>
            ) : (
                <a
                    href={ruta}
                    onClick={handleNextStep}
                    className={`uppercase inline-block text-center text-xs md:text-sm border w-full py-2 rounded-md mb-2 hover:shadow-sm duration-150 mt-2 ${textColor} ${bg}`}
                >
                    {textContent}
                </a>
            )}
        </>
    );
};
