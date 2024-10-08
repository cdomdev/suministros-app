import{j as e}from"./jsx-runtime.D5qyYPMi.js";import{r as m}from"./index.CZlPm10g.js";import{F as h,b as p,a as c,E as u}from"./formik.esm.CnOOgvCf.js";import{r as y}from"./auth.DD4wRTWl.js";import{T as k}from"./Toast.ClEPDOpx.js";import{a as j}from"./axios.C8DqakIB.js";import{S as w}from"./Spinner.Bod7GEZV.js";import"./ThemeProvider.C_HRE9zQ.js";class N{events={};subscribe(a,i){return this.events[a]||(this.events[a]=[]),this.events[a].push(i),()=>{this.events[a]=this.events[a].filter(r=>r!==i)}}emit(a,i){(this.events[a]||[]).forEach(n=>{typeof n=="function"&&n(i)})}}const v=new N,Z=()=>{const[b,a]=m.useState(""),[i,r]=m.useState(!1),[n,l]=m.useState(""),[x,g]=m.useState(!1),f=async(s,{resetForm:t})=>{g(!0);try{const o=await y(s);console.log(o),o.status===201&&(r(!0),l("toast-success"),a("Tu registro fue exitoso, ya puedes iniciar sesion en suministros"),t(),setTimeout(()=>{r(!1)},1e4),v.emit("authChange",!0),localStorage.setItem("infoProfileUSer",JSON.stringify(o.data)))}catch(o){if(j.isAxiosError(o)&&o.response){const{status:d}=o.response;console.log(d),d===409?(l("fail"),r(!0),a(`El email ${s.email} ya tiene una cuenta registrada`),setTimeout(()=>{r(!1)},5e3)):d===500&&(l("fail"),r(!0),a(`Hola ${s.nombre} no pudimos hacer tu registro, intentalo de nuevo`),setTimeout(()=>{r(!1)},5e3))}}finally{g(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{showToast:i,setShowToast:r,toastMessage:b,setToastMessage:a,bgToast:n,setBgToast:l}),e.jsx(h,{initialValues:{nombre:"",email:"",password:""},validate:s=>{const t={};return s.nombre||(t.nombre="¡Este campo no puede quedar vacio!"),s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s.email)||(t.email="Ingrese una dirección de correo válida"):t.email="¡Este campo no puede quedar vacio!",s.password?/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,10}$/.test(s.password)||(t.password="La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener un máximo de 10 caracteres"):t.password="¡Este campo no puede quedar vacio!",t},onSubmit:(s,{resetForm:t})=>f(s,{resetForm:t}),children:({handleSubmit:s})=>e.jsxs(p,{onSubmit:s,children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"nombre",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Ingrese su nombre"}),e.jsx(c,{type:"text",id:"nombre",name:"nombre",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"example"}),e.jsx(u,{name:"nombre",component:"div",className:"text-red-500 text-sm mt-1"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Ingrese su correo"}),e.jsx(c,{type:"email",id:"email",name:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"example@sumi.com"}),e.jsx(u,{name:"email",component:"div",className:"text-red-500 text-sm mt-1"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"flex justify-between mb-2",children:e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-900 dark:text-white",children:"Registre su contraseña"})}),e.jsx(c,{type:"password",id:"password",name:"password",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"}),e.jsx(u,{name:"password",component:"div",className:"text-red-500 text-sm mt-1"})]}),e.jsxs("div",{className:"bg-[#f4f4f4f4] text-sm  font-medium leading-4 p-2 mb-3",children:[e.jsx("p",{className:"pt-2 mb-1",children:"Tenga en cuanta lo siguiente:"}),e.jsxs("ul",{className:"text-xs pl-7",children:[e.jsx("li",{className:" list-disc",children:"La contraseña debe contener al menos una mayúscula"}),e.jsx("li",{className:" list-disc",children:"La contraseña debe contener al menos una minuiscula"}),e.jsx("li",{className:" list-disc",children:"La contraseña debe contener al menos un numero"}),e.jsx("li",{className:" list-disc",children:"La contraseña debe tener un minimo de 5 caracteres y un maximo de 10"})]})]}),e.jsx("button",{type:"submit",className:"text-white bg-blue-700 w-full hover:bg-blue-800 duration-200 focus:ring-4 mb-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:x?e.jsx("div",{className:"spinner-container",children:e.jsx(w,{animation:"border",role:"status",size:"sm"})}):e.jsx(e.Fragment,{children:"Registarme"})})]})})]})};export{Z as default};
