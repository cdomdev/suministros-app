import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { a as calcularDescuentoParaTotal } from './calcularDescuento_DQZrJtA1.mjs';
import { f as formateValue } from './formatearValor_CeQA56j4.mjs';
import { useState, useEffect } from 'react';

const calcularTotal = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }
  return items.reduce((total, item) => {
    const cantidad = item.quantity || 0;
    const valor = parseFloat(item.valor);
    let valorFinal;
    if (item.discount && item.discount > 0) {
      valorFinal = parseFloat(calcularDescuentoParaTotal(item.valor, item.discount));
    } else {
      valorFinal = valor;
    }
    return total + valorFinal * cantidad;
  }, 0);
};

const Summary = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setProductos(carrito);
  }, []);
  const total = calcularTotal(productos).toString();
  let totalParseado = formateValue(total);
  if (!productos) return null;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("span", { className: "my-3 text-xs md:text-sm", children: [
      "Subtotal: ",
      /* @__PURE__ */ jsxs("strong", { children: [
        " $ ",
        totalParseado
      ] }),
      " "
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("h2", { className: "my-2 text-xs md:text-sm", children: [
      "Total a pagar ----- ",
      /* @__PURE__ */ jsxs("strong", { children: [
        " $ ",
        totalParseado
      ] }),
      " "
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 my-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm font-semibold ", children: "El costo de envio aun  no esta incluido " }),
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-alert-octagon size-6 stroke-red-700", width: "44", height: "44", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#2c3e50", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" }),
        /* @__PURE__ */ jsx("path", { d: "M12 8v4" }),
        /* @__PURE__ */ jsx("path", { d: "M12 16h.01" })
      ] })
    ] })
  ] });
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  useEffect(() => {
    const handleStorageChange = () => {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};

const UpdateSteps = ({ ruta, bg, textColor, textContent, type = "button", disabled = false }) => {
  const [productos, setProductos] = useState([]);
  const [, setSteps] = useLocalStorage("steps", 1);
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setProductos(carrito);
  }, []);
  const handleNextStep = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    setSteps((prev) => prev + 1);
    if (type === "button" || type === "submit" || type === "reset") {
      window.location.href = ruta;
    }
  };
  if (productos.length === 0) {
    return /* @__PURE__ */ jsx("p", { className: "text-sm text-center font-semibold my-2 text-red-400", children: "No hay productos en tu carrito" });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: type === "button" || type === "submit" || type === "reset" ? /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleNextStep,
      type,
      disabled,
      className: `uppercase inline-block text-center text-xs md:text-sm border w-full py-2 rounded-md mb-2 hover:shadow-sm duration-150 mt-2 ${textColor} ${bg} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
      children: textContent
    }
  ) : /* @__PURE__ */ jsx(
    "a",
    {
      href: ruta,
      onClick: handleNextStep,
      className: `uppercase inline-block text-center text-xs md:text-sm border w-full py-2 rounded-md mb-2 hover:shadow-sm duration-150 mt-2 ${textColor} ${bg}`,
      children: textContent
    }
  ) });
};

export { Summary as S, UpdateSteps as U };
