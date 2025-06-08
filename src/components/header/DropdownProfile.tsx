import { useEffect, useState } from "react";
import type { DatosUsurio } from "@/types/types";
import { logout } from "@/services/auth";
import UserProfile from "./Avatar";
import Cookies from "js-cookie";

const DropdownProfile = () => {
  const [data, setData] = useState<DatosUsurio | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const userSessionData = Cookies.get("user_sesion");
    if (userSessionData) {
      const userData = JSON.parse(userSessionData);
      setData(userData);
    }
  }, []);

  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
    Cookies.remove("user_sesion");
    Cookies.remove("access_token");
  };

  const logoutCookies = () => {
    logout();
    clearStorage();
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const items = [
    {
      title: "Mi perfil",
      hrer: "/usuario/perfil",
    },
    {
      title: "Mis compras",
      hrer: "/usuario/compras",
    },
  ];

  return (
    <div>
      <UserProfile toggleDropdown={toggleDropdown} />
      <div
        id="userDropdown"
        className={`z-10 absolute right-3 ${
          dropdownOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600 w-fit`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-semibold text-xs text-balance text-center">
            {data?.nombre}
          </div>
          <div className="font-medium truncate text-xs text-gray-400">
            {data?.email || ""}
          </div>
        </div>
        {!data ? (
          <p className="text-xs text-pretty text-gray-500">
            Algo salio mal con tu sesion
          </p>
        ) : (
          <>
            <ul
              className="text-xs md:text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              {items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.hrer}
                    className="block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => logoutCookies()}
              className="block text-xs md:text-sm text-gray-700 hover:bg-red-600 w-full duration-200 hover:text-white rounded-b-md py-2"
            >
              Cerrar sesion
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DropdownProfile;
