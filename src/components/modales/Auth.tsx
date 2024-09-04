import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import FormInicioSesion from "@/components/forms/FormInicioSesion";

const Auth: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="flex flex-col items-center cursor-pointer justify-center gap-1 md:gap-3 " onClick={handleShow}>
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
            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            {/* Modal */}
            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none p-4">
                </Modal.Header>
                <div className="font-font-cust-2 p-2">
                    <Modal.Body>
                        <FormInicioSesion setShow={setShow} />
                    </Modal.Body>

                </div>
            </Modal>
        </>
    );
};


export default Auth;
