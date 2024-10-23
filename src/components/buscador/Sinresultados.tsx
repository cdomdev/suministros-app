
export const Sinresultados = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-3 md:w-[60%] mt-1 px-4">
            <div className="flex  justify-start items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world-search size-32 md:size-52 stroke-gray-500" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 12a9 9 0 1 0 -9 9" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h7.9" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M20.2 20.2l1.8 1.8" />
                </svg>
            </div>
            <div className="font-font-cust-2 ">
                <h4 className='text-base md:text-lg font-semibold text-balance'>No hemos encontrados resultados de tu busqueda</h4>
                <h5 className='text-sm md:text-base'>Puedes intentar lo siguiente.</h5>
                <ul className='pl-6'>
                    <li className='list-disc text-xs md:text-sm text-gray-600'>Comprueba los términos introducidos.</li>
                    <li className='list-disc text-xs md:text-sm text-gray-600'>Intenta utilizar una sola palabra.</li>
                    <li className='list-disc text-xs md:text-sm text-gray-600'>Utiliza términos genéricos en la búsqueda.</li>
                </ul>
            </div>
        </div>
    )
}
