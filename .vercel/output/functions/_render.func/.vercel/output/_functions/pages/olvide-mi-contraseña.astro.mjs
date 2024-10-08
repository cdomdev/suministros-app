/* empty css                                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Formik, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { T as Toast, s as sendRequestResettPassword, $ as $$Layout } from '../chunks/Layout_B7kJxfQl.mjs';
export { renderers } from '../renderers.mjs';

const SuccessRequest = ({ email }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-2 font-text-base md:text-base text-center text-green-600", children: "¡Tu informacion ah sido valida con exito!" }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs md:text-sm font-normal text-balance text-center", children: [
      "En los proximos minutos enviaremos un correo a tu cuenta ",
      /* @__PURE__ */ jsx("strong", { children: email }),
      " con las instrucciones para ingresar una nueva contraseña"
    ] }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "my-2 text-center hover:underline duration-150", children: "Volver a la pagina de inicio" })
  ] });
};

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  useEffect(() => {
    const dataSuccess = localStorage.getItem("isSuccessSend");
    if (dataSuccess) {
      let dataPase = JSON.parse(dataSuccess);
      setValue(dataPase);
    }
  }, []);
  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await sendRequestResettPassword(values);
      if (response && response.status === 200) {
        setValue(true);
        setData(response.data);
        localStorage.setItem("isSuccessSend", JSON.stringify(true));
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;
        if (status === 404) {
          setBgToast("fail");
          setShowToast(true);
          setToastMessage(`El email ${values.email} no esta registrado`);
          setTimeout(() => {
            setShowToast(false);
          }, 5e3);
        } else if (status === 401) {
          setBgToast("fail");
          setShowToast(true);
          setToastMessage(`Datos incorrectos, verifica tus datos eh intentalo de nuevo`);
          setTimeout(() => {
            setShowToast(false);
          }, 5e3);
        }
      }
      setBgToast("fail");
      setShowToast(true);
      setToastMessage(`algo salio mal, por favor intenlado mas tarde`);
      setTimeout(() => {
        setShowToast(false);
      }, 5e3);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Toast,
      {
        showToast,
        setShowToast,
        toastMessage,
        setToastMessage,
        bgToast,
        setBgToast
      }
    ),
    value ? /* @__PURE__ */ jsx(SuccessRequest, { email: data?.email, nombre: data?.nombre }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 font-normal text-base md:text-lg", children: "Solicitud para restablecer contraseña" }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs md:text-sm font-normal", children: [
        "Por motivos de seguridad, su clave olvidada debe ser reemplazada por una nueva. ",
        /* @__PURE__ */ jsx("br", {}),
        " Ingrese el correo con el que se registro en suministros"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-[56%]", children: /* @__PURE__ */ jsx(
        Formik,
        {
          initialValues: {
            email: ""
          },
          validate: (values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "*Este campo no puede quedar vacio*";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
              errors.email = "Ingrese un correo electrónico válido";
            }
            return errors;
          },
          onSubmit: handleSubmit,
          children: (formik) => /* @__PURE__ */ jsxs(Form, { className: "form-recovery", onSubmit: formik.handleSubmit, children: [
            /* @__PURE__ */ jsxs(Form.Group, { className: "mb-3 form-login", children: [
              /* @__PURE__ */ jsx(Form.Label, { className: "block my-2  text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Ingrese su correo electrónico ∗" }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  type: "email",
                  name: "email",
                  placeholder: "Email@example.com",
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "email",
                  component: "div",
                  className: "text-danger text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                type: "submit",
                className: "btn-recovery-password w-full text-xs md:text-sm py-2",
                disabled: formik.isSubmitting,
                children: isLoading ? /* @__PURE__ */ jsx("div", { className: "spinner-container", children: /* @__PURE__ */ jsx(Spinner, { animation: "border", role: "status", size: "sm" }) }) : /* @__PURE__ */ jsx(Fragment, { children: "Enviar solicitud para restablecer contraseña" })
              }
            )
          ] })
        }
      ) })
    ] })
  ] });
};

const $$OlvideMiContrasea = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recuperar contrase\xF1a" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 bg-[#f4f4f4] font-font-cust-2"> <div class="bg-white md:w-[70%] mx-auto flex flex-col justify-center items-center p-4"> ${renderComponent($$result2, "ForgotPassword", ForgotPassword, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/auth/ForgotPassword", "client:component-export": "default" })} </div> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/Olvide-mi-contrase\xF1a.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/Olvide-mi-contraseña.astro";
const $$url = "/Olvide-mi-contraseña";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$OlvideMiContrasea,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
