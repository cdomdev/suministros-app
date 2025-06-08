import { Modal } from "@/components/Modal"
import { useState } from "react"
import InitSesion from "./auth/InitSesion";
import { GoogleAuth } from "./auth/GoogleAuth";
import DropdownProfile from "./header/DropdownProfile";
import { Person } from "./icons/Person";

interface AuthProps {
    isAuthenticated?: boolean;
    isBtn: boolean
}

export default function LoginAndShoping({ isAuthenticated
    , isBtn = false }: AuthProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            {isAuthenticated
                ?
                <DropdownProfile />
                : (
                    <>
                        {isBtn ?
                            <button onClick={() => setShow(true)} className="bg-blue-600 w-full text-white py-2 rounded-md uppercase text-xs md:text-sm  my-3  hover:bg-blue-700 hover:shadow-none">Iniciar sesion</button>
                            : (
                                <button onClick={() => setShow(true)} className="bg-transparent border-none p-0">
                                    <Person />
                                </button>
                            )
                        }

                        <Modal isOpen={show} onClose={() => setShow(false)}>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-center text-black dark:text-white"
                            >
                                Inicia sesion con tu cuenta de google
                            </label>
                            <GoogleAuth setShow={setShow} />
                            <div className="flex items-center justify-center mb-2 gap-2">
                                <hr className="border border-gray-300 w-[50%]" />
                                <span className="block text-sm font-semibold">o</span>
                                <hr className="border border-gray-300 w-[50%]" />
                            </div>
                            <InitSesion setShow={setShow} />
                        </Modal>
                    </>
                )}

        </>
    )
}