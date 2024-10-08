import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro, F as Fragment } from './astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { f as formateValue } from './formatearValor_CeQA56j4.mjs';
import { c as calcularDescuento } from './calcularDescuento_DQZrJtA1.mjs';

const $$Astro = createAstro();
const $$CardProductos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProductos;
  const { id, ref, img, nombre, descuento, precio, marca, categoria } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/detalle-producto/${id}`, "href")} class="card-producto rounded-sm flex flex-col justify-between w-[10em] md:w-[16em] p-3 h-auto md:min-h-[25em] bg-white border hover:shadow-md duration-150"${addAttribute(marca, "data-marca")}${addAttribute(categoria, "data-categoria")}> <div class="flex w-full justify-between items-center mb-1"> <span${addAttribute(`${descuento ? "bg-red-600" : "bg-white"} py-1 px-2 md:px-4 text-xs md:text-sm text-white font-semibold`, "class")}> ${descuento ? `${descuento} %` : ""} </span> <span class="text-gray-700 text-[8px] md:text-[10px] uppercase">REF: ${ref}</span> </div> <picture> <img${addAttribute(img, "src")} alt="Imagen del producto" class="w-[7em] md:w-[10em] mx-auto hover:scale-105 duration-200" loading="lazy"> </picture> <div class="mt-2 flex flex-col justify-between gap-2 flex-grow"> <ul class="flex flex-col justify-center items-center leading-3"> <li class="text-gray-400 text-xs font-semibold mt-3 uppercase"> ${marca} </li> <li class="text-xs md:text-sm leading-5 text-center">${nombre}</li> ${descuento ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li class="mt-2 line-through text-xs md:text-sm font-semibold text-red-700 opacity-[50%]">
$ ${formateValue(precio)} </li> <li class="text-sm md:text-lg my-2 font-semibold">
$ ${calcularDescuento(precio, descuento)} </li> ` })}` : renderTemplate`<li class="text-sm md:text-lg font-semibold mt-4">
$ ${formateValue(precio)} </li>`} </ul> <div class="flex justify-center w-full"> <button class="bg-blue-700 border-none py-2 text-[10px] max-w-[60%] mt-2 text-white rounded-sm hover:bg-blue-500 duration-100 md:text-sm w-full">
Ver producto
</button> </div> </div> </a>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/cards/CardProductos.astro", void 0);

export { $$CardProductos as $ };
