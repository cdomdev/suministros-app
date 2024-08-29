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
    },
    fontFamily: {
      "font-cust": "Roboto, sans-serif",
      "font-cust-2": "Montserrat, sans-serif"
    },
    gridTemplateColumns: {
      "cat-cust": "0.8fr 3fr",
      "col-cust-2": "50% 50%"
    }
  },
  plugins: [require("flowbite/plugin")],
};
