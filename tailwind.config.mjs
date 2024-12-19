/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {},
    backgroundImage: {
      "category-banios": "url('/banios.webp')",
      "category-cocinas": "url('/cicinas.webp')",
      "category-contruccion": "url('/constr.webp')",
      "category-psisos": "url('/pisos.webp')",
      "bg-chat": "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,249,250,1) 35%, rgba(255,255,255,1) 100%);",


    },
   
    gridTemplateColumns: {
      "cat-cust": "0.8fr 3fr",
      "col-cust-2": "50% 50%",
      "col-cust-3": "70% 30%",
      "col-cust-4": "60% 40%",
      "col-cust-5": "25% 75%"
    },
    // backgroundColor: {
    //   'color-w': "rgb(37, 211, 102)"
    // }

  },
  plugins: [require("flowbite/plugin")],
};
