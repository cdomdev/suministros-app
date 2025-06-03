import { type DataForgotPassword } from "@/types/types";

const SuccessRequest = ({ email }: DataForgotPassword) => {
  const removeData = () => {
    localStorage.removeItem("isSuccessSend");
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-base text-center font-semibold mb-4">
        ¡Tu informacion ah sido valida con exito!
      </h1>
      <p className="text-xs md:text-sm font-normal text-balance text-center mb-3">
        En los proximos minutos enviaremos un correo a tu cuenta{" "}
        <strong>{email}</strong> con las instrucciones para que puedas crear una
        nueva contraseña
      </p>
      <p className="text-xs md:text-sm  text-balance text-center mb-7 font-semibold">
        Revisa también tu bandeja de spam o correo no deseado. Asegúrate de no
        perderte nuestra respuesta.
      </p>

      <button
        onClick={removeData}
        className="my-2 text-center  bg-blue-700 hover:bg-blue-600 duration-200 text-white w-fit px-20 py-2 rounded-md"
      >
        Volver a la pagina de inicio
      </button>
    </div>
  );
};

export default SuccessRequest;
