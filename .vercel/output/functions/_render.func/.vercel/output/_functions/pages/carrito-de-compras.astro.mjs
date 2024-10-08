/* empty css                                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { T as Toast, e as eventEmitter, M as ModalAuth, $ as $$Layout } from '../chunks/Layout_B7kJxfQl.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { U as UpdateSteps, S as Summary } from '../chunks/UpdateSteps_o2-iX8Y0.mjs';
import { f as formateValue } from '../chunks/formatearValor_CeQA56j4.mjs';
import { c as calcularDescuento } from '../chunks/calcularDescuento_DQZrJtA1.mjs';
/* empty css                                              */
export { renderers } from '../renderers.mjs';

const Contador = () => {
  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setCantidad(carrito.length);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "size-6 flex items-center justify-center rounded-full bg-[#243a5e] text-white font-semibold", children: cantidad });
};

const calcularSubTotal = (producto) => {
  const cantidad = producto.quantity ?? 0;
  const valor = parseFloat(producto.valor) ?? 0;
  const descuento = producto.discount;
  let valorTotal;
  if (descuento && descuento > 0) {
    let valorDeDescuento = valor * descuento / 100;
    valorTotal = (valor - valorDeDescuento) * cantidad;
  } else {
    valorTotal = cantidad * valor;
  }
  const valueParsed = valorTotal.toFixed(2);
  return formateValue(valueParsed);
};

const CardCarrito = ({ producto, productos, setProductos }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  const deleFromCar = (productId) => {
    const updatedCarItems = productos.filter((item) => item.id !== productId);
    localStorage.setItem("carrito", JSON.stringify(updatedCarItems));
    setProductos(updatedCarItems);
    if (eventEmitter) {
      eventEmitter.emit("carritoChanged");
    }
  };
  const handleDeletToCart = (producto2) => {
    setToastMessage("Se eliminó un producto del carrito");
    setBgToast("toast-success");
    setShowToast(true);
    window.location.reload();
    deleFromCar(producto2.id);
    setTimeout(() => {
      setShowToast(false);
    }, 3e3);
  };
  const valorProducto = producto.discount && producto.discount > 0 ? calcularDescuento(producto.valor, producto.discount) : formateValue(producto.valor);
  const subTotal = calcularSubTotal(producto);
  return /* @__PURE__ */ jsxs("div", { className: "border py-2", children: [
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
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between px-6 py-2 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsx("img", { src: producto.image, alt: producto.nombre, loading: "lazy", className: "size-20" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-col flex ", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-balance text-xs md:text-sm flex-col flex ", children: [
            /* @__PURE__ */ jsx("strong", { children: "Producto: " }),
            producto.nombre
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-balance text-xs md:text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "REF: " }),
            producto.referencia
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-balance text-xs md:text-sm ", children: [
            /* @__PURE__ */ jsx("strong", { children: "Cantidad: " }),
            producto.quantity
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-balance text-xs md:text-sm flex gap-1 ", children: producto.discount ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("strong", { children: "Descuento: " }),
            /* @__PURE__ */ jsxs("p", { className: "text-red-600 text-sm", children: [
              producto.discount,
              "%"
            ] })
          ] }) : /* @__PURE__ */ jsx(Fragment, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => handleDeletToCart(producto), className: "hover:text-red-700 text-xs md:text-sm", children: "Eliminar" }),
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-trash-x size-6", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#ff2825", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ jsx("path", { d: "M4 7h16" }),
          /* @__PURE__ */ jsx("path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" }),
          /* @__PURE__ */ jsx("path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" }),
          /* @__PURE__ */ jsx("path", { d: "M10 12l4 4m0 -4l-4 4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "w-[90%] m-auto" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-end pr-10 gap-3 items-center mt-2", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex gap-2 items-center text-xs md:text-sm", children: [
        "Valor unidad:",
        /* @__PURE__ */ jsxs("strong", { children: [
          "$: ",
          valorProducto
        ] })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex gap-2 text-xs md:text-sm", children: [
        "Subtotal:",
        /* @__PURE__ */ jsxs("strong", { children: [
          "$: ",
          subTotal
        ] })
      ] })
    ] })
  ] });
};

const CarritoEmpty = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-6 gap-3", children: [
    /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-shopping-cart-question size-10 stroke-slate-500", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#2c3e50", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
      /* @__PURE__ */ jsx("path", { d: "M13.5 17h-7.5v-14h-2" }),
      /* @__PURE__ */ jsx("path", { d: "M6 5l14 1l-.714 5m-4.786 2h-8.5" }),
      /* @__PURE__ */ jsx("path", { d: "M19 22v.01" }),
      /* @__PURE__ */ jsx("path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "flex flex-col items-center text-gray-700 text-sm md:text-lg", children: "Tu carrito esta vacio..." })
  ] });
};

const DetallesCarrito = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setProductos(carrito);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: !productos ? /* @__PURE__ */ jsx(CarritoEmpty, {}) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 overflow-y-auto max-h-96", children: [
    productos.length > 0 ? productos.map((producto) => /* @__PURE__ */ jsx(
      CardCarrito,
      {
        producto,
        productos,
        setProductos
      },
      producto.id
    )) : /* @__PURE__ */ jsx(CarritoEmpty, {}),
    /* @__PURE__ */ jsxs("a", { href: "/categoria/pisos-y-paredes", className: "bg-[#f4f4f4] text-sm btn-add-more-products  hover:bg-blue-600 hover:text-white hover:stroke-white duration-200 w-full md:max-w-[40%] mx-auto shadow-md cursor-pointer py-2 my-3 px-4 rounded-3xl flex items-center justify-center hover:shadow-none", children: [
      productos && productos.length > 0 ? "Continuar comprando" : "Agregar productos al carrito",
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-shopping-cart-plus size-5 stroke-black hover:stroke-white", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
        /* @__PURE__ */ jsx("path", { d: "M12.5 17h-6.5v-14h-2" }),
        /* @__PURE__ */ jsx("path", { d: "M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" }),
        /* @__PURE__ */ jsx("path", { d: "M16 19h6" }),
        /* @__PURE__ */ jsx("path", { d: "M19 16v6" })
      ] })
    ] })
  ] }) });
};

const VerifyAuth = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const handleCarritoChange = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
      setProductos(carrito);
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
  return /* @__PURE__ */ jsx(Fragment, { children: !productos ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-center font-semibold my-2 text-red-400", children: "No hay productos en tu carrito" }) }) : /* @__PURE__ */ jsx(Fragment, { children: productos.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "font-font-cust-2 mt-2", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm mb-2 ", children: "Registrate o inicia sesion para tener un historial de tus compras o hacer seguiento del estado de tu pedido." }),
    /* @__PURE__ */ jsx(ModalAuth, { triggerElement: /* @__PURE__ */ jsx("button", { className: "bg-blue-600 w-full text-white py-2 rounded-md uppercase text-xs md:text-sm  mt-2  hover:bg-blue-700 hover:shadow-none", children: "Iniciar sesion" }) }),
    /* @__PURE__ */ jsx(UpdateSteps, { bg: "bg-white", textColor: "text-black", ruta: "/informacion-para-envio", textContent: "continuar como invitado" })
  ] }) : /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-center font-semibold my-2 text-red-400", children: "No hay productos en tu carrito" }) }) });
};

const $$Astro = createAstro();
const $$CarritoDeCompras = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CarritoDeCompras;
  const cookies = Astro2.cookies;
  const authToken = cookies.get("access_token");
  const isAuthenticated = authToken !== void 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carrito de compras" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-16 w-full items-center justify-center px-20"> ${renderComponent($$result2, "Steps", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Steps", "client:component-export": "Steps" })} </div> <section class="pt-10 flex flex-col lg:grid gap-2 w-[90%] m-auto font-font-cust-2 md:grid-cols-col-cust-3"> <article> <div class="border w-full bg-[#f4f4f4] py-2 px-3 flex gap-2 items-center"> <h2 class="font-normal text-base md:text-xl">
Productos en el carrito
</h2> ${renderComponent($$result2, "Contador", Contador, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/carritoDecompras/Contador", "client:component-export": "default" })} </div> <div class="border mt-1 p-2"> ${renderComponent($$result2, "DetallesCarrito", DetallesCarrito, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/carritoDecompras/DetallesCarrito", "client:component-export": "default" })} </div> </article> <article> <div class="w-full bg-[#f4f4f4] border py-2 px-3"> <h2 class="font-normal text-base md:text-xl">
Detalles de tu compra
</h2> </div> <div class="border mt-1 p-2 bg-[#f4f4f4]"> ${renderComponent($$result2, "Summary", Summary, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Summary", "client:component-export": "default" })} <hr> ${isAuthenticated ? renderTemplate`${renderComponent($$result2, "UpdateSteps", null, { "client:only": "react", "ruta": "/informacion-para-envio", "bg": "bg-blue-600", "textColor": "text-white", "textContent": "Continuar", "client:component-hydration": "only", "client:component-path": "@/components/UpdateSteps", "client:component-export": "UpdateSteps" })}` : renderTemplate`${renderComponent($$result2, "VerifyAuth", VerifyAuth, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/carritoDecompras/VerifyAuth", "client:component-export": "default" })}`} </div> <div class="mt-1 flex flex-col gap-1"> <div class="box-text border-dashed border-3 border-black p-2 flex items-center gap-1 bg-[#f4f4f4]"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-dollar size-[5rem]" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10"></path> <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path> <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path> <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path> <path d="M19 21v1m0 -8v1"></path> </svg> <div> <h4 class="text-xs md:text-sm font-semibold">
Compra segura
</h4> <p class="leading-4 text-xs md:text-sm font-light text-balance">
Tus datos personales se mantienen bajo estricta
                            confidencialidad y estan protegidos.
</p> </div> </div> <div class="box-text border-dashed border-3 border-black p-2 flex items-center gap-1 bg-[#f4f4f4]"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery size-16" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path> <path d="M3 9l4 0"></path> </svg> <div> <h4 class="text-xs md:ext-sm font-semibold">
Envio gratis
</h4> <p class="leading-4 text-xs md:text-sm font-light text-balance">
por compras mayores a $ 400.000 <br> El envio es total
                            mente gratis <strong class="text-blue-600 font-semibold"> <a href="/Costos-de-envio">
Consulte terminos en costos de envios
</a> </strong> </p> </div> </div> <div class="box-text border-dashed border-3 border-black p-2 flex items-start gap-1 bg-[#f4f4f4]"> <div class="flex justify-start items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-check size-10" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14 3v4a1 1 0 0 0 1 1h4"></path> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path> <path d="M9 15l2 2l4 -4"></path> </svg> </div> <div> <h4 class="text-xs md:text-sm font-semibold">
Garantia para tus compras
</h4> <p class="leading-4 text-xs md:text-sm font-light text-balance">
Puedes devolver tu compra en un plazo máximo de 30
                            días, el producto debe estar en perfecto estado: sin
                            uso, tener todos sus accesorios, manuales y embalaje
                            original. Si tienes dudas, comunícate a nuestra
                            línea de atención al cliente desde Bogotá 30237455 o
                            a la línea nacional 320 859 9323.
</p> </div> </div> </div> </article> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/carrito-de-compras.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/carrito-de-compras.astro";
const $$url = "/carrito-de-compras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CarritoDeCompras,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
