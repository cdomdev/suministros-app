import { useEffect, useState } from "react"
import type { ResponsIPInfo } from '@/types/types'
import { getDataIp } from '@/services/user'
import { IconLocation } from "./icons/IconLocation"

export const Localitation = () => {
    const [data, setData] = useState<ResponsIPInfo | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDataIp();
                if (response) {
                    localStorage.setItem('referenceDataLocation', JSON.stringify(response));
                    setData(response);
                }
            } catch (error) {
                console.error("Error fetching IP data:", error);
                const fallbackData = { city: "Sin data", region: "Sin  data" };
                localStorage.setItem('referenceDataLocation', JSON.stringify(fallbackData));
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <IconLocation />
            <span className="text-[7px] md:text-[8px] uppercase text-[#545454] font-semibold text-wrap text-center">{data?.city || 'cargando...'}</span>
        </div>
    )
}
