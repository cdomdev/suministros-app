import { logout } from '@/services/auth'
import { LogoutIcon } from '../icons/LogoutIcon'
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
           <LogoutIcon /> 
        </button>
    )
}

export default BtnLogout