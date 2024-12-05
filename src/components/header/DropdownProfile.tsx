import { useEffect, useState } from "react"
import type { DatosUsurio } from '@/types/types'
import { logout } from "@/services/auth";
import UserProfile from "./Avatar";
import Cookies from "js-cookie";

const DropdownProfile = () => {
    const [data, setData] = useState<DatosUsurio | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        const userSessionData = localStorage.getItem('infoProfileUSer');
        if (userSessionData) {
            const userData = JSON.parse(userSessionData);
            setData(userData);
        }
    }, []);

    const clearStorage = () => {
        localStorage.clear()
        sessionStorage.clear()
        Cookies.remove('user_sesion')
        Cookies.remove('access_token')
    }

    const logoutCookies = () => {
        logout()
        clearStorage()
    }

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    return (
        <div>
            <UserProfile toggleDropdown={toggleDropdown} />
            <div
                id="userDropdown"
                className={`z-10 absolute right-3 ${dropdownOpen ? "block" : "hidden"
                    } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-semibold text-sm md:text-base uppercase">
                        {data?.nombre}
                    </div>
                    <div className="font-medium truncate">{data?.email || ""}</div>
                </div>
                <ul
                    className="text-xs md:text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton">
                    <li>
                        <a
                            href="/usuario/perfil"
                            className="block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Mi Perfil
                        </a>
                    </li>
                    <li>
                        <a
                            href="/usuario/compras"
                            className="block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Mis Compras
                        </a>
                    </li>
                </ul>
                <div className="">
                    <button
                        onClick={() => logoutCookies()}
                        className="block text-xs md:text-sm text-gray-700 hover:bg-red-600 w-full duration-200 hover:text-white rounded-b-md py-2">
                        Cerrar sesion
                    </button>
                </div>
            </div>
        </div>
    );
};


export default DropdownProfile