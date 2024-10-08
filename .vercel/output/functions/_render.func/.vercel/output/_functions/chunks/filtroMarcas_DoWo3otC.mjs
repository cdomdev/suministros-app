import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro } from './astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import 'clsx';

const obtenerMarcasUnicas = (productos) => {
  const marcasUnicas = [
    ...new Set(productos.map((producto) => producto.marca))
  ];
  return marcasUnicas;
};

const $$Astro = createAstro();
const $$FiltroMarcas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FiltroMarcas;
  const { marca } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> <li> <input class="m-2 rounded-[3px] w-3 uppercase h-3 focus:ring-2" type="checkbox" name="marca"${addAttribute(marca, "value")}${addAttribute(marca, "id")}> <label${addAttribute(marca, "for")}>${marca}</label> </li> </ul>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/filtros/filtroMarcas.astro", void 0);

export { $$FiltroMarcas as $, obtenerMarcasUnicas as o };
