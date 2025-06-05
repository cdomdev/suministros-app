import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormEnvioDatosUsuario } from "../envio/DatosUsuario";


const ModalEnvioUsuario: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="bg-blue-600 w-full md:w-[30%] mx-auto  p-2 rounded-md text-white hover:bg-blue-500 duration-200 text-xs md:text-sm">Ingresar datos</button>
            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}

            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header  className="border-none px-4 pt-4 pb-1 text-center" closeButton>
                    <Modal.Title className="text-base md:text-lg text-center  w-full font-semibold ">Datos de envío</Modal.Title>
                </Modal.Header>
                <div className="   p-2">
                    <Modal.Body className="pt-0">
                        <FormEnvioDatosUsuario />
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};


export default ModalEnvioUsuario;



