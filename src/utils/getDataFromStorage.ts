import type { PropProfile } from "@/types/types";

export const getDataFromStorage = (): PropProfile | null => {
    const data = localStorage.getItem('infoProfileUSer');
    if (data) {
        return JSON.parse(data);
    }
    return null;
};
