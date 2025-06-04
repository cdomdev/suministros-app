import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import type { CiudadPorDepartamento } from "@/types/types";
import locations from "@/content/locations.json"
import { IconLocation } from "../icons/IconLocation";

const ModalLocation: React.FC = () => {
    const [show, setShow] = useState(false);
    const [departamentos, setDepartamentos] = useState<CiudadPorDepartamento[]>([]);
    const [ciudades, setCiudades] = useState<string[]>([]);
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState<string>("");
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState<string>("");

    useEffect(() => {
        setDepartamentos(locations as CiudadPorDepartamento[]);
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dep = e.target.value;
        setDepartamentoSeleccionado(dep);
        setCiudadSeleccionada("");

        const depto = departamentos.find((d) => d.departamento === dep);
        if (depto) {
            setCiudades(depto.ciudades);
        } else {
            setCiudades([]);
        }
    };

    const handleCiudadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCiudadSeleccionada(e.target.value);
    };


    return (
        <>

            <div className="hidden md:flex flex-col items-center cursor-pointer " onClick={handleShow}>
                <IconLocation />
                <small className="text-[7px] md:text-[8px] uppercase font-semibold text-balance hover:scale-110 duration-100 text-center">{ciudadSeleccionada || "Ubicación"}</small>
            </div>

            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none pb-0 px-4">
                    Guarda tu ubicación
                </Modal.Header>
                <div className="p-2">
                    <Modal.Body className="pt-0">
                        <form className="max-w-sm mx-auto">
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="departamento">
                                    Departamento:
                                </label>

                                <select value={departamentoSeleccionado} onChange={handleDepartamentoChange}
                                    id="departamento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                    <option value="">Seleccione un departamento</option>
                                    {departamentos.map((dep) => (
                                        <option key={dep.id} value={dep.departamento}>
                                            {dep.departamento}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">

                                <label className="block text-sm font-medium  text-gray-900 dark:text-white" htmlFor="ciudad">
                                    Ciudad:
                                </label>
                                <select
                                    value={ciudadSeleccionada}
                                    onChange={handleCiudadChange}
                                    disabled={!ciudades.length}
                                    id="ciudad"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="">Seleccione una ciudad</option>
                                    {ciudades.map((ciudad, index) => (
                                        <option key={index} value={ciudad}>
                                            {ciudad}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button className=" text-white inline-block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Guardar ubicacion</button>
                        </form>

                    </Modal.Body>
                </div >
            </Modal >
        </>
    );
};


export default ModalLocation;


