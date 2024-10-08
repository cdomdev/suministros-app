/* empty css                                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { T as Toast, r as register, $ as $$Layout } from '../chunks/Layout_B7kJxfQl.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'clsx';
export { renderers } from '../renderers.mjs';

class EventEmitter {
  events = {};
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventCallback) => eventCallback !== callback
      );
    };
  }
  emit(eventName, data) {
    const callbacks = this.events[eventName] || [];
    callbacks.forEach((callback) => {
      if (typeof callback === "function") {
        callback(data);
      }
    });
  }
}
const eventAuth = new EventEmitter();

const Registro = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await register(values);
      console.log(response);
      if (response.status === 201) {
        setShowToast(true);
        setBgToast("toast-success");
        setToastMessage(`Tu registro fue exitoso, ya puedes iniciar sesion en suministros`);
        resetForm();
        setTimeout(() => {
          setShowToast(false);
        }, 1e4);
        eventAuth.emit("authChange", true);
        localStorage.setItem("infoProfileUSer", JSON.stringify(response.data));
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;
        console.log(status);
        if (status === 409) {
          setBgToast("fail");
          setShowToast(true);
          setToastMessage(`El email ${values.email} ya tiene una cuenta registrada`);
          setTimeout(() => {
            setShowToast(false);
          }, 5e3);
        } else if (status === 500) {
          setBgToast("fail");
          setShowToast(true);
          setToastMessage(`Hola ${values.nombre} no pudimos hacer tu registro, intentalo de nuevo`);
          setTimeout(() => {
            setShowToast(false);
          }, 5e3);
        }
      }
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
    /* @__PURE__ */ jsx(
      Formik,
      {
        initialValues: { nombre: "", email: "", password: "" },
        validate: (values) => {
          const errors = {};
          if (!values.nombre) {
            errors.nombre = "¡Este campo no puede quedar vacio!";
          }
          if (!values.email) {
            errors.email = "¡Este campo no puede quedar vacio!";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Ingrese una dirección de correo válida";
          }
          if (!values.password) {
            errors.password = "¡Este campo no puede quedar vacio!";
          } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,10}$/.test(values.password)) {
            errors.password = "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener un máximo de 10 caracteres";
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
                placeholder: "example"
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
                htmlFor: "email",
                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: "Ingrese su correo"
              }
            ),
            /* @__PURE__ */ jsx(
              Field,
              {
                type: "email",
                id: "email",
                name: "email",
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                placeholder: "example@sumi.com"
              }
            ),
            /* @__PURE__ */ jsx(
              ErrorMessage,
              {
                name: "email",
                component: "div",
                className: "text-red-500 text-sm mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-between mb-2", children: /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "password",
                className: "block text-sm font-medium text-gray-900 dark:text-white",
                children: "Registre su contraseña"
              }
            ) }),
            /* @__PURE__ */ jsx(
              Field,
              {
                type: "password",
                id: "password",
                name: "password",
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              }
            ),
            /* @__PURE__ */ jsx(
              ErrorMessage,
              {
                name: "password",
                component: "div",
                className: "text-red-500 text-sm mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f4f4f4f4] text-sm  font-medium leading-4 p-2 mb-3", children: [
            /* @__PURE__ */ jsx("p", { className: "pt-2 mb-1", children: "Tenga en cuanta lo siguiente:" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs pl-7", children: [
              /* @__PURE__ */ jsx("li", { className: " list-disc", children: "La contraseña debe contener al menos una mayúscula" }),
              /* @__PURE__ */ jsx("li", { className: " list-disc", children: "La contraseña debe contener al menos una minuiscula" }),
              /* @__PURE__ */ jsx("li", { className: " list-disc", children: "La contraseña debe contener al menos un numero" }),
              /* @__PURE__ */ jsx("li", { className: " list-disc", children: "La contraseña debe tener un minimo de 5 caracteres y un maximo de 10" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "text-white bg-blue-700 w-full hover:bg-blue-800 duration-200 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              children: isLoading ? /* @__PURE__ */ jsx("div", { className: "spinner-container", children: /* @__PURE__ */ jsx(Spinner, { animation: "border", role: "status", size: "sm" }) }) : /* @__PURE__ */ jsx(Fragment, { children: "Registarme" })
            }
          )
        ] })
      }
    )
  ] });
};

const $$Check = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check size-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/icons/Check.astro", void 0);

const $$Registro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-16 bg-[#f4f4f4] min-h-screen mb-0 font-font-cust-2"> <div class="bg-white md:w-[70%] mx-auto flex flex-col justify-center items-center p-4"> <h1 class="mb-4 font-normal text-base md:text-lg">
Ingrese sus datos para el registro
</h1> <div class="w-full flex flex-col md:grid grid-cols-col-cust-4"> ${renderComponent($$result2, "FormRegistro", Registro, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/auth/Registro", "client:component-export": "default" })} <div class="p-4"> <h2 class="text-sm md:text-base font-normal mb-1">
Beneficios de tener tu cuenta
</h2> <p class="text-xs md:text-sm mb-1">
Mejora tu experiencia a la hora de hacer tu compra
</p> <ul class="pl-3"> <li class="flex text-sm items-center gap-1"> ${renderComponent($$result2, "Check", $$Check, {})}
Realiza seguimiuento de tus compras
</li> <li class="flex text-sm items-center gap-1"> ${renderComponent($$result2, "Check", $$Check, {})}
Guarda y actuliza tus datos
</li> <li class="flex text-sm items-center gap-1"> ${renderComponent($$result2, "Check", $$Check, {})}
Paga rapido y facil
</li> </ul> </div> </div> </div> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/registro.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/registro.astro";
const $$url = "/registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Registro,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
