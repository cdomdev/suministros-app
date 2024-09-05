import { useEffect, useState } from "react"
import axios from "axios"
import type { PropProfile } from '@/types/types'


const Perfil = () => {
    const [data, setData] = useState<PropProfile | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        // Verificar si ya existe información del perfil en localStorage
        const dataLocal = localStorage.getItem('infoProfileUSer');
        if (dataLocal) {
            setData(JSON.parse(dataLocal));
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    const clearStorege = () => {
        localStorage.clear();
        sessionStorage.clear();
    }

    const logOut = async () => {
        try {
            await axios.post('http://localhost:3000/user/logout', {}, { withCredentials: true });
            clearStorege();
            window.location.reload();
        } catch (error) {
            console.error('Error during logout', error);
        }
    };

    return (
        <div>
            {data && data.picture ? (
                <div className="flex flex-col justify-center items-center gap-1">
                    <img
                        id="avatarButton"
                        className="w-10 h-10 rounded-full cursor-pointer relative"
                        src={data.picture}
                        alt="profile user"
                        onClick={toggleDropdown}
                        loading="lazy"
                    />
                    <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:-mb-[2px] duration-100">Perfil</small>

                </div>
            ) : (
                <div className="flex flex-col justify-center items-center gap-1">
                    <div
                        className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
                        onClick={toggleDropdown}>
                        <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:-mb-[2px] duration-100">Perfil</small>
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
                            href="/Dashboard"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Perfil
                        </a>
                    </li>
                </ul>
                <div className="">
                    <button
                        onClick={() => logOut()}
                        className="block   text-sm text-gray-700 hover:bg-red-600 w-full duration-200 hover:text-white rounded-b-md py-2">
                        Cerrar sesion
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Perfil