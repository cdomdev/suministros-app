import { useLocalStorage } from '@/hook/useLocalStoreage'



export const Steps = () => {
    const [steps] = useLocalStorage('steps', 1);

    return (
        <>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                {/* Step 1 */}
                <li className={`flex md:w-full items-center ${steps > 0 ? 'text-blue-600 dark:text-blue-500' : ''} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                    <span className="flex items-center flex-col">
                        {steps > 0 ? (
                            <svg className="size-7 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                        ) : (
                            <span className="bg-gray-400 rounded-full flex items-center p-1 size-7 justify-center text-gray-50">1</span>
                        )}
                        <span className="hidden sm:inline-flex sm:ms-2">Carrito</span>
                    </span>
                </li>

                {/* Step 2 */}
                <li className={`flex md:w-full items-center ${steps >= 1 ? 'text-blue-600 dark:text-blue-500' : ''} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                    <span className="flex items-center flex-col">
                        {steps > 1 ? (
                            <svg className="size-7 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                        ) : (
                            <span className="bg-gray-400 rounded-full flex items-center p-1 size-7 justify-center text-gray-50">2</span>
                        )}
                        <span className="hidden sm:inline-flex sm:ms-2">Envio</span>
                    </span>
                </li>

                {/* Step 3 */}
                <li className={`flex items-center ${steps === 3 ? 'text-blue-600 dark:text-blue-500  ' : ''}`}>
                    <span className="flex items-center flex-col ">
                        <span className="me-2">{steps > 2 ? <svg className="size-7 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg> : <span className="bg-gray-400 rounded-full flex items-center p-1 size-7 justify-center text-gray-50">3</span>}</span>
                        <span className="hidden sm:inline-flex">Pago</span>
                    </span>
                </li>
            </ol>
        </>
    );
};
