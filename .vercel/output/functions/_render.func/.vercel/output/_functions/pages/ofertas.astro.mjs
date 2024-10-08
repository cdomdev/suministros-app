/* empty css                                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as renderComponent } from '../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$CardProductos } from '../chunks/CardProductos_B3fydf9j.mjs';
import { $ as $$Layout } from '../chunks/Layout_B7kJxfQl.mjs';
import { a as getOfertas } from '../chunks/productos_DMIl94LL.mjs';
import { $ as $$Spiner } from '../chunks/Spiner_BnSuU3zh.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$MigajasOfertas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MigajasOfertas;
  const { pagina } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-3 pt-10"> <nav class="flex" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"> <li class="inline-flex items-center"> <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"> <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path> </svg>
Incio
</a> </li> <li aria-current="page"> <div class="flex items-center"> <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">${pagina}</span> </div> </li> </ol> </nav> </div>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/migajas/migajasOfertas.astro", void 0);

const $$Ofertas = createComponent(async ($$result, $$props, $$slots) => {
  let ofertas = null;
  try {
    ofertas = await getOfertas();
  } catch (error) {
    console.error(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ofertas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-3 px-0 md:px-10"> ${renderComponent($$result2, "MigajasOfertas", $$MigajasOfertas, { "pagina": "Ofertas" })} <h1 class="text-lg md:text-xl font-bold uppercase">
Grandes descuentos
</h1> <h2 class="text-base md:text-lg font-bold pt-2">
Aprovecha nuestras ofertas especiales y encuentra productos de
            calidad a precios irresistibles
</h2> <p class="text-xs md:text-base pt-1">
Aprovecha nuestras ofertas especiales y encuentra productos de
            calidad a precios unicos. nuestras ofertas te permitirán ahorrar en
            tus proyectos de renovación
</p> <div class="flex items-center flex-wrap justify-center gap-x-8 gap-y-4 py-4 w-full"> ${ofertas && ofertas.productos.length > 0 ? ofertas.productos.map((producto) => renderTemplate`${renderComponent($$result2, "CardProductos", $$CardProductos, { "id": producto.id, "ref": producto.referencia, "img": producto.image, "nombre": producto.nombre, "descuento": producto.discount, "marca": producto.marca, "precio": producto.valor, "categoria": producto.subcategoria?.nombre || "Sin categor\xEDa" })}`) : renderTemplate`${renderComponent($$result2, "Spiner", $$Spiner, {})}`} </div> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/Ofertas.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/Ofertas.astro";
const $$url = "/Ofertas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ofertas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
