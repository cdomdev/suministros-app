import{j as s}from"./jsx-runtime.D5qyYPMi.js";import{c as f}from"./calcularCostoDeEnvio.6gq9u7_a.js";import{c as j}from"./calcularSubTotal.CS-5btoS.js";import{f as r}from"./calcularDescuento.CXg88ned.js";import{r as t}from"./index.CZlPm10g.js";import{c as h}from"./calcularPago.CQuJdh9u.js";const S=()=>{const[a,l]=t.useState([]),[o,c]=t.useState();t.useEffect(()=>{const e=JSON.parse(localStorage.getItem("carrito")||"[]"),d=JSON.parse(localStorage.getItem("dataUserForBuy")||"[]");l(e),c(d)},[]);const n=h(a),i=o?.destino||"0",x=f({destino:i,precio:n}),m=r(x.toString());return s.jsxs("div",{className:" max-h-96 overflow-y-auto ",children:[s.jsxs("span",{className:"text-xs md:text-sm leading-5 text-balance flex flex-col",children:["Este es el costo de envio de tu compra",s.jsxs("span",{children:[s.jsxs("strong",{children:["Costo de envio: $: ",m]})," "]})]}),a.map(e=>s.jsxs("div",{className:"flex flex-col  border bg-white my-2 p-1",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx("img",{src:e.image,alt:e.nombre,className:"size-24 md:size-32 mb-2"}),s.jsxs("div",{children:[s.jsxs("p",{className:"text-xs md:text-sm text-balance",children:[s.jsx("strong",{children:"Producto: "})," ",e.nombre]}),s.jsxs("span",{className:"text-xs md:text-sm flex gap-1",children:[s.jsx("strong",{children:"Precio unidad:"})," ",r(e.valor)]}),s.jsxs("span",{className:"text-xs md:text-sm flex gap-1",children:[s.jsx("strong",{children:"Cantidada:"})," ",e.quantity]}),s.jsxs("span",{className:"text-xs md:text-sm flex gap-1",children:[s.jsx("strong",{children:"Referencia:"})," ",e.referencia]}),s.jsxs("span",{className:"text-xs md:text-sm flex gap-1",children:[s.jsx("strong",{children:"Descuento:"})," ",e.discount||0,"% "]})]})]}),s.jsx("div",{className:"w-full border",children:s.jsxs("span",{className:"p-3 text-sm ",children:[" ",s.jsx("strong",{children:"Subtotal:"}),"  ",j(e)]})})]},e.id))]})};export{S as default};
