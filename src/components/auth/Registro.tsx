import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { ValuesRegistro } from "@/types/types";
import { register } from "@/services/auth";
import { eventAuth } from "@/events/eventAuth";
import { useToastStore } from "@/context/store.context";
import { Spinner } from "../Spinner";
import { Toast } from "../Toast";

const Registro: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { showToast } = useToastStore();

  const handleSubmit = async (
    values: ValuesRegistro,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsLoading(true);
    const response = await register(values);
    const { status, details } = response;
    if (response.status === 201) {
      resetForm();
      setIsLoading(false);
      eventAuth.emit("authChange", true);
      sessionStorage.setItem("infoProfileUSer", JSON.stringify(response.data));
      showToast(
        `Tu registro fue exitoso, ya puedes iniciar sesion en suministros`,
        "success"
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } else if (
      status === 409 ||
      status == 404 ||
      status === 400 ||
      status === 401
    ) {
      showToast(`${details.message}`, "error");
      setIsLoading(false);
    } else if (status === 500) {
      showToast(
        `Hola ${values.nombre} tuvimos un error al intentar realizar tu registro, intentalo de mas tarde`,
        "error"
      );
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toast />
      <Formik
        initialValues={{ nombre: "", email: "", password: "" }}
        validate={(values: ValuesRegistro) => {
          const errors: Partial<ValuesRegistro> = {};
          if (!values.nombre) {
            errors.nombre = "¡Este campo no puede quedar vacio!";
          }
          if (!values.email) {
            errors.email = "¡Este campo no puede quedar vacio!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Ingrese una dirección de correo válida";
          }
          if (!values.password) {
            errors.password = "¡Este campo no puede quedar vacio!";
          } else if (
            !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,10}$/.test(values.password)
          ) {
            errors.password =
              "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener un máximo de 10 caracteres";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) =>
          handleSubmit(values, { resetForm })
        }
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="nombre"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese su nombre
              </label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="example"
              />
              <ErrorMessage
                name="nombre"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

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
            <div className="mb-3">
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Registre su contraseña
                </label>
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
            <div className="bg-[#f4f4f4f4] text-sm  font-medium leading-4 p-2 mb-3">
              <p className="pt-2 mb-1">Tenga en cuanta lo siguiente:</p>
              <ul className="text-xs pl-7">
                <li className=" list-disc">
                  La contraseña debe contener al menos una mayúscula
                </li>
                <li className=" list-disc">
                  La contraseña debe contener al menos una minuiscula
                </li>
                <li className=" list-disc">
                  La contraseña debe contener al menos un numero
                </li>
                <li className=" list-disc">
                  La contraseña debe tener un minimo de 5 caracteres y un maximo
                  de 10
                </li>
              </ul>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 w-full hover:bg-blue-800 duration-200 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? (
                <div className="inline-block">
                  <Spinner className="size-3" />
                </div>
              ) : (
                <>Registarme</>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Registro;
