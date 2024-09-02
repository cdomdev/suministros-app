import React, { useEffect, useState } from "react";

// Componente principal
const Auth: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handleShowModal = () => {
            setModalOpen(true);
        };

        const handleHideModal = () => {
            setModalOpen(false);
        };

        const boxModalEl = document.getElementById("authModal");

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
            <div className="flex flex-col items-center cursor-pointer justify-center gap-1 md:gap-3 " data-bs-toggle="modal" data-bs-target="#authModal">
                <div
                    className="relative w-7 h-7 md:w-9 md:h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                        className="absolute w-8 h-8 md:w-11 md:h-11 text-gray-400  -left-[2px] md:-left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"></path></svg>

                </div>
                <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:-mb-[2px] duration-100">Perfil</small>
            </div>


            {/* Fondo personalizado del modal */}
            {isModalOpen && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            {/* Modal */}
            <div
                className="modal fade"
                id="authModal"
                data-bs-backdrop="false"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="authModalLabel"
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
                            <h1>Modal para sesion</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Auth;
