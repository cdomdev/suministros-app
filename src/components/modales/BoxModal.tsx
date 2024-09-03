import React, { useState } from "react";
import { Modal } from "react-bootstrap";


const PerfilModal: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="flex flex-col items-center cursor-pointer" onClick={handleShow}>
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
            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            {/* Modal */}
            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none pb-0 px-4">
                </Modal.Header>
                <div className="font-font-cust-2 p-2">
                    <Modal.Body className="pt-0">
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
                            iniciar sesión rigistrarse si realmente desea acceder.
                        </p>
                        <div
                            className="w-full flex flex-col mx-auto justify-center items-center gap-2 mt-3">
                            <button
                                className="text-white w-full rounded-md py-2 bg-blue-600"
                            >Quiero registrarme</button>
                            <button onClick={() => handleClose()}
                                className="text-black bg-[#ebebeb] w-full rounded-md py-2"
                            >Cancelar</button>
                        </div>
                    </Modal.Body>

                </div>
            </Modal>
        </>
    );
};


export default PerfilModal;
