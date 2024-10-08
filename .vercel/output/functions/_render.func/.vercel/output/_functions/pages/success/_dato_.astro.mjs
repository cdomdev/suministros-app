/* empty css                                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B7kJxfQl.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$dato = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "compra realizada con exito", "data-astro-cid-bstfnlcp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-16 font-font-cust-2 container" data-astro-cid-bstfnlcp> <article class="w-full mx-auto lg:w-[50%] lg:mx-auto p-4 h-auto flex flex-col ticket" data-astro-cid-bstfnlcp> <div class="flex items-center justify-center mb-4" data-astro-cid-bstfnlcp> <h1 class="text-lg lg:text-2xl uppercase text-[#80c835]" data-astro-cid-bstfnlcp>
gracias por tu compra
</h1> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check size-8 md:size-10" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bstfnlcp> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-bstfnlcp></path> <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" data-astro-cid-bstfnlcp></path> <path d="M9 12l2 2l4 -4" data-astro-cid-bstfnlcp></path> </svg> </div> <h2 class="text-sm mt-2 md:text-xl text-center font-normal uppercase mb-5" data-astro-cid-bstfnlcp>
este es un resumen de tu pedido
</h2> ${renderComponent($$result2, "Detalles", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-bstfnlcp": true, "client:component-path": "@/components/tikect/Detalles", "client:component-export": "default" })} <hr class="border-dashed my-4" data-astro-cid-bstfnlcp> <div class="bg-[#e5e5e5] p-3" data-astro-cid-bstfnlcp> <p class="text-xs md:text-sm italic leading-3" data-astro-cid-bstfnlcp>
Su pedido estara listo de 3 a 5 dias habiles para municipio
                    o ciudades cercanas a bogota y de 5 a 8 dias habiles para
                    destino nacionales.
</p> </div> <a href="/" class="mt-4 text-center w-full md:w-[30%] mx-auto bg-[#e5e5e5] py-2 px-4 rounded-md hover:bg-[#c3c3c3] duration-200 flex items-center uppercase text-xs justify-center md:text-sm" data-astro-cid-bstfnlcp><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left size-4 md:size-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bstfnlcp> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-bstfnlcp></path> <path d="M5 12l14 0" data-astro-cid-bstfnlcp></path> <path d="M5 12l6 6" data-astro-cid-bstfnlcp></path> <path d="M5 12l6 -6" data-astro-cid-bstfnlcp></path> </svg>Volver al inicio</a> </article> </section> ` })} `;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/success/[dato].astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/success/[dato].astro";
const $$url = "/success/[dato]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$dato,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
