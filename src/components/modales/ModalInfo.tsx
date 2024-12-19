import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IconModalIF } from "../icons/IconModalIF";


const ModalInfo: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="hidden md:flex flex-col items-center cursor-pointer " onClick={handleShow}>
                <IconModalIF />
                <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100">Compras</small>
            </div>

            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none pb-0 px-4">
                </Modal.Header>
                <div className="   p-2">
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


