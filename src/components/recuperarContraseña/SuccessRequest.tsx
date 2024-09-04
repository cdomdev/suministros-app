import { Spinner } from "react-bootstrap";
import { type DataForgotPassword } from "@/types/types";
import { useEffect } from "react";


const SuccessRequest = ({ nombre, email }: DataForgotPassword) => {

    useEffect(() => {
        let dataLocal = localStorage.getItem('infoProfileUSer')
    }, [])
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-2 font-text-base md:text-base text-center">¡Tu informacion ah sido valida con exito!</h1>
            <p className="text-xs md:text-sm font-normal text-pretty">
                Hola {nombre} en los proximos minutos enviaremos un correo a tu cuenta <strong>{email}</strong> con las instrucciones para ingresar una nueva contraseña
            </p>
            <a href="/" className="my-2 text-center hover:underline duration-150">Volver a la pagina de inicio</a>
        </div>
    );
};

export default SuccessRequest;
