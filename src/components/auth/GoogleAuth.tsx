import { Google } from "../icons/Google";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "@/services/auth";
import Cookies from "js-cookie";
import { useToastStore } from "@/context/store.context";
import { Toast } from "../Toast";

const clientId = import.meta.env.PUBLIC_CLIENT_ID;
interface FormInicioSesionProps {
  setShow: (show: boolean) => void;
}

export const GoogleAuth: React.FC<FormInicioSesionProps> = ({ setShow }) => {
  return (
    <>
      <Toast />
      <GoogleOAuthProvider clientId={clientId}>
        <BtnLoguin setShow={setShow} />
      </GoogleOAuthProvider>
    </>
  );
};

const BtnLoguin: React.FC<FormInicioSesionProps> = ({ setShow }) => {
  const { showToast } = useToastStore();

  const googleInit = useGoogleLogin({
    onSuccess: async (response) => {
      const serverResponse = await googleAuth(response);
      const { status, data } = serverResponse;
      if (serverResponse.status === 200) {
        window.location.reload();
        setShow(false);
        const { data } = serverResponse;
        const { accessToken, userSessionData } = data;
        Cookies.set("access_token", accessToken, {
          expires: 1,
          sameSite: "lax",
          secure: true,
        });
        Cookies.set("user_sesion", JSON.stringify(userSessionData), {
          expires: 1,
          sameSite: "lax",
          secure: true,
        });
        localStorage.setItem(
          "infoProfileUSer",
          JSON.stringify(userSessionData)
        );
      } else if (
        status === 404 ||
        status === 403 ||
        status === 401 ||
        status === 400
      ) {
        showToast(
          `Algo salio mal con el inicio de sesion, pr favor intentalo de nuevo`,
          "error"
        );
      } else if (status === 500) {
        showToast(
          `Ocurrio un error interno, por favor intente mas tarde`,
          "error"
        );
      }
    },
  });
  return (
    <>
      <button
        onClick={() => googleInit()}
        className="border w-full flex rounded-md gap-1 font-normal  justify-center  items-center py-1 cursor-pointer mb-3 hover:bg-blue-500 duration-150 hover:text-white"
      >
        <span className="block bg-white rounded-full">
          <Google />
        </span>
        <span className="text-xs md:text-sm">Iniciar sesion con google</span>
      </button>
    </>
  );
};
