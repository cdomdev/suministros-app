import { useState } from "react";
import ModalEnvioInvitado from "@/components/modales/ModalEnvioInvitado";
import ModalEnvioUsuario from "@/components/modales/ModalEnvioUsuario";

interface ExpandedProps {
  isAuthenticated: boolean;
}

const Expanded: React.FC<ExpandedProps> = ({ isAuthenticated }) => {
  const [check, setCheck] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setCheck(!check);
    setExpanded(!expanded);
  };


  return (
    <div className={` border p-2 rounded-md ${expanded ? "expanded" : ""}`}>
      <div className=" flex gap-1 items-center cursor-pointer ">
        <input
          type="checkbox"
          id="envio-normal-checkbox"
          checked={check}
          onChange={handleToggle}
          className="hidden-checkbox rounded-full"
        />
        <div className="flex gap-1 items-center cursor-pointer  ">
          <div className="flex items-center gap-2" onClick={handleToggle}>
            <label
              className={`custom-checkbox ${check ? "checked" : ""}`}
              htmlFor="envio-normal-checkbox">
              <span className="circle" />
            </label>
            <span className="flex items-center gap-2 group">
              <p className="font-semibold text-base md:text-lg ">Datos para el envío</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery lg:group-hover:translate-x-40 duration-300" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                <path d="M3 9l4 0" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <hr className="border-dashed border-2  font-semibold w-full" />
      {expanded && (
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3">
          <p className="text-xs md:text-sm">Ingresa la informacion de quien recibe el pedido</p>
          {isAuthenticated ? < ModalEnvioUsuario /> : <ModalEnvioInvitado />}
        </div>
      )}
    </div>
  );
};

export default Expanded