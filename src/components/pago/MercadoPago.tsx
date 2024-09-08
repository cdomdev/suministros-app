import { useState } from "react";
import { Spinner } from "react-bootstrap";

const MercadoPago = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center justify-center mb-3 ">
            <button className="border flex py-2 px-4 items-center gap-1 rounded-md bg-[#009ee3] text-white hover:bg-[#0049e5ef] duration-100">
                {isLoading ? (
                    <div className="spinner-container">
                        <Spinner animation="border" role="status" size="sm" />
                    </div>
                ) : (
                    <>
                        <img src="../../../mercadopago.webp" alt="logo de mercadopago" className="size-7" />
                        Pagar con Mercado Pago
                    </>
                )}
            </button>
            <span className="text-gray-500 text-xs mt-1">Paga de forma segura</span>
        </div>
    );
};

export default MercadoPago