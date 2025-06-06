import { IconSteps1 } from "./icons/IconSteps1";
import { IconStep2 } from "./icons/IconStep2";
import { IconsStep3 } from "./icons/IconsStep3";
import { useStepsStore } from "@/context/steps.context";

export const Steps = () => {
  const step = useStepsStore((state) => state.step);

  return (
    <>
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li
          className={`flex md:w-full items-center ${step > 1 ? "text-blue-600 dark:text-blue-500" : ""} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
        >
          <span className="flex items-center flex-col">
            {step > 0 ? (
              <IconSteps1 />
            ) : (
              <span className="bg-gray-400 rounded-full flex items-center p-1 size-7 justify-center text-gray-50">
                1
              </span>
            )}
            <span className="hidden sm:inline-flex sm:ms-2">Carrito</span>
          </span>
        </li>

        <li
          className={`flex md:w-full items-center ${step >= 2 ? "text-blue-600 dark:text-blue-500" : ""} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
        >
          <span className="flex items-center flex-col">
            {step > 1 ? (
              <IconStep2 />
            ) : (
              <span className="bg-gray-400 rounded-full flex items-center p-1 size-7 justify-center text-gray-50">
                2
              </span>
            )}
            <span className="hidden sm:inline-flex sm:ms-2">Envio</span>
          </span>
        </li>

        <li
          className={`flex items-center ${step >= 2 ? "text-blue-600 dark:text-blue-500  " : ""}`}
        >
          <span className="flex items-center flex-col ">
            <span className="me-2">
              {step > 2 ? (
                <IconsStep3 />
              ) : (
                <span className="bg-gray-400 rounded-full flex items-center p-1 size-7 justify-center text-gray-50">
                  3
                </span>
              )}
            </span>
            <span className="hidden sm:inline-flex">Pago</span>
          </span>
        </li>
      </ol>
    </>
  );
};
