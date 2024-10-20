import { Formik, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import SuccessRequest from "../recuperarContraseña/SuccessRequest";
import axios from "axios";
import { Toast } from "../Toast";
import { type DataForgotPassword } from "@/types/types";
import { sendRequestResettPassword } from "@/services/auth";

interface ValuesForgotPassword {
    email: string,
}

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [value, setValue] = useState<boolean>()
    const [data, setData] = useState<DataForgotPassword>()
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    useEffect(() => {
        const dataSuccess = localStorage.getItem('isSuccessSend')
        if (dataSuccess) {
            let dataPase = JSON.parse(dataSuccess)
            setValue(dataPase)
        }
    }, [])

    const handleSubmit = async (values: ValuesForgotPassword) => {
        setIsLoading(true);
        try {
            const response = await sendRequestResettPassword(values)
            if (response && response.status === 200) {
                setValue(true);
                setData(response.data);
                localStorage.setItem('isSuccessSend', JSON.stringify(true))
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { status } = error.response;
                if (status === 400) {
                    setBgToast('fail')
                    setShowToast(true)
                    setToastMessage(`El email ${values.email} no esta registrado`)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                } else if (status === 401) {
                    setBgToast('fail')
                    setShowToast(true)
                    setToastMessage(`Datos incorrectos, verifica tus datos eh intentalo de nuevo`)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                }
            }
            setBgToast('fail')
            setShowToast(true)
            setToastMessage(`Algo salio mal, por favor intenlado mas tarde`)
            setTimeout(() => {
                setShowToast(false)
            }, 5000)

        } finally {
            setIsLoading(false);
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
            {
                value ? (
                    <SuccessRequest email={data?.email} nombre={data?.nombre} />
                ) : (
                    <>
                        <h1 className="mb-3 font-normal md:text-lg">
                            Solicitud para restablecer contraseña
                        </h1>
                        <p className="text-xs md:text-base text-balance font-normal text-left mb-3">
                            Por motivos de seguridad, su clave olvidada debe ser reemplazada
                            por una nueva. <br />Ingrese el correo con el que se registro en
                            suministros
                        </p>
                        <div className="w-full md:w-[56%]">
                            <Formik
                                initialValues={{
                                    email: "",
                                }}
                                validate={(values: ValuesForgotPassword) => {
                                    const errors: Partial<ValuesForgotPassword> = {};
                                    if (!values.email) {
                                        errors.email = "*Este campo no puede quedar vacio*";
                                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                                        errors.email = "Ingrese un correo electrónico válido";
                                    }
                                    return errors;
                                }}
                                onSubmit={handleSubmit}>
                                {(formik) => (
                                    <Form className="form-recovery" onSubmit={formik.handleSubmit}>
                                        <Form.Group className="mb-3 form-login">
                                            <Form.Label className="block my-2  text-xs md:text-base font-medium text-gray-900 dark:text-white">
                                                Ingrese su correo electrónico ∗
                                            </Form.Label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Email@example.com"
                                                className='bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger text-sm"
                                            />
                                        </Form.Group>

                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="btn-recovery-password w-full text-xs md:text-base py-2"
                                            disabled={formik.isSubmitting}>
                                            {isLoading ? (
                                                <div className="spinner-container">
                                                    <Spinner animation="border" role="status" size="sm" />
                                                </div>
                                            ) : (
                                                <>Enviar solicitud para restablecer contraseña</>
                                            )}
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default ForgotPassword