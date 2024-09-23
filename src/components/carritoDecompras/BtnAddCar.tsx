import type { Producto } from "@/types/types"
import { useState } from "react";
import { Toast } from "../cammon/Toast";
import { eventEmitter } from "@/events/carritoChanged";

export const BtnAddCar: React.FC<{ producto: Producto }> = ({ producto }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');


    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };


    const addProductoLocal = (producto: Producto, quantity: number): void => {
        // Obtener la lista de productos desde localStorage
        let productosLocal: Producto[] = JSON.parse(localStorage.getItem('carrito') || '[]');

        // Comprobar si el producto ya existe en la lista
        const productoExistente = productosLocal.find((prod) => prod.id === producto.id);

        if (productoExistente) {
            // Si el producto ya existe, sumar la cantidad al producto existente
            productoExistente.quantity = (productoExistente.quantity || 0) + quantity;
        } else {
            // Si el producto no existe, agregarlo a la lista con la cantidad seleccionada
            productosLocal.push({ ...producto, quantity });
        }

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('carrito', JSON.stringify(productosLocal));

        // crear evento para indicador del carrito
        if (eventEmitter) {
            eventEmitter.emit('carritoChanged');
        }

    };


    const handleAddToCart = () => {
        addProductoLocal(producto, quantity);
        setToastMessage(`Se agregaron ${quantity} productos al carrito`);
        setBgToast('toast-success');
        setShowToast(true);
        setQuantity(1)
        setTimeout(() => {
            setShowToast(false)
        }, 3000)
    };

    return (
        <>
            <Toast
                showToast={showToast}
                setShowToast={setShowToast}
                toastMessage={toastMessage}
                setToastMessage={setToastMessage}
                bgToast={bgToast}
                setBgToast={setBgToast}
            />
            <div className="border flex justify-center items-center px-2  ">
                <button className="decrement" onClick={handleDecrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-minus size-5 hover:scale-125 duration-200" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M12.5 17h-6.5v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                        <path d="M16 19h6" />
                    </svg>
                </button>
                <input
                    type="number"
                    className="border-none focus:border-transparent focus:outline-none appearance-none
             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
             [&::-moz-appearance]:textfield m-0 text-center w-[40px] font-bold text-lg"
                    min="1"
                    max="100"
                    step="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button className="increment" onClick={handleIncrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus size-5 hover:scale-125 duration-200" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M12.5 17h-6.5v-14h-2" />
                        <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                    </svg>
                </button>
            </div>
            <button onClick={() => handleAddToCart()}
                className="bg-blue-600 px-3 py-2 text-white rounded-sm hover:bg-blue-500 duration-200"
            >
                Agregar al carrito
            </button>
        </>
    );
}

