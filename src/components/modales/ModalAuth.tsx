import React, { useState } from "react";
import type { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import FormInicioSesion from "@/components/forms/FormInicioSesion";


interface AuthProps {
    triggerElement: ReactNode;
}


const ModalAuth: React.FC<AuthProps> = ({ triggerElement }) => {
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                {triggerElement}
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


export default ModalAuth;
