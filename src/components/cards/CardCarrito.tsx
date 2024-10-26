import { eventEmitter } from "@/events/carritoChanged";
import type { Producto } from "@/types/types";
import { useState } from "react";
import { Toast } from "../Toast";
import { formateValue } from "@/utils/formatearValor";
import { calcularSubTotal } from "@/utils/calcularSubTotal";
import { calcularDescuento } from "@/utils";

interface CardCarritoProps {
    producto: Producto;
    productos: Producto[];
    setProductos: (productos: Producto[]) => void;
}

const CardCarrito = ({ producto, productos, setProductos }: CardCarritoProps) => {
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    const deleFromCar = (productId: number) => {
        const updatedCarItems = productos.filter((item) => item.id !== productId);
        localStorage.setItem('carrito', JSON.stringify(updatedCarItems));
        setProductos(updatedCarItems);
        if (eventEmitter) {
            eventEmitter.emit('carritoChanged');
        }
    };


    const handleDeletToCart = (producto: Producto) => {
        setToastMessage('Se eliminó un producto del carrito');
        setBgToast('toast-success');
        setShowToast(true);
        window.location.reload()
        deleFromCar(producto.id);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const valorProducto = producto.discount && producto.discount > 0 ? calcularDescuento(producto.valor, producto.discount) : formateValue(producto.valor)
    const subTotal = calcularSubTotal(producto)

    return (
        <div className="border py-2">
            <Toast
                showToast={showToast}
                setShowToast={setShowToast}
                toastMessage={toastMessage}
                setToastMessage={setToastMessage}
                bgToast={bgToast}
                setBgToast={setBgToast}
            />
            <div className="flex justify-between px-6 py-2 items-center">
                <div className="flex gap-2 items-center">
                    <img src={producto.image} alt={producto.nombre} loading="lazy" className="size-20" />
                    <div className="flex-col flex ">
                        <span className="text-balance text-xs md:text-sm flex-col flex ">
                            <strong>Producto: </strong>
                            {producto.nombre}
                        </span>
                        <span className="text-balance text-xs md:text-sm">
                            <strong >REF: </strong>
                            {producto.referencia}
                        </span>
                        <span className="text-balance text-xs md:text-sm ">
                            <strong>Cantidad: </strong>
                            {producto.quantity}
                        </span>
                        <span className="text-balance text-xs md:text-sm flex gap-1 ">
                            {
                                producto.discount ?? (
                                    <>
                                        <strong>Descuento: </strong>
                                        <p className="text-red-600 text-sm">{producto.discount}%</p>
                                    </>
                                )
                            }

                        </span>
                    </div>
                </div>
                <div className="flex">
                    <button onClick={() => handleDeletToCart(producto)} className="hover:text-red-700 text-xs md:text-sm">Eliminar</button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-x size-6" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7h16" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        <path d="M10 12l4 4m0 -4l-4 4" />
                    </svg>
                </div>
            </div>
            <hr className="w-[90%] m-auto" />
            <div className="w-full flex justify-end pr-10 gap-3 items-center mt-2">
                <span className="flex gap-2 items-center text-xs md:text-sm">
                    Valor unidad:
                    <strong>
                        $: {valorProducto}
                    </strong>
                </span>
                <span className="flex gap-2 text-xs md:text-sm">
                    Subtotal:
                    <strong>
                        $: {subTotal}
                    </strong>
                </span>
            </div>
        </div>

    );
};

export default CardCarrito;
