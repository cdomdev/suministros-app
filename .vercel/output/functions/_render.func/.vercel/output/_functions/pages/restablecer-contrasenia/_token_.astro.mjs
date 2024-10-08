/* empty css                                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Formik, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { T as Toast, a as resetPassword, $ as $$Layout } from '../../chunks/Layout_B7kJxfQl.mjs';
import axios from 'axios';
export { renderers } from '../../renderers.mjs';

const Success = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-circle-check size-14", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#00b341", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
      /* @__PURE__ */ jsx("path", { d: "M9 12l2 2l4 -4" })
    ] }) }),
    /* @__PURE__ */ jsx("h1", { className: "text-base font-normal", children: "Tu contraseña se actuilizo con exito, ya puedes iniciar sesion en Suministros" }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "mt-4  text-center px-10 py-2  rounded-md hover:underline", children: "Regresar al inicio" })
  ] });
};

const Check = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-check size-4",
      width: "44",
      height: "44",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "#00b341",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M5 12l5 5l10 -10" })
      ]
    }
  );
};

const FormResetPassword = ({ token }) => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  useEffect(() => {
    const send = localStorage.getItem("processSucces");
    if (send) {
      const dataPerse = JSON.parse(send);
      setSuccess(dataPerse);
    }
  }, []);
  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await resetPassword({ values, token });
      if (response && response.status === 200) {
        setSuccess(true);
        localStorage.setItem("processSucces", JSON.stringify(true));
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;
        switch (status) {
          case 401:
            setToastMessage("No pudimos hacer esto, intenta de nuevo.");
            break;
          case 400:
            setToastMessage('El token ha expirado. Solicita un nuevo cambio desde la sección "Olvidé mi contraseña".');
            break;
          default:
            setToastMessage("Ocurrió un error. Por favor, intenta más tarde.");
            break;
        }
      }
      setBgToast("fail");
      setShowToast(true);
      setToastMessage("Ocurrió un error. Por favor, intenta más tarde.");
      setTimeout(() => setShowToast(false), 5e3);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "font-font-cust-2", children: [
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
    success ? /* @__PURE__ */ jsx(Success, {}) : /* @__PURE__ */ jsxs("div", { className: "container-recovery", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center mb-3 text-base md:text-lg", children: "Solicitud para restablecer contraseña" }),
      /* @__PURE__ */ jsx("h2", { className: "font-normal text-sm md:text-base mb-2", children: "A continuación encontrará un formulario para restablecer su contraseña, por favor siga las indicaciones" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-sm pl-3", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx(Check, {}),
          "Ingrese una nueva contraseña"
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx(Check, {}),
          "Confirme la contraseña"
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx(Check, {}),
          "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener un minimo de 5 y un máximo de 10 caracteres"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Formik,
        {
          initialValues: {
            password: "",
            password2: ""
          },
          validate: (values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "Se requiere una contraseña";
            } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,10}$/.test(values.password)) {
              errors.password = "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener un minimo de 5 y un máximo de 10 caracteres";
            }
            if (!values.password2) {
              errors.password2 = "Se requiere confirmar la contraseña";
            } else if (values.password !== values.password2) {
              errors.password2 = "Las contraseñas deben coincidir";
            }
            return errors;
          },
          onSubmit: handleSubmit,
          children: (formik) => /* @__PURE__ */ jsxs(Form, { className: "form-recovery", onSubmit: formik.handleSubmit, children: [
            /* @__PURE__ */ jsxs(Form.Group, { className: "mb-3 form-login", children: [
              /* @__PURE__ */ jsx(Form.Label, { className: "mt-2 pass block mb-2 text-sm font-medium text-gray-900 dark:text-white ", children: "Ingrese una nueva contraseña" }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  type: "password",
                  name: "password",
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "password",
                  component: "div",
                  className: "text-danger text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Form.Group, { className: "mb-3 form-login", children: [
              /* @__PURE__ */ jsx(Form.Label, { className: "mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Confirme la contraseña" }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  type: "password",
                  name: "password2",
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "password2",
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
                className: "btn-recovery-password w-full text-sm py-2",
                disabled: formik.isSubmitting,
                children: isLoading ? /* @__PURE__ */ jsx("div", { className: "spinner-container", children: /* @__PURE__ */ jsx(Spinner, { animation: "border", role: "status", size: "sm" }) }) : /* @__PURE__ */ jsx(Fragment, { children: "Restablecer contraseña" })
              }
            )
          ] })
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro();
const $$token = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$token;
  const { token } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ingrese su nueva contrase\xF1a" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 bg-[#f4f4f4]"> <div class="bg-white md:w-[70%] mx-auto flex flex-col justify-center items-center p-4"> ${renderComponent($$result2, "FormResetPassword", FormResetPassword, { "client:visible": true, "token": token || "", "client:component-hydration": "visible", "client:component-path": "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/auth/ResetPassword", "client:component-export": "FormResetPassword" })} </div> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/restablecer-contrasenia/[token].astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/restablecer-contrasenia/[token].astro";
const $$url = "/restablecer-contrasenia/[token]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$token,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
