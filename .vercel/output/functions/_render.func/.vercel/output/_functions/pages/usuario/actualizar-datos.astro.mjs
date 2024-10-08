/* empty css                                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$Back } from '../../chunks/Back_Cr5GMpJH.mjs';
import { $ as $$UsuarioLayout } from '../../chunks/UsuarioLayout_q0IYpoBT.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Form } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import { T as Toast, u as updateProfile } from '../../chunks/Layout_B7kJxfQl.mjs';
export { renderers } from '../../renderers.mjs';

const UpdateProfile = () => {
  const [data, setData] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  useEffect(() => {
    const userSessionCookie = Cookies.get("user_sesion");
    if (userSessionCookie) {
      const userData = JSON.parse(userSessionCookie);
      setData(userData);
    }
  }, []);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (data && data.email) {
        const response = await updateProfile(data.email, values);
        if (response.status === 200) {
          resetForm();
        }
      }
    } catch (error) {
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
    /* @__PURE__ */ jsx(
      Formik,
      {
        initialValues: { nombre: "", telefono: "", direccion: "" },
        validate: (values) => {
          const errors = {};
          if (!values.nombre) {
            errors.nombre = "¡Este campo quedara con su nombre actual!";
          }
          if (!values.telefono) {
            errors.telefono = "¡Este campo no puede quedar vacio!";
          }
          if (!values.direccion) {
            errors.direccion = "¡Este campo no puede quedar vacio!";
          }
          return errors;
        },
        onSubmit: (values, { resetForm }) => handleSubmit(values, { resetForm }),
        children: ({ handleSubmit: handleSubmit2 }) => /* @__PURE__ */ jsxs(Form, { onSubmit: handleSubmit2, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "nombre",
                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: "Ingrese su nombre"
              }
            ),
            /* @__PURE__ */ jsx(
              Field,
              {
                type: "text",
                id: "nombre",
                name: "nombre",
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                placeholder: "Si este campo no se modifica quedara con su valor actual"
              }
            ),
            /* @__PURE__ */ jsx(
              ErrorMessage,
              {
                name: "nombre",
                component: "div",
                className: "text-red-500 text-sm mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "telefono",
                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: "Ingrese su telefono"
              }
            ),
            /* @__PURE__ */ jsx(
              Field,
              {
                type: "text",
                id: "telefono",
                name: "telefono",
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                placeholder: "3245623236"
              }
            ),
            /* @__PURE__ */ jsx(
              ErrorMessage,
              {
                name: "telefono",
                component: "div",
                className: "text-red-500 text-sm mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "email",
                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: "Ingrese su direccion"
              }
            ),
            /* @__PURE__ */ jsx(
              Field,
              {
                type: "text",
                id: "direccion",
                name: "direccion",
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                placeholder: "calle 123 #456"
              }
            ),
            /* @__PURE__ */ jsx(
              ErrorMessage,
              {
                name: "direccion",
                component: "div",
                className: "text-red-500 text-sm mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "text-white bg-blue-700 w-full hover:bg-blue-800 duration-200 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              children: /* @__PURE__ */ jsx("div", { className: "spinner-container", children: "Actulizar perfel" })
            }
          )
        ] })
      }
    )
  ] });
};

const $$ActualizarDatos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "UsuarioLayout", $$UsuarioLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="font-semibold mt-14 mb-10 text-lg">
Actulziar datos de mi perfil
</h1> <a href="/usuario/perfil" class="flex items-center my-2 font-semibold hover:text-gray-500">${renderComponent($$result2, "Back", $$Back, {})} Atras</a> <div class="w-[70%] mx-auto"> ${renderComponent($$result2, "UpdateProfile", UpdateProfile, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/usuario/UpdateProfile", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/usuario/actualizar-datos.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/usuario/actualizar-datos.astro";
const $$url = "/usuario/actualizar-datos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ActualizarDatos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
