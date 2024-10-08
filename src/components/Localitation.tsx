import { useEffect, useState } from "react"
import type { ResponsIPInfo } from '@/types/types'
import { getDataIp } from '@/services/user'


export const Localitation = () => {
    const [data, setData] = useState<ResponsIPInfo | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            let dataLocal = localStorage.getItem('referenceDataLocation')
            try {
                if (!dataLocal) {
                    const response = await getDataIp();
                    localStorage.setItem('referenceDataLocation', JSON.stringify(response))
                    setData(response);
                } else {
                    let dataParse = JSON.parse(dataLocal)
                    setData(dataParse)
                }

            } catch (error) {
                console.error("Error fetching IP data");
            }
        };
        fetchData()
    }, [])

    return (
        <div className="flex flex-col items-center font-font-cust-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin size-8 stroke-[#6f6f6f]" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <span className="text-[7px] md:text-[8px] uppercase text-[#545454] font-semibold text-wrap text-center">{data?.city || 'cargando...'}</span>
        </div>
    )
}
