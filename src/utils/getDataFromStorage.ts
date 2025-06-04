import type { DatosUsurio } from "@/types/types";

export const getDataFromStorage = (): DatosUsurio | null => {
    const data = sessionStorage.getItem('infoProfileUSer');
    if (data) {
        return JSON.parse(data);
    }
    return null;
};
