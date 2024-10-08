import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dyyqigx1.mjs';
import { manifest } from './manifest_Da0VyKce.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/cambios-y-devoluciones.astro.mjs');
const _page3 = () => import('./pages/carrito-de-compras.astro.mjs');
const _page4 = () => import('./pages/categoria/_categoria_.astro.mjs');
const _page5 = () => import('./pages/costos-de-envio.astro.mjs');
const _page6 = () => import('./pages/detalle-producto/_id_.astro.mjs');
const _page7 = () => import('./pages/informacion-para-envio.astro.mjs');
const _page8 = () => import('./pages/medios-de-pago.astro.mjs');
const _page9 = () => import('./pages/ofertas.astro.mjs');
const _page10 = () => import('./pages/olvide-mi-contraseña.astro.mjs');
const _page11 = () => import('./pages/pago.astro.mjs');
const _page12 = () => import('./pages/politica-de-proteccion-de-datos.astro.mjs');
const _page13 = () => import('./pages/registro.astro.mjs');
const _page14 = () => import('./pages/restablecer-contrasenia/_token_.astro.mjs');
const _page15 = () => import('./pages/resultado-busqueda/_nombre_.astro.mjs');
const _page16 = () => import('./pages/sobre-nosotros.astro.mjs');
const _page17 = () => import('./pages/subcategoria/_subcategoria_.astro.mjs');
const _page18 = () => import('./pages/success/_dato_.astro.mjs');
const _page19 = () => import('./pages/usuario/actualizar-datos.astro.mjs');
const _page20 = () => import('./pages/usuario/compras.astro.mjs');
const _page21 = () => import('./pages/usuario/perfil.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/Cambios-y-devoluciones.astro", _page2],
    ["src/pages/carrito-de-compras.astro", _page3],
    ["src/pages/categoria/[categoria].astro", _page4],
    ["src/pages/Costos-de-envio.astro", _page5],
    ["src/pages/detalle-producto/[id].astro", _page6],
    ["src/pages/informacion-para-envio.astro", _page7],
    ["src/pages/Medios-de-pago.astro", _page8],
    ["src/pages/Ofertas.astro", _page9],
    ["src/pages/Olvide-mi-contraseña.astro", _page10],
    ["src/pages/pago.astro", _page11],
    ["src/pages/Politica-de-proteccion-de-datos.astro", _page12],
    ["src/pages/registro.astro", _page13],
    ["src/pages/restablecer-contrasenia/[token].astro", _page14],
    ["src/pages/resultado-busqueda/[nombre].astro", _page15],
    ["src/pages/Sobre-nosotros.astro", _page16],
    ["src/pages/subcategoria/[subcategoria].astro", _page17],
    ["src/pages/success/[dato].astro", _page18],
    ["src/pages/usuario/actualizar-datos.astro", _page19],
    ["src/pages/usuario/compras.astro", _page20],
    ["src/pages/usuario/perfil.astro", _page21],
    ["src/pages/index.astro", _page22]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3ae52935-4c9d-40c1-81d4-b33c95e4b9f5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
