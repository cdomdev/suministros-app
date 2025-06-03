import { Formik, ErrorMessage, Field, Form } from "formik";
import { Success } from "./Success";
import { useEffect, useState } from "react";
import { CheckIcon } from "../icons/ChechIcon";
import { resetPassword } from "@/services/auth";
import type { ValuesPassWords } from "@/types/types";
import { useToastStore } from "@/context/store.context";
import { Spinner } from "../Spinner";
import { Toast } from "../Toast";

interface FormResetPasswordProps {
  token: string;
}

export const FormResetPassword = ({ token }: FormResetPasswordProps) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const { showToast } = useToastStore();

  useEffect(() => {
    const send = localStorage.getItem("processSucces");
    if (send) {
      const dataPerse = JSON.parse(send);
      setSuccess(dataPerse);
    }
  }, []);

  const handleSubmit = async (values: ValuesPassWords) => {
    setIsLoading(true);
    const response = await resetPassword({ values, token });
    const { status, details } = response;
    if (response && response.status === 200) {
      showToast("Se actualizo la contrasela con exito", "success")
      setSuccess(true);
      setIsLoading(false);
      localStorage.setItem("processSucces", JSON.stringify(true));
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
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toast />
      {success ? (
        <Success />
      ) : (
        <div className="">
          <h1 className="text-center mb-3 text-base md:text-lg">
            Solicitud para restablecer contraseña
          </h1>
          <h2 className="font-normal text-sm md:text-base mb-2">
            A continuación encontrará un formulario para restablecer su
            contraseña, para mejorar la segurida de su nueva contraseña, puede
            siguie las siguintes indicaciones
          </h2>
          <ul className="text-xs md:text-sm pl-3">
            <li className="flex gap-1 text-balance  items-center">
              <CheckIcon className="shrink-0  size-4 stroke-gray-500" />
              Ingrese una nueva contraseña
            </li>
            <li className="flex gap-1 text-balance items-center">
              <CheckIcon className="shrink-0 size-4 stroke-gray-500" />
              Confirme la contraseña
            </li>
            <li className="flex gap-1 text-balance items-center">
              <CheckIcon className="shrink-0 size-4 stroke-gray-500" />
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
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <>
                <Form className="form-recovery" onSubmit={formik.handleSubmit}>
                  <div className="mb-3 form-login">
                    <label className="mt-2 pass block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white ">
                      Ingrese una nueva contraseña
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger text-sm"
                    />
                  </div>

                  <div className="mb-3 form-login">
                    <label className="mt-2 block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                      Confirme la contraseña
                    </label>
                    <Field
                      type="password"
                      name="password2"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                    <ErrorMessage
                      name="password2"
                      component="div"
                      className="text-danger text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" w-full text-md py-2 bg-blue-700 hover:bg-blue-600 duration-200 text-white rounded-md "
                    disabled={formik.isSubmitting}
                  >
                    {isLoading ? (
                      <div className="inline-block">
                        <Spinner className="size-3" />
                      </div>
                    ) : (
                      <>Restablecer contraseña</>
                    )}
                  </button>
                </Form>
              </>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};
