import { useEffect, useState } from "react"
import type { PropProfile } from '@/types/types'
import { logout } from "@/services/auth";

const DropdownProfile = () => {
    const [data, setData] = useState<PropProfile | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        const userSessionData = localStorage.getItem('infoProfileUSer');
        if (userSessionData) {
            const userData = JSON.parse(userSessionData);
            setData(userData);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    return (
        <div>
            {data && data.picture ? (
                <div className="flex flex-col justify-center items-center gap-1">
                    <img
                        id="avatarButton"
                        className="w-9 h-9 rounded-full cursor-pointer relative"
                        src={data.picture}
                        alt="profile user"
                        onClick={toggleDropdown}
                        loading="lazy"
                    />
                    <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:-mb-[2px] duration-100">Perfil</small>

                </div>
            ) : (
                <div className="flex flex-col items-center gap-1 md:gap-2 cursor-pointer">
                    <div
                        className="relative w-7 h-7 md:w-9 md:h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
                        onClick={toggleDropdown}
                    >
                        <svg
                            className="absolute w-8 h-8 md:w-11 md:h-11 text-gray-400  -left-[2px] md:-left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"></path></svg>
                    </div>
                    <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:mt-1  duration-100">Perfil</small>
                </div>
            )}

            <div
                id="userDropdown"
                className={`z-10 absolute right-3 ${dropdownOpen ? "block" : "hidden"
                    } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-semibold text-base uppercase">
                        {data?.nombre}
                    </div>
                    <div className="font-medium truncate">{data?.email || ""}</div>
                </div>
                <ul
                    className="text-sm text-gray-700 dark:text-gray-200"
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
                        onClick={() => logout()}
                        className="block   text-sm text-gray-700 hover:bg-red-600 w-full duration-200 hover:text-white rounded-b-md py-2">
                        Cerrar sesion
                    </button>
                </div>
            </div>
        </div>
    );
};


export default DropdownProfile