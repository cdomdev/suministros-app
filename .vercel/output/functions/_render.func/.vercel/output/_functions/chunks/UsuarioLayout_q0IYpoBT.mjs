import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro, a as addAttribute, e as renderSlot } from './astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { l as logout, $ as $$Layout } from './Layout_B7kJxfQl.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
/* empty css                                    */

const $$PerfilDef = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative size-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> <svg class="absolute size-16 text-gray-400 -left-[2px] md:-left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> </div>`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/components/icons/PerfilDef.astro", void 0);

const BtnLogout = () => {
  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: handleLogout,
      className: "w-full hover:bg-red-500 duration-150 text-center hover:text-white items-center justify-center border flex py-2 rounded-sm",
      children: [
        "Cerrar sesión",
        /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "icon icon-tabler icon-tabler-logout size-7",
            width: "44",
            height: "44",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "#2c3e50",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                }
              ),
              /* @__PURE__ */ jsx("path", { d: "M9 12h12l-3 -3" }),
              /* @__PURE__ */ jsx("path", { d: "M18 15l3 -3" })
            ]
          }
        )
      ]
    }
  );
};

const $$Astro = createAstro();
const $$UsuarioLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UsuarioLayout;
  const cookies = Astro2.cookies;
  const userSessionCookie = cookies.get("user_sesion");
  const userSessionString = userSessionCookie ? userSessionCookie.value : null;
  let userSession = null;
  try {
    userSession = userSessionString ? JSON.parse(userSessionString) : null;
  } catch (error) {
    console.error("Error parsing cookie JSON:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Hola ${userSession?.nombre}`, "data-astro-cid-c6m2uxtn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-16 font-font-cust-2 lg:grid lg:grid-cols-col-cust-5 mx-auto w-[90%] gap-2" data-astro-cid-c6m2uxtn> <aside class="p-2 flex flex-col gap-2" data-astro-cid-c6m2uxtn> <div class="flex flex-col items-center" data-astro-cid-c6m2uxtn> ${userSession.picture ? renderTemplate`<img${addAttribute(userSession?.picture, "src")} class="rounded-full" data-astro-cid-c6m2uxtn>` : renderTemplate`${renderComponent($$result2, "PerfilDef", $$PerfilDef, { "data-astro-cid-c6m2uxtn": true })}`} <span class="flex flex-col justify-center items-center" data-astro-cid-c6m2uxtn> <p class="font-bold my-2" data-astro-cid-c6m2uxtn>¡Hola!</p> <p class="text-sm font-semibold" data-astro-cid-c6m2uxtn>${userSession.nombre}</p> <p class="text-xs font-normal text-gray-500" data-astro-cid-c6m2uxtn>
¿Que quieres hacer hoy?
</p> </span> </div> <div class="text-[10px] leading-4 italic text-wrap bg-[#e0e0e0] p-2" data-astro-cid-c6m2uxtn> <p data-astro-cid-c6m2uxtn>
Aquí puedes ver la información de tu perfil y ver tu
                    historial de compras.
</p> </div> <nav data-astro-cid-c6m2uxtn> <ul class="flex flex-col gap-2" data-astro-cid-c6m2uxtn> <li data-astro-cid-c6m2uxtn> <a href="/usuario/compras" class="duration-150 py-2 border hover:bg-blue-600 hover:text-white" data-astro-cid-c6m2uxtn>Ver mis compras <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-seam size-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-c6m2uxtn> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-c6m2uxtn></path> <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" data-astro-cid-c6m2uxtn></path> <path d="M12 12l8 -4.5" data-astro-cid-c6m2uxtn></path> <path d="M8.2 9.8l7.6 -4.6" data-astro-cid-c6m2uxtn></path> <path d="M12 12v9" data-astro-cid-c6m2uxtn></path> <path d="M12 12l-8 -4.5" data-astro-cid-c6m2uxtn></path> </svg></a> </li> <li data-astro-cid-c6m2uxtn> ${renderComponent($$result2, "BtnLogout", BtnLogout, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/usuario/BtnLogout", "client:component-export": "default", "data-astro-cid-c6m2uxtn": true })} </li> </ul> </nav> </aside> <article data-astro-cid-c6m2uxtn> ${renderSlot($$result2, $$slots["default"])} </article> </section> ` })} `;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/layouts/UsuarioLayout.astro", void 0);

export { $$UsuarioLayout as $ };
