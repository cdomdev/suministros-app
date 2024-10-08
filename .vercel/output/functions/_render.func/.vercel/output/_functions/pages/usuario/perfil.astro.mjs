/* empty css                                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$UsuarioLayout } from '../../chunks/UsuarioLayout_q0IYpoBT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Perfil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Perfil;
  const cookies = Astro2.cookies;
  const authToken = cookies.get("access_token");
  const userSessionCookie = cookies.get("user_sesion");
  const userSessionString = userSessionCookie ? userSessionCookie.value : null;
  let data = null;
  if (!authToken) {
    return Astro2.redirect("/");
  }
  try {
    data = userSessionString ? JSON.parse(userSessionString) : null;
  } catch (error) {
    console.error("Error parsing cookie JSON:", error);
  }
  return renderTemplate`${renderComponent($$result, "UsuarioLayout", $$UsuarioLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="font-semibold mt-14 mb-10 text-lg">Perfil</h1> <div class="w-full flex gap-10 md:gap-72 mb-7"> <div class="flex gap-3 flex-col"> <div class="flex flex-col"> <p class="font-bold text-sm">Nombre</p> <p class="text-sm text-[#8e8e8e]">${data?.nombre}</p> </div> <div class="flex flex-col"> <p class="font-bold text-sm">Direccion de envio</p> <p class="text-sm text-[#8e8e8e]"> ${data?.direccion || "No tienes una direccion registrada"} </p> </div> </div> <div class="flex gap-3 flex-col"> <div class="flex flex-col"> <p class="font-bold text-sm">Correo electronico</p> <p class="text-sm text-[#8e8e8e]">${data?.email}</p> </div> <div class="flex flex-col"> <p class="font-bold text-sm">Telefono</p> <p class="text-sm text-[#8e8e8e]"> ${data?.telefono || "No tienes un telefono registrado"} </p> </div> </div> </div> <div class="w-full bg-[#e0e0e0] p-3 min-w-[90%]"> <strong>¡Nota!</strong> <p class="text-sm text-pretty">
Si tu inicio de sesión es realizado a través de una cuenta de
            Google, los datos actualizados en este perfil no se veran reflejados
            en tu cuenta.
</p> </div> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/usuario/perfil.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/usuario/perfil.astro";
const $$url = "/usuario/perfil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Perfil,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
