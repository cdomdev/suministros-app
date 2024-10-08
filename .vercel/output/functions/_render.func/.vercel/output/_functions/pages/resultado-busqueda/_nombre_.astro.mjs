/* empty css                                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B7kJxfQl.mjs';
export { renderers } from '../../renderers.mjs';

const $$nombre = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "aqui estan resultados de tu bsuqueda" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-12"> <h1 class="text-sm lg:text-lg font-semibold text-center uppercase">
Resutados de busqueda
</h1> ${renderComponent($$result2, "Resultados", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/buscador/Resultados.tsx", "client:component-export": "default" })} </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/resultado-busqueda/[nombre].astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/resultado-busqueda/[nombre].astro";
const $$url = "/resultado-busqueda/[nombre]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$nombre,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
