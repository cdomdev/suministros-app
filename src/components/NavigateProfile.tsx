import { Modal } from "@/components/Modal";
import { useState } from "react";
import { IconModalIF } from "./icons/IconModalIF";

export default function NavigateProfile({ isAuthenticated }: { isAuthenticated: boolean }) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>

            {isAuthenticated ? (
                <a className="hidden md:flex flex-col items-center cursor-pointer" href="/usuario/perfil">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-seam w-8 h-8 md:w-11 md:h-11" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248" />
                        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                        <path d="M15 19l2 2l4 -4" />
                    </svg>
                    <small
                        className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100"
                    >Compras</small>
                </a>
            ) : (
                <>
                    <div className="hidden md:flex flex-col items-center cursor-pointer " onClick={() => setShow(true)}>
                        <IconModalIF />
                        <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100">Compras</small>
                    </div>

                    <Modal
                        isOpen={show}
                        onClose={() => setShow(false)}>

                        <h2 className="font-semibold text-center text-base md:text-lg">
                            Se requiere iniciar sesión
                        </h2>
                        <h3 className="text-center  text-sm leading-5">
                            Tienes que iniciar sesión para utilizar esta función.
                        </h3>
                        <hr className="my-2" />
                        <p className="text-xs md:text-sm mx-auto text-black text-left text-pretty">
                            La seccion a la que va a acceder contiene información
                            personal, por lo que necesitamos su identidad para saber qué
                            información podemos proporcionarle. Por lo tanto, deberá
                            iniciar sesión rigistrarse si realmente desea acceder.
                        </p>
                        <div
                            className="w-full flex flex-col mx-auto justify-center items-center gap-3 mt-3">
                            <a href="/registro"
                                className="text-white w-full inline-block text-center rounded-md py-2 bg-blue-600 hover:bg-blue-800 duration-200 text-xs md:text-sm"
                            >Quiero registrarme</a>
                            <button onClick={() => setShow(false)}
                                className="text-black bg-[#ebebeb] w-full rounded-md py-2 hover:bg-[#d3d3d3] duration-200 text-xs md:text-sm"
                            >Cancelar</button>
                        </div>
                    </Modal>
                </>
            )
            }

        </>
    )
}