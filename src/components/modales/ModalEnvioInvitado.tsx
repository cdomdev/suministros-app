import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormEnvioDatosInvitado } from "../envio/DatosInvitado";

const ModalEnvioInvitado: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="bg-blue-600 w-full md:w-[30%] mx-auto text-xs md:text-sm p-2 rounded-md text-white hover:bg-blue-500 duration-200">Ingresar datos</button>

            {/* Fondo personalizado del modal */}
            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            {/* Modal */}
            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none px-4 pt-4 pb-1">
                </Modal.Header>
                <div className="font-font-cust-2 p-2">
                    <Modal.Body className="pt-0">
                        <FormEnvioDatosInvitado />
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};


export default ModalEnvioInvitado;