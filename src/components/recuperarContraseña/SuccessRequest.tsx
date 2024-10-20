import { type DataForgotPassword } from "@/types/types";

const SuccessRequest = ({ email }: DataForgotPassword) => {

    const removeData = () => {
        localStorage.removeItem('isSuccessSend');
        window.location.href = '/'
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-2 font-text-base md:text-base text-center text-green-600">¡Tu informacion ah sido valida con exito!</h1>
            <p className="text-xs md:text-sm font-normal text-balance text-center">
                En los proximos minutos enviaremos un correo a tu cuenta <strong>{email}</strong> con las instrucciones para que puedas crear una nueva contraseña
            </p>
            <button onClick={removeData} className="my-2 text-center hover:underline duration-150">Volver a la pagina de inicio</button>
        </div>
    );
};

export default SuccessRequest;
