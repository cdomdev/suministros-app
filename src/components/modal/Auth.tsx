import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal } from "react-bootstrap";
import type { Values } from "@/types/types";
import { validaSesion } from '@/services/auth'
import { Toast } from "../toast/Toas";
import axios from "axios";
import { eventAuth } from "@/events/eventAuth";

const Auth: React.FC = () => {
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (values: Values) => {
        try {
            const response = await validaSesion(values)
            if (response.status === 200) {
                setShow(false)
                eventAuth.emit('authChange', true);
                localStorage.setItem('infoProfileUSer', JSON.stringify(response.data))
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { status } = error.response;
                if (status === 404) {
                    setBgToast('fail')
                    setShowToast(true)
                    setToastMessage(`El email ${values.email} no esta registrado`)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                }
            }

        }


    }

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
                        <Toast
                            showToast={showToast}
                            setShowToast={setShowToast}
                            toastMessage={toastMessage}
                            setToastMessage={setToastMessage}
                            bgToast={bgToast}
                            setBgToast={setBgToast}
                        />
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validate={(values: Values) => {
                                const errors: Partial<Values> = {};

                                if (!values.email) {
                                    errors.email = "¡Este campo no puede quedar vacio!";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = "Ingrese una dirección de correo válida";
                                }
                                if (!values.password) {
                                    errors.password = "¡Este campo no puede quedar vacio!";
                                }

                                return errors;
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Ingrese su correo
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            placeholder="example@sumi.com"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Ingrese su contraseña
                                            </label>
                                            <a
                                                href="#"
                                                className="text-blue-700 hover:underline duration-150 text-sm flex justify-end px-1"
                                            >
                                                Olvidé mi contraseña
                                            </a>
                                        </div>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Iniciar sesión
                                    </button>
                                    <div className="w-full flex gap-2 items-center text-sm">
                                        <p className="py-2">¿No tienes cuenta?</p>
                                        <a href="/" className="underline hover:text-blue-500 duration-150">
                                            Regístrate aquí
                                        </a>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Modal.Body>

                </div>
            </Modal>
        </>
    );
};


export default Auth;
