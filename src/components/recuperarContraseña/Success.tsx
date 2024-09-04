
export const Success = () => {
    return (
        <div className="flex flex-col items-center">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check size-14" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
            </span>
            <h1 className="text-base font-normal">
                Tu contraseña se actuilizo con exito, ya puedes iniciar sesion en
                Suministros
            </h1>
            <a href="/" className="mt-4  text-center px-10 py-2  rounded-md hover:underline">Regresar al inicio</a>
        </div>
    )
}
