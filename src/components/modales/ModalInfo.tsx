import React, { useState } from "react";
import { Modal } from "react-bootstrap";


const ModalInfo: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="hidden md:flex flex-col items-center cursor-pointer " onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-seam w-8 h-8 md:w-11 md:h-11" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 21h-6.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.258 1.678" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                    <path d="M19 16v3" />
                    <path d="M19 22v.01" />
                </svg>
                <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100">Compras</small>
            </div>

            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none pb-0 px-4">
                </Modal.Header>
                <div className="font-font-cust-2 p-2">
                    <Modal.Body className="pt-0">
                        <h2 className="font-semibold text-center text-xl md:text-2xl">
                            Se requiere iniciar sesión
                        </h2>
                        <h3 className="text-center text-sm md:text-base leading-5">
                            Tienes que iniciar sesión para utilizar esta función.
                        </h3>
                        <hr className="my-2" />
                        <p className="text-wrap text-xs md:text-sm mx-auto text-black">
                            La seccion a la que va a acceder contiene información
                            personal, por lo que necesitamos su identidad para saber qué
                            información podemos proporcionarle. Por lo tanto, deberá
                            iniciar sesión rigistrarse si realmente desea acceder.
                        </p>
                        <div
                            className="w-full flex flex-col mx-auto justify-center items-center gap-2 mt-3">
                            <a href="/registro"
                                className="text-white w-full inline-block text-center rounded-md py-2 bg-blue-600 hover:bg-blue-800 duration-200 text-xs md:text-sm"
                            >Quiero registrarme</a>
                            <button onClick={() => handleClose()}
                                className="text-black bg-[#ebebeb] w-full rounded-md py-2 hover:bg-[#d3d3d3] duration-200 text-xs md:text-sm"
                            >Cancelar</button>
                        </div>
                    </Modal.Body>

                </div>
            </Modal>
        </>
    );
};


export default ModalInfo;


