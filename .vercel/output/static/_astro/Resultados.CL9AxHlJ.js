import{j as e}from"./jsx-runtime.D5qyYPMi.js";import{r}from"./index.CZlPm10g.js";import{f as i,a as d}from"./calcularDescuento.CXg88ned.js";const x=({discount:t,id:a,image:s,marca:n,nombre:m,referencia:c,valor:l})=>e.jsxs("a",{href:`/detalle-producto/${a}`,className:"card-producto rounded-sm flex flex-col justify-between w-[10em] md:w-[16em] p-3 h-auto md:min-h-[25em] bg-white border hover:shadow-md duration-150",children:[e.jsxs("div",{className:"flex w-full justify-between items-center mb-1",children:[e.jsx("span",{className:`${t?"bg-red-600":"bg-white"} py-1 px-2 md:px-4 text-xs md:text-sm text-white font-semibold`,children:t?`${t} %`:""}),e.jsxs("span",{className:"text-gray-700 text-[8px] md:text-[10px] uppercase",children:["REF: ",c]})]}),e.jsx("picture",{children:e.jsx("img",{src:s,alt:"Imagen del producto",className:"w-[7em] md:w-[10em] mx-auto hover:scale-105 duration-200",loading:"lazy"})}),e.jsxs("div",{className:"mt-2 flex flex-col justify-between gap-2 flex-grow",children:[e.jsxs("ul",{className:"flex flex-col justify-center items-center leading-3",children:[e.jsx("li",{className:"text-gray-400 text-xs font-semibold mt-3 uppercase",children:n}),e.jsx("li",{className:"text-xs md:text-sm leading-5 text-center",children:m}),t?e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"mt-2 line-through text-xs md:text-sm font-semibold text-red-700 opacity-[50%]",children:["$ ",i(l)]}),e.jsxs("li",{className:"text-sm md:text-lg my-2 font-semibold",children:["$ ",d(l,t)]})]}):e.jsxs("li",{className:"text-sm md:text-lg font-semibold mt-4",children:["$ ",i(l)]})]}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("button",{className:"bg-blue-700 border-none py-2 text-[10px] max-w-[60%] mt-2 text-white rounded-sm hover:bg-blue-500 duration-100 md:text-sm w-full",children:"Ver producto"})})]})]}),o=()=>e.jsxs("div",{className:"flex flex-col md:flex-row w-full justify-center items-center gap-3 md:w-[60%] mt-2 p-4",children:[e.jsx("div",{className:"flex  justify-start items-center ",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-world-search size-32 md:size-52 stroke-gray-500",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M21 12a9 9 0 1 0 -9 9"}),e.jsx("path",{d:"M3.6 9h16.8"}),e.jsx("path",{d:"M3.6 15h7.9"}),e.jsx("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),e.jsx("path",{d:"M12.5 3a16.984 16.984 0 0 1 2.574 8.62"}),e.jsx("path",{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}),e.jsx("path",{d:"M20.2 20.2l1.8 1.8"})]})}),e.jsxs("div",{className:"font-font-cust-2 ",children:[e.jsx("h4",{className:"text-base md:text-lg font-semibold text-balance",children:"No hemos encontrados resultados de tu busqueda"}),e.jsx("h5",{className:"text-sm md:text-base",children:"Puedes intentar lo siguiente."}),e.jsxs("ul",{className:"pl-6",children:[e.jsx("li",{className:"list-disc text-xs md:text-sm text-gray-600",children:"Comprueba los términos introducidos."}),e.jsx("li",{className:"list-disc text-xs md:text-sm text-gray-600",children:"Intenta utilizar una sola palabra."}),e.jsx("li",{className:"list-disc text-xs md:text-sm text-gray-600",children:"Utiliza términos genéricos en la búsqueda."})]})]})]}),j=()=>{const[t,a]=r.useState([]);return r.useEffect(()=>{const s=JSON.parse(sessionStorage.getItem("resultado-busqueda")||"[]");a(s)},[]),e.jsxs("article",{className:"w-[90%] mx-auto flex flex-col items-center justify-center ",children:[e.jsxs("span",{className:"font-semibold mb-2",children:[t.length," productos"]}),e.jsx("div",{className:"flex gap-4 flex-wrap items-center justify-center w-full",children:t&&t.length>0?t.map(s=>e.jsx(x,{id:s.id,discount:s.discount,nombre:s.marca,description:s.description,subcategoria:s.subcategoria,image:s.image,marca:s.marca,valor:s.valor,referencia:s.referencia})):e.jsx(o,{})})]})};export{j as default};
