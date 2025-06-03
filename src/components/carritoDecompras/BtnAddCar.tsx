import type { Producto } from "@/types/types";
import { useState } from "react";
import { Toast } from "../Toast";
import { eventEmitter } from "@/events/carritoChanged";
import { useToastStore } from "@/context/store.context";
import { Minus } from "../icons/Minus";
import { More } from "../icons/More";

export const BtnAddCar: React.FC<{ producto: Producto }> = ({ producto }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { showToast } = useToastStore();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addProductoLocal = (producto: Producto, quantity: number): void => {
    let productosLocal: Producto[] = JSON.parse(
      localStorage.getItem("carrito") || "[]"
    );

    const productoExistente = productosLocal.find(
      (prod) => prod.id === producto.id
    );

    if (productoExistente) {
      productoExistente.quantity = (productoExistente.quantity || 0) + quantity;
    } else {
      productosLocal.push({ ...producto, quantity });
    }

    localStorage.setItem("carrito", JSON.stringify(productosLocal));

    if (eventEmitter) {
      eventEmitter.emit("carritoChanged");
    }
  };

  const handleAddToCart = () => {
    addProductoLocal(producto, quantity);
    showToast(
      `Se agregaron ${quantity} ${quantity > 1 ? "productos" : "producto"} al carrito`,
      "success"
    );
  };

  return (
    <>
      <Toast />
      <div className="border flex justify-center items-center px-2  ">
        <button className="decrement" onClick={handleDecrement}>
       <Minus className="size-5"/>
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
       <More className="size-5"/>
        </button>
      </div>
      <button
        onClick={() => handleAddToCart()}
        className="bg-blue-600 px-3 py-2 text-white rounded-sm hover:bg-blue-500 duration-200"
      >
        Agregar al carrito
      </button>
    </>
  );
};
