import { useState } from "react";
import { Modal } from "../Modal";
import { ContraEntrega } from "./ContraEntrega";
import { IconModalOpPy } from "@/components/icons/IconModalOpPy";

export default function OpcionesPago() {
    const [show, setShow] = useState<boolean>(false)
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <button
                    onClick={() => setShow(true)}
                    className=" bg-blue-500  mx-auto flex items-center justify-center gap-1  py-2.5 px-16 rounded-md text-white duration-200 hover:bg-blue-600 text-xs md:text-sm lg:text-base "
                >
                    <span className="bg-white inline-flex rounded-full p-1">
                        <IconModalOpPy />
                    </span>
                    Pagar al recibir
                </button>
                <span className="text-gray-500 text-xs mt-1">
                    Paga en la puerta de tu casa
                </span>
            </div>
            <Modal isOpen={show} onClose={() => setShow(false)}>
                <ContraEntrega />
                <button
                    className="mt-2.5 text-sm w-full bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-[#d5d5d5] duration-100"
                    onClick={() => setShow(false)}
                >
                    Cambiar el metodo de pago
                </button>
            </Modal>
        </>
    )
}