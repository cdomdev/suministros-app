import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { ValuesIniSesion } from "@/types/types";
import { validaSesion } from '@/services/auth'
import { Toast } from "../Toast";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Cookies from "js-cookie";

interface FormInicioSesionProps {
    setShow: (show: boolean) => void;
}

const InitSesion: React.FC<FormInicioSesionProps> = ({ setShow }) => {
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values: ValuesIniSesion) => {
        setIsLoading(true);
        try {
            const response = await validaSesion(values)
            if (response.status === 200) {
                setShow(false)
                const { data } = response
                window.location.reload()
                const { accessToken, userSessionData } = data
                Cookies.set('access_token', accessToken, {
                    expires: 1,
                    sameSite: 'lax',
                    secure: true
                })
                Cookies.set('user_sesion', JSON.stringify(userSessionData), {
                    expires: 1,
                    sameSite: 'lax',
                    secure: true
                })
                localStorage.setItem('infoProfileUSer', JSON.stringify(userSessionData))
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { status } = error.response;
                if (status === 404) {
                    setBgToast('fail')
                    setShowToast(true)
                    setToastMessage(`El email ${values.email} no esta registrado`)
                    setIsLoading(false)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                } else if (status === 401) {
                    setBgToast('fail')
                    setShowToast(true)
                    setIsLoading(false)
                    setToastMessage(`Datos incorrectos, verifica tus datos eh intentalo de nuevo`)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                }
            } else {
                setBgToast('fail')
                setShowToast(true)
                setToastMessage(`Algo salio mal, intentalo mas tarde`)
                setTimeout(() => {
                    setShowToast(false)
                }, 5000)
            }

        } finally {
            setIsLoading(false)
        }

    }

    return (
        <>
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
                validate={(values: ValuesIniSesion) => {
                    const errors: Partial<ValuesIniSesion> = {};
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
                                    href="/Olvide-mi-contraseña"
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
                            className="text-white text-xs md:text-sm bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {isLoading ? (
                                <div className="spinner-container">
                                    <Spinner animation="border" role="status" size="sm" />
                                </div>
                            ) : (
                                <>Iniciar sesión</>
                            )}

                        </button>
                        <div className="w-full flex gap-2 items-center text-xs md:text-sm">
                            <p className="py-2">¿No tienes cuenta?</p>
                            <a href="/registro" className="underline hover:text-blue-500 duration-150">
                                Regístrate aquí
                            </a>
                        </div>
                    </Form>
                )}
            </Formik>

        </>
    );
};


export default InitSesion;
