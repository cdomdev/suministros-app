
export const Person = () => {
    return (
        <div className="flex flex-col items-center gap-1 md:gap-2 cursor-pointer">
            <div
                className="relative w-7 h-7 md:w-9 md:h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
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
    )
}

