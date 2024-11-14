import type React from "react";
import { ChechIcon } from "./icons/ChechIcon";
import { ErrorIcon } from "./icons/ErrorIcon";
import { CloseIcon } from "./icons/CloseIcon";

interface ToastProp {
    showToast: boolean;
    setShowToast: (show: boolean) => void;
    toastMessage: string;
    setToastMessage: (message: string) => void;
    bgToast?: string;
    setBgToast: (bg: string) => void;
}

export const Toast: React.FC<ToastProp> = ({
    showToast,
    setShowToast,
    toastMessage,
    bgToast,
}) => {


    if (!showToast) return null

    return (
        <div
            id={bgToast}
            className={`flex fixed bg-white z-50 top-32 right-10 items-center w-full max-w-xs p-4 mb-4 text-gray-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${bgToast ?? 'bg-white'}`}
            role="alert"
        >
            {bgToast === 'toast-success' ? (
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                   <ChechIcon />
                    <span className="sr-only">Check icon</span>
                </div>
            ) : <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
               <ErrorIcon />
                <span className="sr-only">Error icon</span>
            </div>

            }

            <div className="ms-3 text-xs md:text-sm font-normal text-black">{toastMessage}</div>
            <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
                onClick={() => setShowToast(false)}
            >
                <span className="sr-only">Close</span>
                <CloseIcon/>
            </button>
        </div>
    );
};
