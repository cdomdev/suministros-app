/* empty css                                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { T as Toast, e as eventEmitter, $ as $$Layout } from '../../chunks/Layout_B7kJxfQl.mjs';
import { g as getProductoBy } from '../../chunks/productos_DMIl94LL.mjs';
import { c as calcularDescuento } from '../../chunks/calcularDescuento_DQZrJtA1.mjs';
import { f as formateValue } from '../../chunks/formatearValor_CeQA56j4.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../../renderers.mjs';

const BtnAddCar = ({ producto }) => {
  const [quantity, setQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [bgToast, setBgToast] = useState("");
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const addProductoLocal = (producto2, quantity2) => {
    let productosLocal = JSON.parse(localStorage.getItem("carrito") || "[]");
    const productoExistente = productosLocal.find((prod) => prod.id === producto2.id);
    if (productoExistente) {
      productoExistente.quantity = (productoExistente.quantity || 0) + quantity2;
    } else {
      productosLocal.push({ ...producto2, quantity: quantity2 });
    }
    localStorage.setItem("carrito", JSON.stringify(productosLocal));
    if (eventEmitter) {
      eventEmitter.emit("carritoChanged");
    }
  };
  const handleAddToCart = () => {
    addProductoLocal(producto, quantity);
    setToastMessage(`Se agregaron ${quantity} productos al carrito`);
    setBgToast("toast-success");
    setShowToast(true);
    setQuantity(1);
    setTimeout(() => {
      setShowToast(false);
    }, 3e3);
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
    /* @__PURE__ */ jsxs("div", { className: "border flex justify-center items-center px-2  ", children: [
      /* @__PURE__ */ jsx("button", { className: "decrement", onClick: handleDecrement, children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-shopping-cart-minus size-5 hover:scale-125 duration-200", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#2c3e50", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
        /* @__PURE__ */ jsx("path", { d: "M12.5 17h-6.5v-14h-2" }),
        /* @__PURE__ */ jsx("path", { d: "M6 5l14 1l-1 7h-13" }),
        /* @__PURE__ */ jsx("path", { d: "M16 19h6" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          className: "border-none focus:border-transparent focus:outline-none appearance-none\r\n             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none\r\n             [&::-moz-appearance]:textfield m-0 text-center w-[40px] font-bold text-lg",
          min: "1",
          max: "100",
          step: "1",
          value: quantity,
          onChange: (e) => setQuantity(parseInt(e.target.value))
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "increment", onClick: handleIncrement, children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-shopping-cart-plus size-5 hover:scale-125 duration-200", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#2c3e50", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
        /* @__PURE__ */ jsx("path", { d: "M12.5 17h-6.5v-14h-2" }),
        /* @__PURE__ */ jsx("path", { d: "M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" }),
        /* @__PURE__ */ jsx("path", { d: "M16 19h6" }),
        /* @__PURE__ */ jsx("path", { d: "M19 16v6" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => handleAddToCart(),
        className: "bg-blue-600 px-3 py-2 text-white rounded-sm hover:bg-blue-500 duration-200",
        children: "Agregar al carrito"
      }
    )
  ] });
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let producto;
  if (id) {
    producto = await getProductoBy({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${producto.nombre}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <article class="pt-20 max-w-[95vw] m-auto font-font-cust-2 mb-5"> <div class="flex flex-col gap-3 md:grid md:grid-cols-col-cust-2"> <div class="flex flex-col items-center justify-center gap-3 "> <div class="flex justify-end w-full pr-20"> ${producto.discount ? renderTemplate`<span class=" bg-red-600 text-2xl px-2 text-white">${producto?.discount} %</span>` : ""} </div> <img${addAttribute(producto.image, "src")}${addAttribute(producto.nombre, "alt")} loading="lazy" class="size-56 hover:scale-105 duration-200"> <div class="bg-[#f7f7f7] p-3 text-center m-auto block italic max-w-[90%]"> <p class="text-xs text-[#6b6c6d] leading-3">
las fotografías de productos y ambientes son
                            ilustrativas, los colores y texturas pueden variar
                            según el dispositivo donde se visualicen y pueden
                            diferir de la realidad. Los elementos ambientados no
                            se incluyen en la compra.
</p> </div> </div> <div class="border p-3"> <div class="flex justify-between text-[#808080]"> <span class="text-base font-semibold"> ${producto.marca} </span> <span class="text-sm uppercase">
ref:${producto.referencia} </span> </div> <h2 class="text-base md:text-xl my-3 font-bold text-balance"> ${producto.nombre} </h2> <span class="flex flex-col font-semibold gap-1">
Precio:
${producto.discount ? renderTemplate`<strong class="text-xs line-through  text-red-700 opacity-[50%] md:text-lg">
$ ${formateValue(producto.valor)} </strong>
                                <strong class="text-base md:text-2xl"> ${calcularDescuento(
    producto.valor,
    producto.discount
  )} </strong>` : renderTemplate`<strong class="text-base md:text-2xl">
$ ${formateValue(producto.valor)} </strong>`} </span> <p class="text-sm leading-5 text-balance my-3"> ${producto.description} </p> <div class="flex gap-2"> ${renderComponent($$result2, "BtnAddCar", BtnAddCar, { "producto": producto, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/carritoDecompras/BtnAddCar", "client:component-export": "BtnAddCar" })} </div> </div> </div> </article> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/detalle-producto/[id].astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/detalle-producto/[id].astro";
const $$url = "/detalle-producto/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
