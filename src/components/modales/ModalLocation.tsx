import { useUbicacion } from "@/hook/useUbicacion";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { IconLocation } from "../icons/IconLocation";

const ModalLocation = () => {
  const {
    departamentos,
    ciudades,
    departamento,
    ciudad,
    setDepartamento,
    setCiudad,
    setLocation,
  } = useUbicacion();

  const [show, setShow] = useState(false);

  const saveLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation({
      departamento: departamento || "Sin dato",
      ciudad: ciudad || "Sin dato",
    });
    setShow(false);
  };

  return (
    <>
      <div
        onClick={() => setShow(true)}
        className="cursor-pointer flex flex-col items-center w-fit  md:min-w-20"
      >
        <IconLocation />
        <span className="text-[7px] md:text-[8px] uppercase font-semibold text-gray-700 text-center text-balance">
          {ciudad || "Ubicación"}
        </span>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className="pb-1 text-center flex">
          <Modal.Title className="text-base md:text-lg font-semibold text-center mx-auto">
            Selecciona tu ubicación
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <label
              htmlFor="departamento"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Selecciona tu departamento
            </label>
            <select
              id="departamento"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
            >
              <option value="">Seleccione un departamento</option>
              {departamentos.map((d) => (
                <option key={d.id} value={d.departamento}>
                  {d.departamento}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="ciudad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Selecciona tu ciudad
            </label>
            <select
              value={ciudad}
              id="ciudad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setCiudad(e.target.value)}
              disabled={!ciudades.length}
            >
              <option value="">Seleccione una ciudad</option>
              {ciudades.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={saveLocation}
            className="inline-block w-full bg-blue-600 rounded-lg text-white hover:bg-blue-500 duration-150 py-2 "
          >
            Guardar
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalLocation;
