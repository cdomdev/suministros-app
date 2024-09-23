import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import type { PropProfile } from "@/types/types";
import { Form, Spinner } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { Toast } from "../cammon/Toast";
import type { DataUserUpdate } from "@/types/types";
import { updateProfile } from "@/services/user";

const UpdateProfile = () => {
    const [data, setData] = useState<PropProfile | null>(null);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const userSessionCookie = Cookies.get('user_sesion');
        if (userSessionCookie) {
            try {
                const userData = JSON.parse(userSessionCookie);
                setData(userData);
            } catch (error) {
                console.error("Error parsing user session cookie:", error);
            }
        }
    }, []);


    const handleSubmit = async (values: DataUserUpdate, { resetForm }: { resetForm: () => void }) => {
        try {
            if (data && data.email) {
                const response = await updateProfile(data.email, values)
                if (response.status === 200) {
                    console.log(response)
                    console.log('actulizado')
                }
            }
        } catch (error) {

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
                initialValues={{ nombre: "", telefono: "", direccion: "", }}
                validate={(values: DataUserUpdate) => {
                    const errors: Partial<DataUserUpdate> = {};
                    if (!values.nombre) {
                        errors.nombre = "¡Este campo quedara con su nombre actual!";
                    }
                    if (!values.telefono) {
                        errors.telefono = "¡Este campo no puede quedar vacio!";
                    }
                    if (!values.direccion) {
                        errors.direccion = "¡Este campo no puede quedar vacio!";
                    }
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label
                                htmlFor="nombre"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Ingrese su nombre
                            </label>
                            <Field
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Si este campo no se modifica quedara con su valor actual"
                            />
                            <ErrorMessage
                                name="nombre"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="telefono"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Ingrese su telefono
                            </label>
                            <Field
                                type="text"
                                id="telefono"
                                name="telefono"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="3245623236"
                            />
                            <ErrorMessage
                                name="telefono"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Ingrese su direccion
                            </label>
                            <Field
                                type="text"
                                id="direccion"
                                name="direccion"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="calle 123 #456"
                            />
                            <ErrorMessage
                                name="direccion"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 w-full hover:bg-blue-800 duration-200 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {isLoading ? (
                                <div className="spinner-container">
                                    <Spinner animation="border" role="status" size="sm" />
                                </div>
                            ) : (
                                <>Actualizar mi perfil</>
                            )}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default UpdateProfile