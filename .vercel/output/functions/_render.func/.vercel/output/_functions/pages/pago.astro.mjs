/* empty css                                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B7kJxfQl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Pago = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pago;
  const cookies = Astro2.cookies;
  const authToken = cookies.get("access_token");
  const isAuthenticated = authToken !== void 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vamos a procesar su pago" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-16 w-full items-center justify-center px-20"> ${renderComponent($$result2, "Steps", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Steps", "client:component-export": "Steps" })} </div> <section class="pt-10 flex flex-col lg:grid gap-2 w-[90%] m-auto font-font-cust-2 md:grid-cols-col-cust-4"> <article> <div class="border w-full bg-[#f4f4f4] py-2 px-3 flex gap-2 items-center"> <h2 class="font-normal text-base md:text-xl text-center">
Ya casi es tuya
</h2> </div> <div class="border mt-1 p-2"> ${renderComponent($$result2, "DatosPago", null, { "client:only": "react", "isAuthenticated": isAuthenticated, "client:component-hydration": "only", "client:component-path": "@/components/pago/DatosPago", "client:component-export": "default" })} </div> </article> <article> <div class="w-full bg-[#f4f4f4] border py-2 px-3"> <h2 class="font-normal text-base md:text-xl">
Resumen de tu compra
</h2> </div> <div class="border mt-1 p-2 bg-white"> <div class="p-1"> ${renderComponent($$result2, "DatosProductos", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/pago/DatosProductos", "client:component-export": "default" })} </div> </div> </article> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/pago.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/pago.astro";
const $$url = "/pago";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Pago,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
