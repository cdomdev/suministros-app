import { logout } from '@/services/auth'
import './style.css'
const BtnLogout = () => {
    const handleLogout = async () => {
        await logout()
        window.location.href = '/'
    }
    return (
        <button
            type="button"
            onClick={handleLogout}
            className="w-full hover:bg-red-500 duration-150 text-center hover:text-white items-center justify-center border flex py-2 rounded-sm">
            Cerrar sesión
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-logout size-7"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"></path>
                <path
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                ></path>
                <path d="M9 12h12l-3 -3"></path>
                <path d="M18 15l3 -3"></path>
            </svg>
        </button>
    )
}

export default BtnLogout