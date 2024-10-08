/* empty css                                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B7kJxfQl.mjs';
import { U as UpdateSteps, S as Summary } from '../chunks/UpdateSteps_o2-iX8Y0.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
export { renderers } from '../renderers.mjs';

const FormEnvioDatosInvitado = () => {
  const handleSubmit = async (values) => {
    localStorage.setItem("dataUserForBuy", JSON.stringify(values));
  };
  return /* @__PURE__ */ jsx(
    Formik,
    {
      initialValues: {
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        telefono: "",
        destino: "",
        detalles: ""
      },
      validate: (values) => {
        const errors = {};
        if (!values.nombre) {
          errors.nombre = "*El campo no puede quedar vacio*";
        }
        if (!values.direccion) {
          errors.direccion = "*El campo no puede quedar vacio*";
        }
        if (!values.destino) {
          errors.destino = "*Debe seleccionar una opcion*";
        }
        if (!values.email) {
          errors.email = "*El campo no puede quedar vacio*";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
          errors.email = "*Ingrese un correo electrónico válido*";
        }
        if (!values.telefono) {
          errors.telefono = "*El campo no puede quedar vacio*";
        } else if (values.telefono.length < 10) {
          errors.telefono = "*Ingrese un numero de telefono valido*";
        }
        return errors;
      },
      onSubmit: handleSubmit,
      children: (formik) => /* @__PURE__ */ jsxs("div", { className: "font-font-cust-2", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 font-normal leading-5 text-sm md:text-base", children: "Ingrese los datos en el formulario para el envio de su compra, los datos marcados con (*) son obligatorios" }),
        /* @__PURE__ */ jsxs(Form, { onSubmit: formik.handleSubmit, children: [
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Ingrese su nombre   ∗" }),
            /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                type: "text",
                name: "nombre",
                placeholder: "example",
                value: formik.values.nombre,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.nombre && formik.errors.nombre ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.nombre }) : null
          ] }),
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Ingrese su apellido" }),
            /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                type: "text",
                name: "apellido",
                placeholder: "opciona",
                value: formik.values.apellido,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Ingrese su correo electronico  ∗" }),
            /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                type: "text",
                placeholder: "example@sumi.com",
                name: "email",
                value: formik.values.email,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.email && formik.errors.email ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.email }) : null
          ] }),
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Seleccione un destino para su pedido  ∗" }),
            /* @__PURE__ */ jsxs(
              Form.Select,
              {
                className: "bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                name: "destino",
                value: formik.values?.destino,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Seleccione un destino" }),
                  /* @__PURE__ */ jsx("option", { value: "1", children: "Bogota - Municipios aledaños" }),
                  /* @__PURE__ */ jsx("option", { value: "2", children: "Otros destinos nacionales" })
                ]
              }
            ),
            formik.touched.destino && formik.errors.destino ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.destino }) : null
          ] }),
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Ingrese su dirección  ∗" }),
            /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                type: "text",
                placeholder: "calle 123 # 45-67",
                name: "direccion",
                value: formik.values.direccion,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.direccion && formik.errors.direccion ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.direccion }) : null
          ] }),
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Ingrese un numero de teléfono  ∗" }),
            /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                type: "number",
                name: "telefono",
                placeholder: "123456789",
                value: formik.values.telefono,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.telefono && formik.errors.telefono ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.telefono }) : null
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Detalle adicionales" }),
            /* @__PURE__ */ jsx(Form.Group, { controlId: "exampleForm.ControlTextarea1", children: /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                as: "textarea",
                rows: 3,
                placeholder: "Conjunto residencial sumi, torre 9, apartamento 123",
                name: "detalles",
                value: formik.values?.detalles,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            UpdateSteps,
            {
              ruta: "/pago",
              bg: "bg-primary",
              textColor: "text-white",
              textContent: "Continuar",
              type: "submit",
              disabled: formik.isSubmitting
            }
          )
        ] })
      ] })
    }
  );
};

const ModalEnvioInvitado = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: handleShow, className: "bg-blue-600 w-full md:w-[30%] mx-auto text-xs md:text-sm p-2 rounded-md text-white hover:bg-blue-500 duration-200", children: "Ingresar datos" }),
    show && /* @__PURE__ */ jsx("div", { id: "box-backdrop", className: "fixed inset-0 bg-gray-900/50 z-40" }),
    /* @__PURE__ */ jsxs(
      Modal,
      {
        show,
        onHide: handleClose,
        children: [
          /* @__PURE__ */ jsx(Modal.Header, { closeButton: true, className: "border-none px-4 pt-4 pb-1" }),
          /* @__PURE__ */ jsx("div", { className: "font-font-cust-2 p-2", children: /* @__PURE__ */ jsx(Modal.Body, { className: "pt-0", children: /* @__PURE__ */ jsx(FormEnvioDatosInvitado, {}) }) })
        ]
      }
    )
  ] });
};

const FormEnvioDatosUsuario = () => {
  const handleSubmit = async (values) => {
    localStorage.setItem("dataUserForBuy", JSON.stringify(values));
  };
  return /* @__PURE__ */ jsx(
    Formik,
    {
      initialValues: {
        telefono: "",
        direccion: "",
        destino: "",
        detalles: ""
      },
      validate: (values) => {
        const errors = {};
        if (!values.direccion) {
          errors.direccion = "*El campo no puede quedar vacio*";
        }
        if (!values.destino) {
          errors.destino = "*Debe seleccionar una opcion*";
        }
        if (!values.telefono) {
          errors.telefono = "*El campo no puede quedar vacio*";
        }
        return errors;
      },
      onSubmit: handleSubmit,
      children: (formik) => /* @__PURE__ */ jsxs("div", { className: "font-font-cust-2", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-2 font-normal text-sm md:text-base", children: [
          "Ingrese los datos en el formulario para el envio de su compra, los datos marcados con (",
          /* @__PURE__ */ jsx("strong", { className: "text-base", children: "∗" }),
          ") son obligatorios"
        ] }),
        /* @__PURE__ */ jsxs(Form, { onSubmit: formik.handleSubmit, children: [
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white ", children: "Ingrese su dirección ∗" }),
            /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                type: "text",
                placeholder: "calle 123 # 45-67",
                name: "direccion",
                value: formik.values.direccion,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.direccion && formik.errors.direccion ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.direccion }) : null
          ] }),
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Seleccione un destino para su pedido ∗" }),
            /* @__PURE__ */ jsxs(
              Form.Select,
              {
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                name: "destino",
                value: formik.values.destino,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Seleccione un destino" }),
                  /* @__PURE__ */ jsx("option", { value: "1", children: "Bogota - Municipios aledaños" }),
                  /* @__PURE__ */ jsx("option", { value: "2", children: "Otros destinos nacionales" })
                ]
              }
            ),
            formik.touched.destino && formik.errors.destino ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.destino }) : null
          ] }),
          /* @__PURE__ */ jsxs(Form.Group, { className: "mb-2", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Ingrese un numero de teléfono ∗" }),
            /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                type: "number",
                name: "telefono",
                placeholder: "123456789",
                value: formik.values.telefono,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.telefono && formik.errors.telefono ? /* @__PURE__ */ jsx("div", { className: "text-red-600 font-normal text-sm", children: formik.errors.telefono }) : null
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Form.Label, { className: "block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white", children: "Detalle adicionales" }),
            /* @__PURE__ */ jsx(Form.Group, { controlId: "exampleForm.ControlTextarea1", children: /* @__PURE__ */ jsx(
              Form.Control,
              {
                className: "bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
                as: "textarea",
                rows: 3,
                placeholder: "ej: Conjunto residencial sumi, torre 9, apartamento 123",
                name: "detalles",
                value: formik.values.detalles,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            UpdateSteps,
            {
              ruta: "/pago",
              bg: "bg-primary",
              textColor: "text-white",
              textContent: "Continuar",
              type: "submit",
              disabled: formik.isSubmitting
            }
          )
        ] })
      ] })
    }
  );
};

const ModalEnvioUsuario = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: handleShow, className: "bg-blue-600 w-full md:w-[30%] mx-auto  p-2 rounded-md text-white hover:bg-blue-500 duration-200 text-xs md:text-sm", children: "Ingresar datos" }),
    show && /* @__PURE__ */ jsx("div", { id: "box-backdrop", className: "fixed inset-0 bg-gray-900/50 z-40" }),
    /* @__PURE__ */ jsxs(
      Modal,
      {
        show,
        onHide: handleClose,
        children: [
          /* @__PURE__ */ jsx(Modal.Header, { closeButton: true, className: "border-none px-4 pt-4 pb-1" }),
          /* @__PURE__ */ jsx("div", { className: "font-font-cust-2 p-2", children: /* @__PURE__ */ jsx(Modal.Body, { className: "pt-0", children: /* @__PURE__ */ jsx(FormEnvioDatosUsuario, {}) }) })
        ]
      }
    )
  ] });
};

const Expanded = ({ isAuthenticated }) => {
  const [check, setCheck] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setCheck(!check);
    setExpanded(!expanded);
  };
  return /* @__PURE__ */ jsxs("div", { className: ` border p-2 rounded-md ${expanded ? "expanded" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: " flex gap-1 items-center cursor-pointer ", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          id: "envio-normal-checkbox",
          checked: check,
          onChange: handleToggle,
          className: "hidden-checkbox rounded-full"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 items-center cursor-pointer  ", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", onClick: handleToggle, children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: `custom-checkbox ${check ? "checked" : ""}`,
            htmlFor: "envio-normal-checkbox",
            children: /* @__PURE__ */ jsx("span", { className: "circle" })
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-base md:text-lg ", children: "Datos para el envío" }),
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-truck-delivery hover:translate-x-12 duration-300", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#2c3e50", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
            /* @__PURE__ */ jsx("path", { d: "M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
            /* @__PURE__ */ jsx("path", { d: "M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" }),
            /* @__PURE__ */ jsx("path", { d: "M3 9l4 0" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "border-dashed border-2  font-semibold w-full" }),
    expanded && /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center items-center gap-2 p-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm", children: "Ingresa la informacion de quien recibe el pedido" }),
      isAuthenticated ? /* @__PURE__ */ jsx(ModalEnvioUsuario, {}) : /* @__PURE__ */ jsx(ModalEnvioInvitado, {})
    ] })
  ] });
};

const $$Astro = createAstro();
const $$InformacionParaEnvio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InformacionParaEnvio;
  const cookies = Astro2.cookies;
  const authToken = cookies.get("access_token");
  const isAuthenticated = authToken !== void 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Datos para envio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="pt-16 w-full items-center justify-center px-20"> ${renderComponent($$result2, "Steps", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Steps", "client:component-export": "Steps" })} </div> </div> <section class="pt-10 flex flex-col lg:grid gap-2 w-[90%] m-auto font-font-cust-2 md:grid-cols-col-cust-3"> <article> <div class="border w-full bg-[#f4f4f4] py-2 px-3 flex gap-2 items-center"> <h2 class="font-normal text-base md:text-xl">
Ingresa los datos para el envio de tu pedido
</h2> </div> <div class="border mt-1 p-2"> ${renderComponent($$result2, "Expanded", Expanded, { "client:visible": true, "isAuthenticated": isAuthenticated, "client:component-hydration": "visible", "client:component-path": "@/components/envio/Expanded", "client:component-export": "default" })} </div> </article> <article> <div class="w-full bg-[#f4f4f4] border py-2 px-3"> <h2 class="font-normal text-base md:text-xl">
Resumen de tu compra
</h2> </div> <div class="border mt-1 p-2 bg-[#f4f4f4]"> ${renderComponent($$result2, "Summary", Summary, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Summary", "client:component-export": "default" })} ${renderComponent($$result2, "VerifyDataLocal", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/envio/VerifyDataLocal", "client:component-export": "default" })} <div class="mt-1 flex flex-col gap-1"> <div class="box-text border-dashed border-3 border-black p-2 flex items-center gap-1 bg-[#f4f4f4]"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-dollar size-[5rem]" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10"></path> <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path> <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path> <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path> <path d="M19 21v1m0 -8v1"></path> </svg> <div> <h4 class="text-xs md:text-sm font-semibold">
Compra segura
</h4> <p class="leading-4 text-xs md:text-sm font-light text-balance">
Tus datos personales se mantienen bajo estricta
                                confidencialidad y estan protegidos.
</p> </div> </div> <div class="box-text border-dashed border-3 border-black p-2 flex items-center gap-1 bg-[#f4f4f4]"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery size-16" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path> <path d="M3 9l4 0"></path> </svg> <div> <h4 class="text-xs md:ext-sm font-semibold">
Envio gratis
</h4> <p class="leading-4 text-xs md:text-sm font-light text-balance">
por compras mayores a $ 400.000 <br> El envio es
                                total mente gratis <strong class="text-blue-600 font-semibold"> <a href="/Costos-de-envio">
Consulte terminos en costos de envios
</a> </strong> </p> </div> </div> <div class="box-text border-dashed border-3 border-black p-2 flex items-start gap-1 bg-[#f4f4f4]"> <div class="flex justify-start items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-check size-10" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14 3v4a1 1 0 0 0 1 1h4"></path> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path> <path d="M9 15l2 2l4 -4"></path> </svg> </div> <div> <h4 class="text-xs md:text-sm font-semibold">
Garantia para tus compras
</h4> <p class="leading-4 text-xs md:text-sm font-light text-balance">
Puedes devolver tu compra en un plazo máximo de
                                30 días, el producto debe estar en perfecto
                                estado: sin uso, tener todos sus accesorios,
                                manuales y embalaje original. Si tienes dudas,
                                comunícate a nuestra línea de atención al
                                cliente desde Bogotá 30237455 o a la línea
                                nacional 320 859 9323.
</p> </div> </div> </div> </div> </article> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/informacion-para-envio.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/informacion-para-envio.astro";
const $$url = "/informacion-para-envio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$InformacionParaEnvio,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
