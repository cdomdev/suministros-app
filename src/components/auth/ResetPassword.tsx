import { Formik, ErrorMessage, Field } from "formik";
import { Success } from "../recuperarContraseña/Success";
import { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Check } from "../icons/Check";
import { resetPassword, } from "@/services/auth";
import type { ValuesPassWords } from "@/types/types";
import axios from "axios";
import { Toast } from "../Toast";

interface FormResetPasswordProps {
    token: string
}

export const FormResetPassword = ({ token }: FormResetPasswordProps) => {
    const [success, setSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    useEffect(() => {
        const send = localStorage.getItem('processSucces')
        if (send) {
            const dataPerse = JSON.parse(send)
            setSuccess(dataPerse)
        }
    }, [])

    const handleSubmit = async (values: ValuesPassWords) => {
        setIsLoading(true);
        try {
            const response = await resetPassword({ values, token })
            if (response && response.status === 200) {
                setSuccess(true)
                localStorage.setItem('processSucces', JSON.stringify(true))
            }

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { status } = error.response;
                switch (status) {
                    case 401:
                        setToastMessage('No pudimos hacer esto, intentalo de nuevo.');
                        break;
                    case 400:
                        setToastMessage('El token ha expirado. Solicita un nuevo cambio desde la sección "Olvidé mi contraseña".');
                        break;
                    default:
                        setToastMessage('Ocurrió un error. Por favor, intenta más tarde.');
                        break;
                }

            }
            setBgToast('fail');
            setShowToast(true);
            setToastMessage('Ocurrió un error. Por favor, intenta más tarde.');
            setTimeout(() => setShowToast(false), 5000);

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="font-font-cust-2">
            <Toast
                showToast={showToast}
                setShowToast={setShowToast}
                toastMessage={toastMessage}
                setToastMessage={setToastMessage}
                bgToast={bgToast}
                setBgToast={setBgToast}
            />
            {success ? (
                <Success />
            ) : (
                <div className="container-recovery">
                    <h1 className="text-center mb-3 text-base md:text-lg">Solicitud para restablecer contraseña</h1>
                    <h2 className="font-normal text-sm md:text-base mb-2">
                        A continuación encontrará un formulario para restablecer su
                        contraseña, por favor siga las indicaciones
                    </h2>
                    <ul className="text-sm pl-3">
                        <li className="flex gap-1">
                            <Check />
                            Ingrese una nueva contraseña
                        </li>
                        <li className="flex gap-1">
                            <Check />
                            Confirme la contraseña
                        </li>
                        <li className="flex gap-1">
                            <Check />
                            La contraseña debe contener al menos una mayúscula, una minúscula,
                            un número y tener un minimo de 5 y un máximo de 10 caracteres
                        </li>
                    </ul>
                    <Formik
                        initialValues={{
                            password: "",
                            password2: "",
                        }}
                        validate={(values: ValuesPassWords) => {
                            const errors: Partial<ValuesPassWords> = {};
                            if (!values.password) {
                                errors.password = "Se requiere una contraseña";
                            } else if (
                                !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,10}$/.test(values.password)
                            ) {
                                errors.password =
                                    "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener un minimo de 5 y un máximo de 10 caracteres";
                            }
                            if (!values.password2) {
                                errors.password2 = "Se requiere confirmar la contraseña";
                            } else if (values.password !== values.password2) {
                                errors.password2 = "Las contraseñas deben coincidir";
                            }
                            return errors;
                        }}
                        onSubmit={handleSubmit}>
                        {(formik) => (
                            <Form className="form-recovery" onSubmit={formik.handleSubmit}>
                                <Form.Group className="mb-3 form-login">
                                    <Form.Label className="mt-2 pass block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                                        Ingrese una nueva contraseña
                                    </Form.Label>
                                    <Field
                                        type="password"
                                        name="password"
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-danger text-sm"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 form-login">
                                    <Form.Label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Confirme la contraseña
                                    </Form.Label>
                                    <Field
                                        type="password"
                                        name="password2"
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                    />
                                    <ErrorMessage
                                        name="password2"
                                        component="div"
                                        className="text-danger text-sm"
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn-recovery-password w-full text-sm py-2"
                                    disabled={formik.isSubmitting}>
                                    {isLoading ? (
                                        <div className="spinner-container">
                                            <Spinner animation="border" role="status" size="sm" />
                                        </div>
                                    ) : (
                                        <>Restablecer contraseña</>
                                    )}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </div>
    )
}
