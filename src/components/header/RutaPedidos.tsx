const RutaPedidos = () => {
    return (
        <>
            <a className="flex flex-col items-center cursor-pointer" href="/usuario/perfil">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-seam w-8 h-8 md:w-11 md:h-11" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                    <path d="M15 19l2 2l4 -4" />
                </svg>
                <small
                    className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 duration-100"
                >Compras</small>
            </a>
        </>

    )
}



export default RutaPedidos