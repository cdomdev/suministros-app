import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormEnvioDatosInvitado } from "../forms/FormEnvioDatosInvitado";

const ModalEnvioInvitado: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="bg-blue-600 w-[30%] mx-auto  p-2 rounded-md text-white hover:bg-blue-500 duration-200">Ingresar datos</button>

            {/* Fondo personalizado del modal */}
            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            {/* Modal */}
            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none p-4">
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
