/* empty css                                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, b as renderComponent } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B7kJxfQl.mjs';
import { o as obtenerMarcasUnicas, $ as $$FiltroMarcas } from '../../chunks/filtroMarcas_DoWo3otC.mjs';
import 'clsx';
import { b as getProductos } from '../../chunks/productos_DMIl94LL.mjs';
import { $ as $$CardProductos } from '../../chunks/CardProductos_B3fydf9j.mjs';
import { $ as $$Spiner } from '../../chunks/Spiner_BnSuU3zh.mjs';
export { renderers } from '../../renderers.mjs';

const contenidos = {
  sanitarios: {
    titulo: "Sanitarios",
    subTitulo: "Sanitarios que combinan estilo y funcionalidad.",
    texto: "Desde inodoros elegantes hasta bidés prácticos, nuestra colección ofrece opciones para todo tipo de baños.",
    categoria: "Baños"
  },
  griferias: {
    titulo: "Griferías",
    subTitulo: "Transforma tu cocina y baño con nuestras griferias de ultima generacion.",
    texto: "Con una variedad de estilos y acabados, nuestras griferías no solo son elegantes, sino también duraderas y funcionales.",
    categoria: "Baños"
  },
  espejos: {
    titulo: "Espejos",
    subTitulo: "Amplia tus espacios con nuestros espejos de diseño para cada rincon del hogar.",
    texto: "Desde espejos decorativos hasta espejos de aumento, encontrarás la pieza perfecta para añadir profundidad y elegancia a tus espacios.",
    categoria: "Baños"
  },
  lavaplatos: {
    titulo: "Lavaplatos",
    subTitulo: "Encuantra la solucion perfectra para mantener utencilios limpios y reluciones.",
    texto: "Diseñados para ofrecer un rendimiento excepcional, nuestros lavaplatos te ayudarán a mantener tu cocina impecable con facilidad",
    categoria: "Cocinas"
  },
  lavaderos: {
    titulo: "Lavadores",
    subTitulo: "Descubre soluciones practicas para hacer del lavado una tarea mas comoda y eficiente.",
    texto: "Desde lavaderos de acero inoxidable hasta modelos de resina, encontrarás la solución perfecta para tus necesidades de lavandería.",
    categoria: "Cocinas"
  },
  pinturas: {
    titulo: "Pinturas",
    subTitulo: "Descubre colores bibrantes y acabados perfectos para cada uno de tus proyectos",
    texto: "Nuestra gama de colores vibrantes y acabados duraderos te permite crear ambientes que reflejen tu estilo y personalidad",
    categoria: "Construccion-y-remodelacion"
  },
  pegantes: {
    titulo: "Pegantes ceramicos",
    subTitulo: "Asegura la calidad de tus proyectos con nuestros pegantes ceramicos.",
    texto: "Nuestra fórmula especial garantiza una adhesión duradera para tus proyectos de revestimiento.",
    categoria: "Construccion-y-remodelacion"
  },
  limpiadores: {
    titulo: "Limpiadores",
    subTitulo: "Encuantra soluciones eficaces para dejar tus espacios implecables despues de la contruccion.",
    texto: "Diseñados para eliminar residuos de obra de manera eficaz, nuestros productos te ayudarán a destacar la calidad de tu trabajo.",
    categoria: "Construccion-y-remodelacion"
  },
  pisosceramicos: {
    titulo: "Pisos ceramicos",
    subTitulo: "Propuestas innovadoras para renovar tus suelos con elegancia",
    texto: "Encuentra el piso perfecto para tu hogar entre nuestra amplia selección, nuestros pisos combinan belleza y resisencia para satisfacer tus necesidades",
    categoria: "pisos-y-paredes"
  },
  paredes: {
    titulo: "Paredes",
    subTitulo: "Personaliza tus espacions con nuestro portafolio de paredes.",
    texto: "Nuestras opciones transformarán cualquier ambiente en un espacio único y acogedor.",
    categoria: "pisos-y-paredes"
  }
};

const $$Astro$1 = createAstro();
const $$MigajasSubcategorias = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MigajasSubcategorias;
  const { pagina, categoria } = Astro2.props;
  let categoriaSet = categoria?.replaceAll(" ", "-");
  return renderTemplate`${maybeRenderHead()}<div class="pl-6 mb-3 pt-10"> <nav class="flex" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"> <li class="inline-flex items-center"> <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"> <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path> </svg>
Incio
</a> </li> <li> <div class="flex items-center"> <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <a${addAttribute(`/categoria/${categoriaSet}`, "href")} class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">${categoria}</a> </div> </li> <li aria-current="page"> <div class="flex items-center"> <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">${pagina}</span> </div> </li> </ol> </nav> </div>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/migajas/MigajasSubcategorias.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$subcategoria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$subcategoria;
  const { subcategoria } = Astro2.params;
  let contenido;
  let dataresponse = null;
  let marcasUnicas = null;
  try {
    dataresponse = await getProductos("subcategorias", `${subcategoria}`);
    if (dataresponse) {
      marcasUnicas = obtenerMarcasUnicas(dataresponse.productos);
    }
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
  if (subcategoria && contenidos[subcategoria]) {
    contenido = contenidos[subcategoria];
  } else {
    contenido = {
      titulo: "",
      subTitulo: "",
      texto: "",
      categoria: ""
    };
  }
  const parsePagina = contenido.categoria.replaceAll("-", " ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": contenido?.titulo }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<section class="pt-2 flex flex-col px-4 md:grid-cols-cat-cust md:grid"> <aside class="px-2 md:px-5 hidden md:flex"> <div class="w-full"> <h2 class="text-lg font-semibold">', '</h2> <span class="text-gray-500 uppercase text-[12px] mb-2">Filtros*</span> <div class="w-full bg-[#ececec] py-3 flex justify-start px-2"> <h3 class="text-[18px]">Marcas</h3> </div> <div class="pl-3"> ', ' </div> </div> </aside> <article class="pl-2"> <h1 class="font-semibold text-lg lg:text-xl uppercase"> ', ' </h1> <h2 class="font-semibold text-base lg:text-lg"> ', ' </h2> <p class="text-wrap font-normal text-sm lg:text-base"> ', ' </p> <div class="w-full gap-x-2 gap-y-2 md:gap-8 flex flex-wrap mt-4"> ', ` </div> </article> <script type="module">
            document.addEventListener("DOMContentLoaded", () => {
                const filtroMarcas = document.querySelectorAll(
                    'input[name="marca"]',
                );
                const productos = document.querySelectorAll(".card-producto");
                const mensajeNoProductos = document.querySelector(
                    "#mensaje-no-productos",
                );

                if (!filtroMarcas.length || !productos.length) {
                    return;
                }

                function aplicarFiltros() {
                    const marcasSeleccionadas = Array.from(filtroMarcas)
                        .filter((input) => input.checked)
                        .map((input) => input.value);

                    let hayProductosVisibles = false;

                    productos.forEach((producto) => {
                        const marca = producto.getAttribute("data-marca");
                        const mostrarProducto =
                            marcasSeleccionadas.length === 0 ||
                            marcasSeleccionadas.includes(marca);
                        producto.style.display = mostrarProducto
                            ? "block"
                            : "none";

                        if (mostrarProducto) {
                            hayProductosVisibles = true;
                        }
                    });

                    mensajeNoProductos.style.display = hayProductosVisibles
                        ? "none"
                        : "block";
                }

                filtroMarcas.forEach((input) =>
                    input.addEventListener("change", aplicarFiltros),
                );

                // Inicializar estado del mensaje al cargar
                aplicarFiltros();
            });
        <\/script> </section> `])), renderComponent($$result2, "MigajasSubcategorias", $$MigajasSubcategorias, { "categoria": parsePagina, "pagina": contenido.titulo }), maybeRenderHead(), contenido.titulo, marcasUnicas && marcasUnicas.length > 0 ? marcasUnicas.map((marca) => renderTemplate`${renderComponent($$result2, "FiltroMarcas", $$FiltroMarcas, { "marca": marca })}`) : renderTemplate`<div class="my-2 flex justify-center"> <p>No hay marcas disponibles</p> </div>`, contenido?.titulo, contenido?.subTitulo, contenido?.texto, dataresponse && dataresponse.productos.length > 0 ? dataresponse.productos.map((producto) => renderTemplate`${renderComponent($$result2, "CardProductos", $$CardProductos, { "id": producto.id, "img": producto.image, "precio": producto.valor, "ref": producto.referencia, "nombre": producto.nombre, "descuento": producto.discount, "marca": producto.marca, "categoria": producto.subcategoria?.nombre || "Categor\xEDa desconocida" })}`) : renderTemplate`${renderComponent($$result2, "Spiner", $$Spiner, {})}`) })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/subcategoria/[subcategoria].astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/subcategoria/[subcategoria].astro";
const $$url = "/subcategoria/[subcategoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$subcategoria,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
