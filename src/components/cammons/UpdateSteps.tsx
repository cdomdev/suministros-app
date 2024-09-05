import { useLocalStorage } from '@/hook/useLocalStoreage';

interface PropUpdate {
    ruta: string,
    bg: string
    textColor?: string
    textContent?: string
}

export const UpdateSteps: React.FC<PropUpdate> = ({ ruta, bg, textColor, textContent }) => {
    const [, setSteps] = useLocalStorage('steps', 1);


    const handleNextStep = () => {
        setSteps((prev: number) => prev + 1);
    };

    return (
        <>

            <a type='button' href={ruta} onClick={handleNextStep} className={`uppercase inline-block text-center text-sm border w-full py-2 rounded-md mb-2 hover:shadow duration-150 ${textColor} ${bg}`}>
                {textContent}
            </a>
        </>
    );
};
