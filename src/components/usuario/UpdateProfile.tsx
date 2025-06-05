import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import type { DatosUsurio } from "@/types/types";
import { Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { Toast } from "../Toast";
import type { DataUserUpdate } from "@/types/types";
import { updateProfile } from "@/services/user";
import { useToastStore } from "@/context/store.context";

const UpdateProfile = () => {
  const [data, setData] = useState<DatosUsurio | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { showToast } = useToastStore();

  useEffect(() => {
    const userSessionCookie = Cookies.get("user_sesion");
    if (userSessionCookie) {
      const userData = JSON.parse(userSessionCookie);
      setData(userData);
    }
  }, []);


  const handleSubmit = async (
    values: DataUserUpdate,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsLoading(true);
    if (data && data.email) {
      const response = await updateProfile(data.email, values);
      const { status } = response;
      if (response.status === 201) {
        resetForm();
        Cookies.set("user_sesion", JSON.stringify(response.data.user), {
          expires: 1,
          sameSite: "lax",
          secure: true,
        });
        showToast("Datos actulizados con exito", "success");
      } else if (status === 404 || status === 400) {
        showToast(
          "No su pudo actulziar la informacion, intanta de nuevo",
          "error"
        );
      } else if (status === 500) {
        showToast(
          "No su pudo actulziar la informacion, intanta mas tarde",
          "error"
        );
      }
    }
  };

  return (
    <>
      <Toast />
      <Formik
        initialValues={{ telefono: "", direccion: "" }}
        validate={(values: DataUserUpdate) => {
          const errors: Partial<DataUserUpdate> = {};
          if (!values.telefono) {
            errors.telefono = "¡Este campo no puede quedar vacio!";
          }
          if (!values.direccion) {
            errors.direccion = "¡Este campo no puede quedar vacio!";
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
                htmlFor="telefono"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese su telefono
              </label>
              <Field
                type="text"
                id="telefono"
                name="telefono"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="3245623236"
              />
              <ErrorMessage
                name="telefono"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese su direccion
              </label>
              <Field
                type="text"
                id="direccion"
                name="direccion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="calle 123 #456"
              />
              <ErrorMessage
                name="direccion"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 w-full hover:bg-blue-800 duration-200 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="spinner-container">
                {isLoading ? "Actualizando..." : "Actualizar datos"}
              </div>
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateProfile;
