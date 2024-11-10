import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import type { PropProfile } from "@/types/types";
import { Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { Toast } from "../Toast";
import type { DataUserUpdate } from "@/types/types";
import { updateProfile } from "@/services/user";

const UpdateProfile = () => {
    const [data, setData] = useState<PropProfile | null>(null);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    useEffect(() => {
        const userSessionCookie = Cookies.get('user_sesion');
        if (userSessionCookie) {
            const userData = JSON.parse(userSessionCookie);
            setData(userData);
        }
    }, []);



    const handleToast = (bg: string, ms: string) => {
        setShowToast(true)
        setBgToast(bg)
        setToastMessage(ms)
        setIsLoading(false)
        setTimeout(() => {
            setShowToast(false)
        }, 5000)
    }

    const handleSubmit = async (values: DataUserUpdate, { resetForm }: { resetForm: () => void }) => {
        setIsLoading(true)
        try {
            if (data && data.email) {
                const response = await updateProfile(data.email, values)
                if (response.status === 201) {
                    resetForm()
                    Cookies.set('user_sesion', JSON.stringify(response.data.user), {
                        expires: 1,
                        sameSite: 'lax',
                        secure: true
                    })
                    handleToast('toast-success', 'Datos actulizados con exito')
                }
            }
        } catch (error) {
            handleToast('fail', 'No pudimos actualizar tus datos, intentalo mas tarde')
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
                initialValues={{ telefono: "", direccion: "", }}
                validate={(values: DataUserUpdate) => {
                    const errors: Partial<DataUserUpdate> = {};
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
                            <div className="spinner-container">
                                {isLoading ? 'Actualizando...' : 'Actualizar datos'}
                            </div>
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default UpdateProfile