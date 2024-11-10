import type { DatosUsurio } from '@/types/types';
import { useEffect, useState } from 'react';
import { Toast } from '../Toast';
import { UpdateSteps } from '../UpdateSteps';

const VerifyDataLocal = () => {
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');
    const [datos, setDatos] = useState<DatosUsurio | null>(null);

    useEffect(() => {
        const datosLocal = localStorage.getItem('dataUserForBuy');
        if (datosLocal) {
            const parsedData: DatosUsurio = JSON.parse(datosLocal);
            setDatos(parsedData);
        } else {
            setDatos(null);
        }
    }, []);

    const handleToast = () => {
        setBgToast('fail')
        setShowToast(true)
        setToastMessage('Por favor agrega los datos de envio para continuar')
        setTimeout(() => setShowToast(false), 5000)
    }

    return (
        <>
            <Toast
                showToast={showToast}
                setShowToast={setShowToast}
                toastMessage={toastMessage}
                setToastMessage={setToastMessage}
                bgToast={bgToast}
                setBgToast={setBgToast}
            />
            {
                !datos ? (
                    <button
                        className='bg-blue-600 text-white w-full rounded-md py-2 my-2 text-xs md:text-sm uppercase hover:bg-blue-700 duration-150'
                        onClick={handleToast}
                    >
                        Continuar
                    </button>
                ) : (
                    <UpdateSteps
                        bg="bg-blue-600"
                        ruta="/Pago"
                        textColor="text-white"
                        textContent="continuar"
                    />
                )
            }
        </>
    )
}

export default VerifyDataLocal