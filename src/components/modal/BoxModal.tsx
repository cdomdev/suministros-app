import React, { useEffect, useState } from "react";

// Componente principal
const BoxModal: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handleShowModal = () => {
            setModalOpen(true);
        };

        const handleHideModal = () => {
            setModalOpen(false);
        };

        const boxModalEl = document.getElementById("boxModal");

        if (boxModalEl) {
            boxModalEl.addEventListener("show.bs.modal", handleShowModal);
            boxModalEl.addEventListener("hide.bs.modal", handleHideModal);
        }

        return () => {
            if (boxModalEl) {
                boxModalEl.removeEventListener("show.bs.modal", handleShowModal);
                boxModalEl.removeEventListener("hide.bs.modal", handleHideModal);
            }
        };
    }, []);

    return (
        <>

            <div className="flex flex-col items-center cursor-pointer" data-bs-toggle="modal" data-bs-target="#boxModal">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-box-seam w-8 h-8 md:w-11 md:h-11"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"></path>
                    <path d="M12 12l8 -4.5"></path>
                    <path d="M8.2 9.8l7.6 -4.6"></path>
                    <path d="M12 12v9"></path>
                    <path d="M12 12l-8 -4.5"></path>
                </svg>
                <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100">Compras</small>
            </div>

            {/* Fondo personalizado del modal */}
            {isModalOpen && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            {/* Modal */}
            <div
                className="modal fade"
                id="boxModal"
                data-bs-backdrop="false"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="boxModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content font-font-cust-2">
                        <div className="flex justify-end px-2 py-1">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="font-semibold text-center text-2xl">
                                Se requiere iniciar sesión
                            </h2>
                            <h3 className="text-center">
                                Tienes que iniciar sesión para utilizar esta función.
                            </h3>
                            <hr className="my-2" />
                            <p className="text-wrap text-sm mx-auto text-black">
                                La seccion a la que va a acceder contiene información
                                personal, por lo que necesitamos su identidad para saber qué
                                información podemos proporcionarle. Por lo tanto, deberá
                                iniciar sesión o registrarse si realmente desea acceder.
                            </p>
                            <div className="w-full flex flex-col mx-auto justify-center items-center gap-2 mt-3">
                                <button
                                    className="text-white w-full rounded-md py-2 bg-blue-600">
                                    Quiero registrarme
                                </button>
                                <button
                                    className="text-black bg-[#ebebeb] w-full rounded-md py-2"
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default BoxModal;
