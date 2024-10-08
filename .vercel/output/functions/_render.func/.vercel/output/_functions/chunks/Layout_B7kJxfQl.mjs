import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, b as renderComponent, e as renderSlot, g as renderHead } from './astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                    */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Modal } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const $$Astro$4 = createAstro();
const $$ItemsSub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ItemsSub;
  const { ruta, nombre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="py-2 text-sm text-gray-700 dark:text-gray-200"> ${nombre.map((itemNombre, index) => renderTemplate`<li class="hover:underline duration-200"> <a${addAttribute(`/subcategoria/${ruta[index]}`, "href")} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> ${itemNombre} </a> </li>`)} </ul>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/header/ItemsSub.astro", void 0);

const $$Astro$3 = createAstro();
const $$ItemsCat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ItemsCat;
  const { ruta, nombre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/categoria/${ruta}`, "href")} class="hover:text-gray-500 text-[#4e4e51] text-xs lg:text-sm px-3 py-2.5 text-center inline-flex items-center font-normal" type="button"> ${nombre} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg> </a>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/header/ItemsCat.astro", void 0);

const $$SubMenu = createComponent(($$result, $$props, $$slots) => {
  const rutas = [
    {
      ruta1: {
        nombre: ["Sanitarios", "Griferias", "Espejos"],
        ruta: ["sanitarios", "griferias", "espejos"]
      },
      ruta2: {
        nombre: ["Lavaplatos", "Lavaderos"],
        ruta: ["lavaplatos", "lavaderos"]
      },
      ruta3: {
        nombre: ["Pinturas", "Pegantes", "Limpiadores"],
        ruta: ["pinturas", "pegantes", "limpiadores"]
      },
      ruta4: {
        nombre: ["Pisos ceramicos", "Paredes"],
        ruta: ["pisosceramicos", "paredes"]
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-sa2ymsrb> <ul class="flex items-center gap-1 md:gap-x-3 font-font-cust-2 font-normal" data-astro-cid-sa2ymsrb> <li class="relative" data-astro-cid-sa2ymsrb> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "ba\xF1os", "nombre": "Ba\xF1os", "data-astro-cid-sa2ymsrb": true })} <!-- Dropdown menu --> <div id="drop-1" class="hidden absolute left-0 top-full bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700" data-astro-cid-sa2ymsrb> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta1.nombre, "ruta": ruta.ruta1.ruta, "data-astro-cid-sa2ymsrb": true })}`)} </div> </li> <li class="relative" data-astro-cid-sa2ymsrb> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "cocinas", "nombre": "Cocinas", "data-astro-cid-sa2ymsrb": true })} <!-- Dropdown menu --> <div id="drop-2" class="bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute z-10 hidden" data-astro-cid-sa2ymsrb> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta2.nombre, "ruta": ruta.ruta2.ruta, "data-astro-cid-sa2ymsrb": true })}`)} </div> </li> <li class="relative" data-astro-cid-sa2ymsrb> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "construccion-y-remodelacion", "nombre": "Construccion / remodelacion", "data-astro-cid-sa2ymsrb": true })} <!-- Dropdown menu --> <div id="drop-3" class="bg-white divide-y divide-gray-100 rounded-lg shadow w-56 right-0 dark:bg-gray-700 absolute z-10 hidden" data-astro-cid-sa2ymsrb> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta3.nombre, "ruta": ruta.ruta3.ruta, "data-astro-cid-sa2ymsrb": true })}`)} </div> </li> <li class="relative" data-astro-cid-sa2ymsrb> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "pisos-y-paredes", "nombre": "Pisos / paredes", "data-astro-cid-sa2ymsrb": true })} <!-- Dropdown menu --> <div id="drop-4" class="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute z-10 hidden" data-astro-cid-sa2ymsrb> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta4.nombre, "ruta": ruta.ruta4.ruta, "data-astro-cid-sa2ymsrb": true })}`)} </div> </li> <li class="text-blue-600 font-bold hover:text-blue-400 duration-100 ease-in-out" data-astro-cid-sa2ymsrb> <a href="/Ofertas" class="text-xs lg:text-sm" data-astro-cid-sa2ymsrb>OFERTAS</a> </li> </ul> </div> <div data-astro-cid-sa2ymsrb> <a href="/Medios-de-pago" class="hover:text-gray-500 text-xs lg:text-sm pl-3 pr-5 py-2.5 text-center inline-flex items-center font-font-cust-2 text-gray-800 font-normal hover:underline duration-200" data-astro-cid-sa2ymsrb>Medios de pago</a> </div> `;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/header/SubMenu.astro", void 0);

const SvgCarrritoSearh = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-building-store w-6 h-6 stroke-gray-400",
      width: "44",
      height: "44",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "#2c3e50",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M3 21l18 0" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M5 21l0 -10.15" }),
        /* @__PURE__ */ jsx("path", { d: "M19 21l0 -10.15" }),
        /* @__PURE__ */ jsx("path", { d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" })
      ]
    }
  );
};

const SvgGlass = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: "w-4 h-4",
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        }
      )
    }
  );
};

const API_HOST = "http://localhost:3000";
const busquedaProductos = async (searchTerm) => {
  try {
    const response = await axios.post(`${API_HOST}/busqueda-productos`, { query: searchTerm });
    return response;
  } catch (e) {
    throw e;
  }
};

const HOST$1 = "http://localhost:3000";
const token = "679450cd57d2b1";
const getOrders = async (id) => {
  try {
    const response = await axios.get(`${HOST$1}/user/pedidos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const updateProfile = async (email, dataUpdate) => {
  try {
    const response = await axios.post(`${HOST$1}/user/profile-update`, { email, dataUpdate });
    return response;
  } catch (error) {
    throw error;
  }
};
const getDataIp = async () => {
  try {
    const response = await axios.get(`https://ipinfo.io/json?token=${token}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
    throw error;
  }
};

const Localitation = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let dataLocal = localStorage.getItem("referenceDataLocation");
      try {
        if (!dataLocal) {
          const response = await getDataIp();
          localStorage.setItem("referenceDataLocation", JSON.stringify(response));
          setData(response);
        } else {
          let dataParse = JSON.parse(dataLocal);
          setData(dataParse);
        }
      } catch (error) {
        console.error("Error fetching IP data");
      }
    };
    fetchData();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center font-font-cust-2", children: [
    /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-map-pin size-8 stroke-[#6f6f6f]", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#2c3e50", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }),
      /* @__PURE__ */ jsx("path", { d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "text-[7px] md:text-[8px] uppercase text-[#545454] font-semibold text-wrap text-center", children: data?.city })
  ] });
};

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async () => {
    if (!searchTerm) {
      return null;
    }
    setIsLoading(true);
    try {
      const response = await busquedaProductos(searchTerm);
      if (response.status === 200) {
        sessionStorage.setItem("resultado-busqueda", JSON.stringify(response.data.resultados));
        window.location.href = `/resultado-busqueda/${searchTerm}`;
        setIsLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;
        if (status === 404) {
          sessionStorage.removeItem("resultado-busqueda");
          window.location.href = `/resultado-busqueda/${searchTerm}`;
          setIsLoading(false);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxs("form", { className: "flex items-center w-full ld:w-4/5 lg:mx-auto font-font-cust-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "simple-search", className: "sr-only", children: "Search" }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
            children: /* @__PURE__ */ jsx(SvgCarrritoSearh, {})
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "search",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            id: "simple-search",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-[10px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Buscas algun producto en especial...",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          onClick: handleSearch,
          className: "p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: isLoading ? /* @__PURE__ */ jsx(
            Spinner,
            {
              animation: "border",
              size: "sm",
              variant: "primary"
            }
          ) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(SvgGlass, {}),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Search" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Localitation, {})
  ] });
};

class EventEmitter {
  eventTarget;
  constructor() {
    this.eventTarget = new EventTarget();
  }
  emit(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    this.eventTarget.dispatchEvent(event);
  }
  on(eventName, callback) {
    this.eventTarget.addEventListener(eventName, callback);
  }
  off(eventName, callback) {
    this.eventTarget.removeEventListener(eventName, callback);
  }
}
const eventEmitter = typeof window !== "undefined" ? new EventEmitter() : null;

const CarritoPageNav = () => {
  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    const handleCarritoChange = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
      setCantidad(carrito.length);
    };
    if (eventEmitter) {
      eventEmitter.on("carritoChanged", handleCarritoChange);
    }
    handleCarritoChange();
    return () => {
      if (eventEmitter) {
        eventEmitter.off("carritoChanged", handleCarritoChange);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("a", { className: "relative p-0 m-0 flex flex-col items-center cursor-pointer", href: "/carrito-de-compras", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "icon icon-tabler icon-tabler-shopping-cart size-8 md:size-11",
          width: "44",
          height: "44",
          viewBox: "0 0 24 24",
          strokeWidth: "1",
          stroke: "#2c3e50",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
            /* @__PURE__ */ jsx("path", { d: "M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
            /* @__PURE__ */ jsx("path", { d: "M17 17h-11v-14h-2" }),
            /* @__PURE__ */ jsx("path", { d: "M6 5l14 1l-1 7h-13" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { className: " size-4 bg-red-600 text-xs md:text-sm rounded-full text-white absolute flex justify-center items-center right-1 top-[-0.5em]", children: cantidad })
    ] }),
    /* @__PURE__ */ jsx("small", { className: "text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100 cursor-pointer", children: "Carrito" })
  ] });
};

const Person = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 md:gap-2 cursor-pointer", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative w-7 h-7 md:w-9 md:h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "absolute w-8 h-8 md:w-11 md:h-11 text-gray-400  -left-[2px] md:-left-1",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                clipRule: "evenodd"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("small", { className: "text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:mt-1  duration-100", children: "Perfil" })
  ] });
};

const HOST = "http://localhost:3000";
const validaSesion = async (values) => {
  try {
    const response = await axios.post(`${HOST}/user/login`, values, {
      withCredentials: true
    });
    return response;
  } catch (error) {
    throw error;
  }
};
const googleAuth = async (response) => {
  try {
    const responseServer = await axios.post(
      `${HOST}/user/google-auth`,
      {
        token: response.access_token
      },
      {
        withCredentials: true
      }
    );
    return responseServer;
  } catch (error) {
    throw error;
  }
};
const register = async (values) => {
  try {
    const response = await axios.post(`${HOST}/user/register`, values, {
      withCredentials: true
    });
    return response;
  } catch (e) {
    throw e;
  }
};
const sendRequestResettPassword = async (values) => {
  try {
    const response = await axios.post(`${HOST}/user/validate-email`, values, {
      withCredentials: true
    });
    return response;
  } catch (e) {
    throw e;
  }
};
const resetPassword = async ({ values, token }) => {
  if (!token) {
    throw new Error("Token is missing.");
  }
  try {
    const response = await axios.post(`${HOST}/reset-password/${token}`, values, {
      withCredentials: true
    });
    return response;
  } catch (e) {
    throw e;
  }
};
const clearStorege = () => {
  localStorage.clear();
  sessionStorage.clear();
};
const logout = async () => {
  try {
    await axios.post("http://localhost:3000/user/logout", {}, { withCredentials: true });
    clearStorege();
    window.location.reload();
  } catch (error) {
    console.error("Error during logout", error);
  }
};

const Toast = ({
  showToast,
  setShowToast,
  toastMessage,
  bgToast
}) => {
  if (!showToast) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: bgToast,
      className: `flex fixed bg-white z-50 top-32 right-10 items-center w-full max-w-xs p-4 mb-4 text-gray-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${bgToast ?? "bg-white"}`,
      role: "alert",
      children: [
        bgToast === "toast-success" ? /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" }) }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Check icon" })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" }) }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Error icon" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ms-3 text-xs md:text-sm font-normal text-black", children: toastMessage }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
            "data-dismiss-target": "#toast-success",
            "aria-label": "Close",
            onClick: () => setShowToast(false),
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" }) })
            ]
          }
        )
      ]
    }
  );
};

const InitSesion = ({ setShow }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  const handleSubmit = async (values) => {
    try {
      const response = await validaSesion(values);
      if (response.status === 200) {
        setShow(false);
        window.location.reload();
        localStorage.setItem("infoProfileUSer", JSON.stringify(response.data));
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
      setToastMessage(`Hubo un error al verificar tus datos, intentalo de nuevo`);
      setTimeout(() => {
        setShowToast(false);
      }, 5e3);
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
        initialValues: { email: "", password: "" },
        validate: (values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "¡Este campo no puede quedar vacio!";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Ingrese una dirección de correo válida";
          }
          if (!values.password) {
            errors.password = "¡Este campo no puede quedar vacio!";
          }
          return errors;
        },
        onSubmit: handleSubmit,
        children: ({ handleSubmit: handleSubmit2 }) => /* @__PURE__ */ jsxs(Form, { onSubmit: handleSubmit2, children: [
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
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-2", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "password",
                  className: "block text-sm font-medium text-gray-900 dark:text-white",
                  children: "Ingrese su contraseña"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/Olvide-mi-contraseña",
                  className: "text-blue-700 hover:underline duration-150 text-sm flex justify-end px-1",
                  children: "Olvidé mi contraseña"
                }
              )
            ] }),
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
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "text-white text-xs md:text-sm bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              children: "Iniciar sesión"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "w-full flex gap-2 items-center text-xs md:text-sm", children: [
            /* @__PURE__ */ jsx("p", { className: "py-2", children: "¿No tienes cuenta?" }),
            /* @__PURE__ */ jsx("a", { href: "/registro", className: "underline hover:text-blue-500 duration-150", children: "Regístrate aquí" })
          ] })
        ] })
      }
    )
  ] });
};

const Google = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "icon size-8",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "100",
      height: "100",
      viewBox: "0 0 48 48",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#FFC107",
            d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#FF3D00",
            d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4CAF50",
            d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#1976D2",
            d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          }
        )
      ]
    }
  );
};

const clientId = "723138540512-ves2et54j3deoj0br2memorcba9e829s.apps.googleusercontent.com";
const GoogleAuth = ({ setShow }) => {
  return /* @__PURE__ */ jsx(GoogleOAuthProvider, { clientId, children: /* @__PURE__ */ jsx(BtnLoguin, { setShow }) });
};
const BtnLoguin = ({ setShow }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  const googleInit = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const serverResponse = await googleAuth(response);
        if (serverResponse.status === 200) {
          window.location.reload();
          setShow(false);
          localStorage.setItem("infoProfileUSer", JSON.stringify(serverResponse.data));
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { status } = error.response;
          if (status === 404) {
            setBgToast("fail");
            setShowToast(true);
            setToastMessage(`Algo salio mal con el inicio, intentalo de nuevo`);
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
      }
    }
  });
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
    /* @__PURE__ */ jsxs("button", { onClick: () => googleInit(), className: "border w-full flex rounded-md gap-1 font-normal  justify-center items-center py-1 cursor-pointer mb-3 hover:bg-blue-500 duration-150 hover:text-white", children: [
      /* @__PURE__ */ jsx("span", { className: "block bg-white rounded-full", children: /* @__PURE__ */ jsx(Google, {}) }),
      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Iniciar sesion con google" })
    ] })
  ] });
};

const ModalAuth = ({ triggerElement }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: handleShow, children: triggerElement }),
    show && /* @__PURE__ */ jsx("div", { id: "box-backdrop", className: "fixed inset-0 bg-gray-900/50 z-40" }),
    /* @__PURE__ */ jsxs(
      Modal,
      {
        show,
        onHide: handleClose,
        children: [
          /* @__PURE__ */ jsx(Modal.Header, { closeButton: true, className: "border-none px-4 pt-4 pb-1" }),
          /* @__PURE__ */ jsx("div", { className: "font-font-cust-2 p-2", children: /* @__PURE__ */ jsxs(Modal.Body, { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "email",
                className: "block mb-2 text-sm font-medium text-center text-black dark:text-white",
                children: "Inicia sesion con tu cuenta de google"
              }
            ),
            /* @__PURE__ */ jsx(GoogleAuth, { setShow }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center mb-2 gap-2", children: [
              /* @__PURE__ */ jsx("hr", { className: "border-2 border-black w-[50%]" }),
              /* @__PURE__ */ jsx("span", { className: "block text-sm font-semibold", children: "o" }),
              /* @__PURE__ */ jsx("hr", { className: "border-2 border-black w-[50%]" })
            ] }),
            /* @__PURE__ */ jsx(InitSesion, { setShow })
          ] }) })
        ]
      }
    )
  ] });
};

const ModalInfo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center cursor-pointer", onClick: handleShow, children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "icon icon-tabler icon-tabler-box-seam w-8 h-8 md:w-11 md:h-11",
          width: "44",
          height: "44",
          viewBox: "0 0 24 24",
          strokeWidth: "1",
          stroke: "#2c3e50",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" }),
            /* @__PURE__ */ jsx("path", { d: "M12 12l8 -4.5" }),
            /* @__PURE__ */ jsx("path", { d: "M8.2 9.8l7.6 -4.6" }),
            /* @__PURE__ */ jsx("path", { d: "M12 12v9" }),
            /* @__PURE__ */ jsx("path", { d: "M12 12l-8 -4.5" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("small", { className: "text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100", children: "Compras" })
    ] }),
    show && /* @__PURE__ */ jsx("div", { id: "box-backdrop", className: "fixed inset-0 bg-gray-900/50 z-40" }),
    /* @__PURE__ */ jsxs(
      Modal,
      {
        show,
        onHide: handleClose,
        children: [
          /* @__PURE__ */ jsx(Modal.Header, { closeButton: true, className: "border-none pb-0 px-4" }),
          /* @__PURE__ */ jsx("div", { className: "font-font-cust-2 p-2", children: /* @__PURE__ */ jsxs(Modal.Body, { className: "pt-0", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-center text-2xl", children: "Se requiere iniciar sesión" }),
            /* @__PURE__ */ jsx("h3", { className: "text-center", children: "Tienes que iniciar sesión para utilizar esta función." }),
            /* @__PURE__ */ jsx("hr", { className: "my-2" }),
            /* @__PURE__ */ jsx("p", { className: "text-wrap text-sm mx-auto text-black", children: "La seccion a la que va a acceder contiene información personal, por lo que necesitamos su identidad para saber qué información podemos proporcionarle. Por lo tanto, deberá iniciar sesión rigistrarse si realmente desea acceder." }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "w-full flex flex-col mx-auto justify-center items-center gap-2 mt-3",
                children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/registro",
                      className: "text-white w-full inline-block text-center rounded-md py-2 bg-blue-600 hover:bg-blue-800 duration-200 text-sm",
                      children: "Quiero registrarme"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => handleClose(),
                      className: "text-black bg-[#ebebeb] w-full rounded-md py-2 hover:bg-[#d3d3d3] duration-200 text-sm",
                      children: "Cancelar"
                    }
                  )
                ]
              }
            )
          ] }) })
        ]
      }
    )
  ] });
};

const AuthNone = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ModalInfo, {}),
    /* @__PURE__ */ jsx(ModalAuth, { triggerElement: /* @__PURE__ */ jsx(Person, {}) })
  ] });
};

const RutaPedidos = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("a", { className: "flex flex-col items-center cursor-pointer", href: "/usuario/perfil", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-box-seam w-8 h-8 md:w-11 md:h-11",
        width: "44",
        height: "44",
        viewBox: "0 0 24 24",
        strokeWidth: "1",
        stroke: "#2c3e50",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ jsx("path", { d: "M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" }),
          /* @__PURE__ */ jsx("path", { d: "M12 12l8 -4.5" }),
          /* @__PURE__ */ jsx("path", { d: "M8.2 9.8l7.6 -4.6" }),
          /* @__PURE__ */ jsx("path", { d: "M12 12v9" }),
          /* @__PURE__ */ jsx("path", { d: "M12 12l-8 -4.5" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "small",
      {
        className: "text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100",
        children: "Compras"
      }
    )
  ] }) });
};

const DropdownProfile = () => {
  const [data, setData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const userSessionData = localStorage.getItem("infoProfileUSer");
    if (userSessionData) {
      const userData = JSON.parse(userSessionData);
      setData(userData);
    }
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    data && data.picture ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-1", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          id: "avatarButton",
          className: "w-9 h-9 rounded-full cursor-pointer relative",
          src: data.picture,
          alt: "profile user",
          onClick: toggleDropdown,
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("small", { className: "text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:-mb-[2px] duration-100", children: "Perfil" })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 md:gap-2 cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative w-7 h-7 md:w-9 md:h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600",
          onClick: toggleDropdown,
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "absolute w-8 h-8 md:w-11 md:h-11 text-gray-400  -left-[2px] md:-left-1",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("small", { className: "text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:mt-1  duration-100", children: "Perfil" })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        id: "userDropdown",
        className: `z-10 absolute right-3 ${dropdownOpen ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 text-sm text-gray-900 dark:text-white", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-base uppercase", children: data?.nombre }),
            /* @__PURE__ */ jsx("div", { className: "font-medium truncate", children: data?.email || "" })
          ] }),
          /* @__PURE__ */ jsxs(
            "ul",
            {
              className: "text-sm text-gray-700 dark:text-gray-200",
              "aria-labelledby": "avatarButton",
              children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/usuario/perfil",
                    className: "block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                    children: "Mi Perfil"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/usuario/compras",
                    className: "block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                    children: "Mis Compras"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => logout(),
              className: "block   text-sm text-gray-700 hover:bg-red-600 w-full duration-200 hover:text-white rounded-b-md py-2",
              children: "Cerrar sesion"
            }
          ) })
        ]
      }
    )
  ] });
};

const AuthSuccess = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(RutaPedidos, {}),
    /* @__PURE__ */ jsx(DropdownProfile, {})
  ] });
};

const $$Offcanvas = createComponent(($$result, $$props, $$slots) => {
  const rutas = [
    {
      ruta1: {
        nombre: ["Sanitarios", "Griferias", "Espejos"],
        ruta: ["sanitarios", "griferias", "espejos"]
      },
      ruta2: {
        nombre: ["Lavaplatos", "Lavaderos"],
        ruta: ["lavaplatos", "lavaderos"]
      },
      ruta3: {
        nombre: ["Pinturas", "Pegantes", "Limpiadores"],
        ruta: ["pinturas", "pegantes", "limpiadores"]
      },
      ruta4: {
        nombre: ["Pisos ceramicos", "Paredes"],
        ruta: ["pisosceramicos", "paredes"]
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" class="md:hidden" aria-controls="offcanvasExample"> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path> </svg> </a> <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"> <div class="offcanvas-header"> <h5 class="offcanvas-title text-blue-900 uppercase font-bold" id="offcanvasExampleLabe"> <span class="text-xl">S</span>uministros
</h5> <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> </div> <div class="offcanvas-body font-font-cust-2"> <div class="h-full p-1 overflow-y-auto dark:bg-gray-800"> <ul class="flex items-start flex-col gap-1 md:gap-x-3 font-font-cust-2 font-normal"> <li class="relative"> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "ba\xF1os", "nombre": "Ba\xF1os" })} <!-- Dropdown menu --> <div id="drop-1" class="hidden absolute left-0 top-full bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta1.nombre, "ruta": ruta.ruta1.ruta })}`)} </div> </li> <li class="relative"> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "cocinas", "nombre": "Cocinas" })} <!-- Dropdown menu --> <div id="drop-2" class="bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute z-10 hidden"> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta2.nombre, "ruta": ruta.ruta2.ruta })}`)} </div> </li> <li class="relative"> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "construccion-y-remodelacion", "nombre": "Construccion / remodelacion" })} <!-- Dropdown menu --> <div id="drop-3" class="bg-white divide-y divide-gray-100 rounded-lg shadow w-56 right-0 dark:bg-gray-700 absolute z-10 hidden"> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta3.nombre, "ruta": ruta.ruta3.ruta })}`)} </div> </li> <li class="relative"> ${renderComponent($$result, "ItemsCat", $$ItemsCat, { "ruta": "pisos-y-paredes", "nombre": "Pisos / paredes" })} <!-- Dropdown menu --> <div id="drop-4" class="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute z-10 hidden"> ${rutas.map((ruta) => renderTemplate`${renderComponent($$result, "ItemsSub", $$ItemsSub, { "nombre": ruta.ruta4.nombre, "ruta": ruta.ruta4.ruta })}`)} </div> </li> <li class="text-blue-600 pl-4 font-bold hover:text-blue-400 duration-100 ease-in-out"> <a href="/Ofertas" class="text-xs lg:text-sm">OFERTAS</a> </li> </ul> </div> </div> </div>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/header/Offcanvas.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const cookies = Astro2.cookies;
  const authToken = cookies.get("access_token");
  const isAuthenticated = authToken !== void 0;
  return renderTemplate`${maybeRenderHead()}<nav class="border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full fixed top-0 z-10 bg-white"> <div class="flex flex-wrap items-center justify-between py-3 px-4"> ${renderComponent($$result, "Offcanvas", $$Offcanvas, {})} <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="../../../logo.webp" class="h-7 md:h-11" alt="Flowbite Logo"> </a> <div class="hidden md:block w-[37%]"> ${renderComponent($$result, "Buscador", Buscador, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/buscador/Buscador", "client:component-export": "default" })} </div> <!-- Icons --> <div class="flex gap-2 md:gap-4"> <span class="flex items-end md:hidden"> ${renderComponent($$result, "Localitation", Localitation, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/Localitation", "client:component-export": "Localitation" })} </span> ${isAuthenticated ? renderTemplate`${renderComponent($$result, "AuthSucces", AuthSuccess, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/header/AuthSuccess", "client:component-export": "default" })}` : renderTemplate`${renderComponent($$result, "AuthNone", AuthNone, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/header/AuthNone", "client:component-export": "default" })}`} ${renderComponent($$result, "CarritoPageNav", CarritoPageNav, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/carritoDecompras/CarritoPageNav", "client:component-export": "default" })} </div> </div> <hr class="text-gray-500"> <div class="py-1 md:py-2 md:px-2 w-full shadow-md lg:px-10 justify-between hidden md:flex submenu-items"> ${renderComponent($$result, "SubMenu", $$SubMenu, {})} </div> </nav>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/header/Header.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail w-4 h-4 stroke-black" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/icons/Mail.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone w-4 h-4 stroke-black" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path> </svg>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/icons/Phone.astro", void 0);

const $$Whap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp w-4 h-4 stroke-black" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path> </svg>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/icons/Whap.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <hr class="my-2"> <div class="flex flex-wrap gap-3 md:gap-0 md:flex-row md:justify-between px-6 md:px-32 py-1 md:py-4 font-font-cust-2"> <div> <h5 class="text-sm md:text-base font-semibold">
Servico al cliente
</h5> <ul class="flex flex-col gap-1"> <li class="text-xs md:text-sm hover:text-slate-500 cursor-pointer"> <a href="/Sobre-nosotros"> Sobre nosotros</a> </li> <li class="text-xs md:text-sm hover:text-slate-500 cursor-pointer"> <a href="/Cambios-y-devoluciones">
Cambios y devoluciones</a> </li> <li class="text-xs md:text-sm hover:text-slate-500 cursor-pointer"> <a href="/Politica-de-proteccion-de-datos">
Politica de proteccion de datos</a> </li> </ul> </div> <div> <h5 class="text-sm md:text-base font-semibold">
Lineas de atencion
</h5> <ul class="flex flex-col gap-1"> <li class="flex cursor-pointer text-xs md:text-sm hover:text-slate-500 items-center gap-[3px]"> ${renderComponent($$result, "Phone", $$Phone, {})} +57 601 560 5000
</li> <li class="flex cursor-pointer text-xs md:text-sm hover:text-slate-500 items-center gap-[3px]"> <a href="https://wa.me/573208132304" target="_blank" class="flex items-center gap-[3px]"> ${renderComponent($$result, "Whap", $$Whap, {})} 3208232305
</a> </li> <li class="flex cursor-pointer text-xs md:text-sm hover:text-slate-500 items-center gap-[3px]"> ${renderComponent($$result, "Mail", $$Mail, {})} <a href="mailto:dominguez5493.cd@gmaiil.com">atencionCli@sumi.co</a> </li> </ul> </div> <div> <h5 class="text-sm md:text-base font-semibold">
Procesos de compra
</h5> <ul class="flex flex-col gap-1"> <li class="text-xs md:text-sm hover:text-slate-500 cursor-pointer"> <a href="/Medios-de-pago">Medio de pago</a> </li> <li class="text-xs md:text-sm hover:text-slate-500 cursor-pointer"> <a href="/Costos-de-envio"> Costos y tiempos de envio </a> </li> </ul> </div> <div> <h5 class="text-sm md:text-base font-semibold">Mi cuenta</h5> <ul> <li class="text-xs md:text-sm hover:text-slate-500 cursor-pointer"> <a href="/Olvide-mi-contraseña">Olvide mi contraseña</a> </li> </ul> </div> </div> </footer>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$BtnWhatsApp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="cotainer-btn-whatsapp" data-astro-cid-z2zk3xxb> <div class="content-num" data-astro-cid-z2zk3xxb> <span data-astro-cid-z2zk3xxb>1</span> </div> <div class="content" data-astro-cid-z2zk3xxb> <a href="https://wa.me/573208132304" target="_blank" rel="noopener noreferrer" data-astro-cid-z2zk3xxb> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp stroke-white" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-z2zk3xxb> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-z2zk3xxb></path> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-astro-cid-z2zk3xxb></path> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-astro-cid-z2zk3xxb></path> </svg> </a> </div> </div> `;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/BtnWhatsApp.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"><meta name="generator"', "><title>", "</title>", "", "</head> ", ' <main class="pt-2 md:mt-24"> ', " </main> ", " ", ' <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"><\/script> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"><\/script>  </html>'])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "BtnWhatsApp", $$BtnWhatsApp, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/layouts/Layout.astro", void 0);

export { $$Layout as $, ModalAuth as M, Toast as T, resetPassword as a, eventEmitter as e, getOrders as g, logout as l, register as r, sendRequestResettPassword as s, updateProfile as u };
