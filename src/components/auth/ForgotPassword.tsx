import { Formik, Field, ErrorMessage, Form } from "formik";
import { useEffect, useState } from "react";
import SuccessRequest from "./SuccessRequest";
import { type DataForgotPassword } from "@/types/types";
import { sendRequestResettPassword } from "@/services/auth";
import { useToastStore } from "@/context/store.context";
import { Spinner } from "../Spinner";
import { Toast } from "../Toast";
import Cookies from "js-cookie";

interface ValuesForgotPassword {
  email: string;
}

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<boolean>();
  const [data, setData] = useState<DataForgotPassword>();

  const { showToast } = useToastStore();

  useEffect(() => {
    const dataSuccess = Cookies.get("isSuccessSend");

    if (dataSuccess) {
      let dataPase = JSON.parse(dataSuccess);
      setValue(dataPase);
    }
  }, []);

  const handleSubmit = async (values: ValuesForgotPassword) => {
    setIsLoading(true);
    const response = await sendRequestResettPassword(values);
    const { status, details } = response;
    if (response && response.status === 200) {
      setIsLoading(false);
      setValue(true);
      showToast(
        "Tu informacion se valido con exito,a tu correo se envio un formulario par restablecer tu contraseña",
        "success"
      );
      setData(response.data);
      Cookies.set("isSuccessSend", JSON.stringify(true), {
        expires: 1,
        sameSite: "lax",
        secure: true,
      });
    } else if (
      status === 400 ||
      status === 401 ||
      status === 403 ||
      status === 404
    ) {
      setIsLoading(false);
      showToast(`${details.message}`, "error");
    } else if (status === 500) {
      showToast(`${details.message}`, "error");
    }
  };

  return (
    <>
      <Toast />
      {value ? (
        <SuccessRequest email={data?.email} nombre={data?.nombre} />
      ) : (
        <>
          <h1 className="mb-3 font-normal md:text-lg">
            Solicitud para restablecer contraseña
          </h1>
          <p className="text-xs md:text-base text-balance font-normal text-left mb-3">
            Por motivos de seguridad, su clave olvidada debe ser reemplazada por
            una nueva. <br />
            Ingrese el correo con el que se registro en suministros
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
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="form-recovery" onSubmit={formik.handleSubmit}>
                  <div className="mb-3 form-login">
                    <label className="block my-2  text-xs md:text-base font-medium text-gray-900 dark:text-white">
                      Ingrese su correo electrónico ∗
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email@example.com"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-600 duration-150 rounded-lg text-white w-full text-xs md:text-base py-2"
                    disabled={formik.isSubmitting}
                  >
                    {isLoading ? (
                      <div className="inline-block">
                        <Spinner className="size-4" />
                      </div>
                    ) : (
                      <>Enviar solicitud para restablecer contraseña</>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
