import type { DatosEnvio } from '@/types/types';
import { useEffect, useState } from 'react';
import { Toast } from '../cammons/Toast';
import { UpdateSteps } from '../cammons/UpdateSteps';

const VerifyDataLocal = () => {
    const [toastMessage, setToastMessage] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [bgToast, setBgToast] = useState<string>('');

    const [datos, setDatos] = useState<DatosEnvio | null>(null);

    useEffect(() => {
        const datosLocal = localStorage.getItem('dataUserSendOrder');
        if (datosLocal) {
            const parsedData: DatosEnvio = JSON.parse(datosLocal);
            setDatos(parsedData);
        } else {
            setDatos(null);
        }
    }, []);

    const handleToast = () => {
        console.log('no hay datos')
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
                        className='bg-blue-600 text-white w-full rounded-md py-2 my-2 text-sm uppercase hover:bg-blue-700 duration-150'
                        onClick={handleToast}
                    >
                        Continuar
                    </button>
                ) : (
                    <UpdateSteps
                        bg="bg-blue-600"
                        ruta="/pago"
                        textColor="text-white"
                        textContent="continuar"
                    />
                )
            }
        </>
    )
}

export default VerifyDataLocal