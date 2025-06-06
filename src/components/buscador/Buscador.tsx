import { SvgCarrritoSearh } from "../icons/SvgCarrritoSearh";
import { useState } from "react";
import { SvgGlass } from "../icons/SvgGlass";
import { busquedaProductos } from "@/services/productos";
import { Spinner } from "@/components/Spinner";
import { Locations } from "../Locations";

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!searchTerm) {
      return null;
    }
    setIsLoading(true);
    const response = await busquedaProductos(searchTerm);
    const { status } = response
    if (response.status === 200) {
      sessionStorage.setItem(
        "resultado-busqueda",
        JSON.stringify(response.data.resultados)
      );
      window.location.href = `/result-search?name=${encodeURIComponent(searchTerm)}`;
      setIsLoading(false);
    } else if (status === 404) {
      sessionStorage.removeItem("resultado-busqueda");
      window.location.href = `/result-search?name=${encodeURIComponent(searchTerm)}`;
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-1">
      <form className="flex items-center w-full ld:w-4/5 lg:mx-auto   ">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SvgCarrritoSearh />
          </div>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscas algun producto en especial..."
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSearch}
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isLoading ? (
            <Spinner className="size-4" />
          ) : (
            <>
              <SvgGlass />
              <span className="sr-only">Search</span>
            </>
          )}
        </button>
      </form>

      <Locations />
    </div>
  );
};

export default Buscador;
