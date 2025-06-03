import type { Producto } from "@/types/types";
import React from "react";
import { formateValue } from "@/utils";
import { calcularDescuento } from "@/utils";

export const CardProductos: React.FC<Producto> = ({
  discount,
  id,
  image,
  marca,
  titulo,
  referencia,
  precio,
}) => {
  return (
    <a
      key={id}
      href={`/detalle-producto/${id}`}
      className="card-producto rounded-sm flex flex-col justify-between w-[10em] md:w-[16em] p-3 h-auto md:min-h-[25em] bg-white border hover:shadow-md duration-150"
    >
      <div className="flex w-full justify-between items-center mb-1">
        <span
          className={`${discount > 0 ? "bg-red-600" : "bg-white"} py-1 px-2 md:px-4 text-xs md:text-sm text-white font-semibold`}
        >
          {discount ? `${discount} %` : ""}
        </span>
        <span className="text-gray-700 text-[8px] md:text-[10px] uppercase">
          REF: {referencia}
        </span>
      </div>

      <picture>
        <img
          src={image}
          alt="Imagen del producto"
          className="w-[7em] md:w-[10em] mx-auto hover:scale-105 duration-200"
          loading="lazy"
        />
      </picture>

      <div className="mt-2 flex flex-col justify-between gap-2 flex-grow">
        <ul className="flex flex-col justify-center items-center leading-3">
          <li className="text-gray-400 text-xs font-semibold mt-3 uppercase">
            {marca}
          </li>
          <li className="text-xs md:text-sm leading-5 text-center">{titulo}</li>
          {discount ? (
            <>
              <li className="mt-2 line-through text-xs md:text-sm font-semibold text-red-700 opacity-[50%]">
                $ {formateValue(precio)}
              </li>
              <li className="text-sm md:text-lg my-2 font-semibold">
                $ {calcularDescuento(precio, discount)}
              </li>
            </>
          ) : (
            <li className="text-sm md:text-lg font-semibold mt-4">
              $ {formateValue(precio)}
            </li>
          )}
        </ul>
        <div className="flex justify-center w-full">
          <button className="bg-blue-700 border-none py-2 text-[10px] max-w-[60%] mt-2 text-white rounded-sm hover:bg-blue-500 duration-100 md:text-sm w-full">
            Ver producto
          </button>
        </div>
      </div>
    </a>
  );
};
