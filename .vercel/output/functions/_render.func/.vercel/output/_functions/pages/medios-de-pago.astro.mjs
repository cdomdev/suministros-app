/* empty css                                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_4IY5Lr4e.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B7kJxfQl.mjs';
export { renderers } from '../renderers.mjs';

const $$MediosDePago = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "medio de pago" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-80 md:max-w-screen-sm lg:max-w-screen-lg m-auto pt-3 font-font-cust-2"> <h1 class="font-bold uppercase text-center text-base md:text-lg pt-7">
Medios de Pago
</h1> <h2 class="font-bold uppercase text-md md:text-base mt-4">
Pago con Mercado Pago
</h2> <article> <p class="text-sm md:text-base mt-2 text-wrap">
Mercado Pago es una plataforma segura y confiable que te permite
                realizar pagos en línea de manera fácil y rápida. A través de
                Mercado Pago, puedes pagar con las siguientes opciones:
</p> <ul class="text-sm md:text-base mt-2 text-wrap pl-6"> <li class="list-disc mb-1 text-wrap"> <strong>Tarjetas de Crédito:</strong> Visa, MasterCard, American
                    Express, Diners Club, y otras.
</li> <li class="list-disc mb-1 text-wrap"> <strong>Tarjetas de Débito:</strong> Visa Débito, Maestro, y
                    otras.
</li> <li class="list-disc mb-1 text-wrap"> <strong>Otros Medios:</strong> Transferencias bancarias, pagos
                    en efectivo a través de puntos de pago autorizados.
</li> </ul> <h2 class="font-bold uppercase text-md md:text-base mt-3">
¿Como realizar un compra con mercado pago?
</h2> <p class="text-sm md:text-base mt-2 text-wrap">
Para realizar un pago con Mercado Pago, simplemente selecciona
                esta opción al finalizar tu compra y sigue los pasos indicados
                por la plataforma. Una vez completado el pago, recibirás una
                confirmación por correo electrónico.
</p> <h2 class="font-bold uppercase text-md md:text-base mt-3">
¿Que intereses me genera la compra con mercadopago?
</h2> <p>
Suministros como tieda vistual y proveedore de los propductos
                sobre los cuales realices tus compras, no generara interes a tus
                tarjetas o medio de pago seleccionado, los intereses seran
                aplicados directamente por tu banco
</p> <h2 class="font-bold uppercase text-md md:text-base mt-3">
Pago Contra Entrega
</h2> <p class="text-sm md:text-base mt-2 text-wrap">
Si prefieres pagar al momento de recibir tu producto, puedes
                optar por la opción de Pago Contra Entrega. Esta modalidad está
                disponible en los siguientes casos:
</p> <ul class="text-sm md:text-base mt-2 text-wrap pl-6"> <li class="list-disc mb-1 text-wrap"> <strong>Entrega a Domicilio:</strong> Paga en efectivo al recibir
                    tu pedido en la dirección que nos indiques. Asegúrate de tener
                    el monto exacto ya que nuestros repartidores pueden no contar
                    con cambio suficiente.
</li> </ul> <p class="text-sm md:text-base mt-2 text-wrap">
Para seleccionar la opción de Pago Contra Entrega, elige esta
                modalidad al momento de finalizar tu compra y asegúrate de
                verificar los detalles de tu pedido y la dirección de entrega.
</p> <h3 class="font-bold uppercase text-sm md:text-md mt-3">
¿Qué debes tener en cuenta al elegir Pago Contra Entrega?
</h3> <ul class="text-sm md:text-base mt-2 text-wrap pl-6 pb-3"> <li class="list-disc mb-1 text-wrap">
Tener el valor total en efectivo.
</li> <li class="list-disc mb-1 text-wrap">
Recuerda que debes tener el dinero de la compra exacto, pues
                    la persona encargada de entregarte el producto no maneja
                    efectivo para dar cambio.
</li> </ul> </article> </section> ` })}`;
}, "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/Medios-de-pago.astro", void 0);

const $$file = "C:/Users/domin/OneDrive - SENA/Escritorio/suministros-app/src/pages/Medios-de-pago.astro";
const $$url = "/Medios-de-pago";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MediosDePago,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
