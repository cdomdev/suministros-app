import { useStepsStore } from "@/context/steps.context";
import { useEffect, useState } from "react";
import type { Producto } from "@/types/types";
import { eventEmitter } from "@/events/carritoChanged";
import LoginAndShoping from "../LoginAndShoping";

export default function VlidatedAtuhCarrito({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [productos, setProductos] = useState<Producto[]>([]);

  const {  nextStep } = useStepsStore();

  useEffect(() => {
    const handleCarritoChange = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
      setProductos(carrito);
    };
    if (eventEmitter) {
      eventEmitter.on("carritoChanged", handleCarritoChange);
    }

    handleCarritoChange();
    return () => {
      if (eventEmitter) {
        eventEmitter.off("carritoChanged", handleCarritoChange);
      }
    };
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <a
          href="/informacion-para-envio"
          onClick={nextStep}
          className="bg-blue-600 hover:bg-blue-500 duration-150 w-full rounded-md text-white inline-block py-2 text-center uppercase text-sm"
        >
          Continuar
        </a>
      ) : (
        <>
          {!productos || productos.length === 0 ? (
            <>
              <p className="text-xs md:text-sm text-center font-semibold my-2 text-red-400">
                No hay productos en tu carrito
              </p>
            </>
          ) : (
            <>
              <div className="   mt-2">
                <p className="text-xs md:text-sm mb-2 ">
                  Registrate o inicia sesion para tener un historial de tus
                  compras o hacer seguiento del estado de tu pedido.
                </p>
                <LoginAndShoping
                  isBtn={true}
                  isAuthenticated={isAuthenticated}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
