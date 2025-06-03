import type { DatosUsurio } from "@/types/types";
import { useEffect, useState } from "react";
import { Toast } from "../Toast";
import { UpdateSteps } from "../UpdateSteps";
import { useToastStore } from "@/context/store.context";

const VerifyDataLocal = () => {
  const [datos, setDatos] = useState<DatosUsurio | null>(null);
  const { showToast } = useToastStore();

  useEffect(() => {
    const datosLocal = localStorage.getItem("dataUserForBuy");
    if (datosLocal) {
      const parsedData: DatosUsurio = JSON.parse(datosLocal);
      setDatos(parsedData);
    } else {
      setDatos(null);
    }
  }, []);

  const handleToast = () => {
    showToast("Por favor agrega los datos de envio para continuar", "error");
  };

  return (
    <>
      <Toast />
      {!datos ? (
        <button
          className="bg-blue-600 text-white w-full rounded-md py-2 my-2 text-xs md:text-sm uppercase hover:bg-blue-700 duration-150"
          onClick={handleToast}
        >
          Continuar
        </button>
      ) : (
        <UpdateSteps
          bg="bg-blue-600"
          ruta="/Pago"
          textColor="text-white"
          textContent="continuar"
        />
      )}
    </>
  );
};

export default VerifyDataLocal;
