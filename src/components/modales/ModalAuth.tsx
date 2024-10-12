import React, { useState } from "react";
import type { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import InitSesion from "@/components/auth/InitSesion";
import { GoogleAuth } from "../auth/GoogleAuth";


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
            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none px-4 pt-4 pb-1">
                </Modal.Header>
                <div className="font-font-cust-2 p-2">
                    <Modal.Body>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-center text-black dark:text-white"
                        >
                            Inicia sesion con tu cuenta de google
                        </label>
                        <GoogleAuth setShow={setShow} />
                        <div className="flex items-center justify-center mb-2 gap-2">
                            <hr className="border-2 border-black w-[50%]" />
                            <span className="block text-sm font-semibold">o</span>
                            <hr className="border-2 border-black w-[50%]" />
                        </div>
                        <InitSesion setShow={setShow} />

                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};


export default ModalAuth;
