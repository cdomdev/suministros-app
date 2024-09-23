
export const CarritoEmpty = () => {
    return (
        <div className='flex flex-col items-center justify-center py-6 gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-question size-10 stroke-slate-500" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M13.5 17h-7.5v-14h-2" />
                <path d="M6 5l14 1l-.714 5m-4.786 2h-8.5" />
                <path d="M19 22v.01" />
                <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            </svg>
            <span className='flex flex-col items-center text-gray-700 text-sm md:text-lg'>
                Tu carrito esta vacio...
            </span>
        </div>
    )
}
