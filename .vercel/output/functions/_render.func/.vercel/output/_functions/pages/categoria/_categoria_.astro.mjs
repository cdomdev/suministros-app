/* empty css                                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, b as renderComponent, F as Fragment } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$CardProductos } from '../../chunks/CardProductos_B3fydf9j.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B7kJxfQl.mjs';
import { b as getProductos } from '../../chunks/productos_DMIl94LL.mjs';
import { o as obtenerMarcasUnicas, $ as $$FiltroMarcas } from '../../chunks/filtroMarcas_DoWo3otC.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const subcategoriasUnicas = (productos) => {
  const subcategorias = [
    ...new Set(
      productos.map((producto) => producto.subcategoria.nombre)
    )
  ];
  return subcategorias;
};

const $$Astro$2 = createAstro();
const $$FiltrosCategorias = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FiltrosCategorias;
  const { categoria } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> <li> <input class="m-2 rounded-[3px] w-3 h-3 focus:ring-2 uppercase" type="checkbox" name="categoria"${addAttribute(categoria, "value")}${addAttribute(categoria, "id")}> <label${addAttribute(categoria, "for")}>${categoria}</label> </li> </ul>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/filtros/filtrosCategorias.astro", void 0);

const $$Astro$1 = createAstro();
const $$MigajasCategoria = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MigajasCategoria;
  const { pagina } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pl-6 mb-3 pt-10"> <nav class="flex" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"> <li class="inline-flex items-center"> <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"> <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path> </svg>
Incio
</a> </li> <li aria-current="page"> <div class="flex items-center"> <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">${pagina}</span> </div> </li> </ol> </nav> </div>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/migajas/MigajasCategoria.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$categoria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$categoria;
  const { categoria } = Astro2.params;
  let dataresponse = null;
  let marcasUnicas = null;
  let categoriasUnicas = null;
  const categoriaParseade = categoria?.toUpperCase();
  const migajasTexParseada = categoria?.replaceAll("-", " ");
  try {
    dataresponse = await getProductos("categorias", `${categoria}`);
    if (dataresponse) {
      marcasUnicas = obtenerMarcasUnicas(dataresponse.productos);
      categoriasUnicas = subcategoriasUnicas(dataresponse.productos);
    }
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": categoriaParseade || "" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<section class="w-full px-3 mx-auto flex flex-col md:grid gap-1 md:gap-2 md:grid-cols-cat-cust"> <aside class="px-2 md:px-5 hidden md:flex"> <div class="mt-2 w-full"> <h1 class="text-lg font-semibold uppercase">', '</h1> <span class="text-gray-500 uppercase text-[12px] mb-2">Filtros*</span> <div class="w-full bg-[#ececec] py-3 flex justify-start px-2"> <h2 class="text-[18px]">Categor\xEDas</h2> </div> <div class="pl-3 uppercase"> ', ' </div> <div class="w-full bg-[#ececec] py-3 flex justify-start px-2"> <h2 class="text-[18px]">Marcas</h2> </div> <div class="pl-3"> ', ' </div> </div> </aside> <section class="flex w-full flex-wrap p-2 justify-center flex-col"> <span', "> ", ' Productos\n</span> <div id="mensaje-no-productos" class="w-full justify-center text-base md:text-xl items-center text-red-500 font-semibold hidden text-center">\nNo hay productos disponibles.\n</div> <div class="w-full gap-x-2 gap-y-2 md:gap-8 flex flex-wrap"> ', ` </div> </section> <script type="module">
      document.addEventListener("DOMContentLoaded", () => {
        const filtroMarcas = document.querySelectorAll('input[name="marca"]');
        const filtroCategorias = document.querySelectorAll(
          'input[name="categoria"]',
        );
        const productos = document.querySelectorAll(".card-producto");
        const mensajeNoProductos = document.querySelector(
          "#mensaje-no-productos",
        );
        const noProductosCount = document.querySelector("#no-productos");

        function aplicarFiltros() {
          const marcasSeleccionadas = Array.from(filtroMarcas)
            .filter((input) => input.checked)
            .map((input) => input.value);
          const categoriasSeleccionadas = Array.from(filtroCategorias)
            .filter((input) => input.checked)
            .map((input) => input.value);

          let hayProductosVisibles = false;

          productos.forEach((producto) => {
            const marca = producto.getAttribute("data-marca");
            const categoria = producto.getAttribute("data-categoria");

            const mostrarProducto =
              (marcasSeleccionadas.length === 0 ||
                marcasSeleccionadas.includes(marca)) &&
              (categoriasSeleccionadas.length === 0 ||
                categoriasSeleccionadas.includes(categoria));

            producto.style.display = mostrarProducto ? "block" : "none";

            if (mostrarProducto) {
              hayProductosVisibles = true;
            }
          });

          mensajeNoProductos.style.display = hayProductosVisibles
            ? "none"
            : "block";

          noProductosCount.style.display = hayProductosVisibles
            ? "none"
            : "block";
        }

        filtroMarcas.forEach((input) =>
          input.addEventListener("change", aplicarFiltros),
        );
        filtroCategorias.forEach((input) =>
          input.addEventListener("change", aplicarFiltros),
        );

        // Inicializar estado del mensaje al cargar
        aplicarFiltros();
      });
    <\/script> </section> `])), renderComponent($$result2, "MigajasCategoria", $$MigajasCategoria, { "pagina": migajasTexParseada || "" }), maybeRenderHead(), categoria, categoriasUnicas && categoriasUnicas.length > 0 ? categoriasUnicas.map((categoria2) => renderTemplate`${renderComponent($$result2, "FiltrosCategorias", $$FiltrosCategorias, { "categoria": categoria2 })}`) : renderTemplate`<div class="my-2 flex justify-center"> <p>No hay categorias disponibles</p> </div>`, marcasUnicas && marcasUnicas.length > 0 ? marcasUnicas.map((marca) => renderTemplate`${renderComponent($$result2, "FiltroMarcas", $$FiltroMarcas, { "marca": marca })}`) : renderTemplate`<div class="my-2 flex justify-center uppercase"> <p>No hay marcas disponibles</p> </div>`, addAttribute(`text-sm md:text-base font-light uppercase mb-3 ${dataresponse && dataresponse?.productos?.length > 0 ? "block" : "hidden"}`, "class"), dataresponse?.productos?.length, dataresponse && dataresponse.productos.length > 0 ? dataresponse.productos.map((producto) => renderTemplate`${renderComponent($$result2, "CardProductos", $$CardProductos, { "id": producto.id, "img": producto.image, "precio": producto.valor, "ref": producto.referencia, "nombre": producto.nombre, "descuento": producto.discount, "marca": producto.marca, "categoria": producto.subcategoria.nombre })}`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {})}`) })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/categoria/[categoria].astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/categoria/[categoria].astro";
const $$url = "/categoria/[categoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$categoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
