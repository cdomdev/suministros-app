import { Google } from "../icons/Google"
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Toast } from "../Toast";
import { useState } from "react";
import { googleAuth } from "@/services/auth";
import Cookies from "js-cookie";

const clientId = import.meta.env.PUBLIC_CLIENT_ID;
interface FormInicioSesionProps {
    setShow: (show: boolean) => void;
}

export const GoogleAuth: React.FC<FormInicioSesionProps> = ({ setShow }) => {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <BtnLoguin setShow={setShow} />
        </GoogleOAuthProvider>
    )
}

const BtnLoguin: React.FC<FormInicioSesionProps> = ({ setShow }) => {
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    const googleInit = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const serverResponse = await googleAuth(response)
                if (serverResponse.status === 200) {
                    window.location.reload()
                    setShow(false)
                    const { data } = serverResponse
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
                        setToastMessage(`Algo salio mal con el inicio, intentalo de nuevo`)
                        setTimeout(() => {
                            setShowToast(false)
                        }, 5000)
                    } else if (status === 401) {
                        setBgToast('fail')
                        setShowToast(true)
                        setToastMessage(`Hubo un error en el inicio de sesion con tu cuenta, intentalo mas tarde`)
                        setTimeout(() => {
                            setShowToast(false)
                        }, 5000)
                    }
                } else {
                    setBgToast('fail')
                    setShowToast(true)
                    setToastMessage(`Algo salio mal, por favaor intentalo mas tarde`)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                }
            }

        }
    })
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
            <button onClick={() => googleInit()} className="border w-full flex rounded-md gap-1 font-normal  justify-center  items-center py-1 cursor-pointer mb-3 hover:bg-blue-500 duration-150 hover:text-white" >
                <span className="block bg-white rounded-full">
                    <Google />
                </span>
                <span className="text-xs md:text-sm">Iniciar sesion con google</span>
            </button>
        </>
    )
}