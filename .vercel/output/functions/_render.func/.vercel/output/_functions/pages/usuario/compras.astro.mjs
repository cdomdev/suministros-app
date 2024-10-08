/* empty css                                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$UsuarioLayout } from '../../chunks/UsuarioLayout_q0IYpoBT.mjs';
import { $ as $$Back } from '../../chunks/Back_Cr5GMpJH.mjs';
import { g as getOrders } from '../../chunks/Layout_B7kJxfQl.mjs';
import { f as formateValue } from '../../chunks/formatearValor_CeQA56j4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Compras = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Compras;
  const cookies = Astro2.cookies;
  const userSessionCookie = cookies.get("user_sesion");
  const userSessionString = userSessionCookie ? userSessionCookie.value : null;
  let data = null;
  let pedidos = null;
  try {
    data = userSessionString ? JSON.parse(userSessionString) : null;
    if (data && data.id) {
      pedidos = await getOrders(data.id);
    }
  } catch (error) {
    console.error("Error parsing cookie JSON:", error);
  }
  function priceFormated(value) {
    if (typeof value === "string") {
      return formateValue(value);
    } else {
      let valueText = value.toString();
      return formateValue(valueText);
    }
  }
  return renderTemplate`${renderComponent($$result, "UsuarioLayout", $$UsuarioLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="font-semibold mt-14 mb-10 text-lg">Mis compras</h1> <a href="/usuario/perfil" class="flex items-center my-2 font-semibold hover:text-gray-500">${renderComponent($$result2, "Back", $$Back, {})} Atras</a> <div class="w-full flex gap-2 mb-7 p-4 flex-col font-font-cust-2 overflow-y-auto max-h-96"> ${pedidos && pedidos.pedidos && pedidos.pedidos.length > 0 ? pedidos.pedidos.map((pedido) => renderTemplate`<article class="flex flex-col gap-2 border p-3 bg-[#f4f4f4]"> <div class="flex gap-4 justify-center"> <ul> <li class="text-center text-xs md:text-sm font-semibold">
Numero de pedido
</li> <li class="text-xs md:text-sm">
# ${pedido.id} </li> </ul> <ul> <li class="text-center text-xs md:text-sm  font-semibold">
Pago total
</li> <li class="text-center text-xs md:text-sm ">
$ ${priceFormated(pedido.pago_total)} </li> </ul> <ul> <li class="text-center  text-xs md:text-sm font-semibold">
Estado del pedido
</li> <li class="text-xs md:text-sm"> ${pedido.estado_pedido || "El estado del pedido no se ha actualizado"} </li> </ul> </div> <span class="text-center font-semibold text-xs md:text-sm ">
Productos
</span> <div class="flex items-center justify-center border w-full py-2 gap-2 overflow-x-auto"> ${pedido.detalles_pedido.map((producto) => renderTemplate`<div class="flex flex-col justify-center p-3 items-center border bg-white "> <img${addAttribute(producto.Producto.image, "src")}${addAttribute(producto.Producto.nombre, "alt")} class="size-20"> <ul> <li class="text-xs text-center">
Cantidad:${" "} <strong>${producto.cantidad}</strong> </li> <li class="text-xs text-center text-balance ">
Ref: ${producto.Producto.referencia} </li> <li class="text-xs text-center text-balance "> ${producto.Producto.nombre} </li> </ul> </div>`)} </div> </article>`) : renderTemplate`<p>No hay pedidos</p>`} </div> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/usuario/compras.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/usuario/compras.astro";
const $$url = "/usuario/compras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Compras,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
