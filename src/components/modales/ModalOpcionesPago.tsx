import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ContraEntrega } from "../pago/ContraEntrega";

interface ExpandedProps {
    isAuthenticated: boolean;
}

const ModalOpcionesPago: React.FC<ExpandedProps> = ({ isAuthenticated }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <button onClick={handleShow} className=" bg-blue-500 w-[95%] md:max-w-[39%] mx-auto flex items-center justify-center gap-1  py-2.5 px-4 rounded-md text-white duration-200 hover:bg-blue-600 ">
                    <span className="bg-white inline-flex rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-dollar size-4" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h6" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.387 0 .748 .11 1.054 .3" />
                            <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                            <path d="M19 21v1m0 -8v1" />
                        </svg>
                    </span>
                    Pagar al recibir
                </button>
                <span className="text-gray-500 text-xs mt-1">Paga en la puerta de tu casa</span>
            </div>
            {show && <div id="box-backdrop" className="fixed inset-0 bg-gray-900/50 z-40"></div>}
            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-none pt-4 pb-1 px-4">
                </Modal.Header>
                <div className="font-font-cust-2 p-2">
                    <Modal.Body className="pt-0">
                        <ContraEntrega isAuthenticated={isAuthenticated} />
                        <button className='mt-2.5 text-sm w-full bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-[#d5d5d5] duration-100' onClick={() => setShow(false)}>
                            Cambiar el metodo de pago
                        </button>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};


export default ModalOpcionesPago;



