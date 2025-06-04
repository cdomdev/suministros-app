import type { Producto } from "@/types/types";
import { useEffect, useState } from "react";
import {CardProductos} from "../cards/CardProductos";
import { Sinresultados } from "./Sinresultados";

const Resultados = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  useEffect(() => {
    const carrito = JSON.parse(
      sessionStorage.getItem("resultado-busqueda") || "[]"
    );
    setProductos(carrito);
  }, []);

  return (
    <article className="w-[90%] pt-7  mx-auto flex flex-col items-center justify-center ">
      <span className="font-semibold mb-2">{productos.length} productos</span>
      <div className="flex gap-4 flex-wrap justify-center w-full">
        {productos && productos.length > 0 ? (
          productos.map((producto) => (
            <CardProductos
              id={producto.id}
              image={producto.image}
              precio={producto.precio}
              referencia={producto.referencia}
              titulo={producto.titulo}
              descuento={producto.descuento}
              description={producto.description}
              marca={producto.marca}
              categoria={producto.categoria}
              subcategoria={producto.subcategoria}
            />
          ))
        ) : (
          <Sinresultados />
        )}
      </div>
    </article>
  );
};

export default Resultados;
