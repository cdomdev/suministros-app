import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { ValuesIniSesion } from "@/types/types";
import { validaSesion } from "@/services/auth";
import Cookies from "js-cookie";
import { useToastStore } from "@/context/store.context";
import { Spinner } from "../Spinner";
import { Toast } from "../Toast";

interface FormInicioSesionProps {
  setShow: (show: boolean) => void;
}

const InitSesion: React.FC<FormInicioSesionProps> = ({ setShow }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { showToast } = useToastStore();

  const handleSubmit = async (values: ValuesIniSesion) => {
    setIsLoading(true);
    try {
      const response = await validaSesion(values);

      console.log(response)

      const { status, details } = response;
      if (response.status === 200) {
        setShow(false);
        window.location.reload();
        const { data } = response;
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
      } else if (
        status === 404 ||
        status === 403 ||
        status === 401 ||
        status === 400
      ) {
        showToast(`${details.message}`, "error");
      } else if (status === 500) {
        showToast(
          `Ocurrio un error interno, por favor intente mas tarde`,
          "error"
        );
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Toast/>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values: ValuesIniSesion) => {
          const errors: Partial<ValuesIniSesion> = {};
          if (!values.email) {
            errors.email = "¡Este campo no puede quedar vacio!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Ingrese una dirección de correo válida";
          }
          if (!values.password) {
            errors.password = "¡Este campo no puede quedar vacio!";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="text-left">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese su correo
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="example@sumi.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ingrese su contraseña
                </label>
                <a
                  href="/olvide-mi-contraseña"
                  className="text-blue-700 hover:underline duration-150 text-sm flex justify-end px-1"
                >
                  Olvidé mi contraseña
                </a>
              </div>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="text-white text-xs md:text-sm bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? (
                <div className="inline-block">
                  <Spinner className="size-3" />
                </div>
              ) : (
                <>Iniciar sesión</>
              )}
            </button>
            <div className="w-full flex gap-2 items-center text-xs md:text-sm">
              <p className="py-2">¿No tienes cuenta?</p>
              <a
                href="/registro"
                className="underline hover:text-blue-500 duration-150"
              >
                Regístrate aquí
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InitSesion;
