import { create } from "zustand";
import Cookies from "js-cookie";

interface LocationState {
   departamento: string;
  ciudad: string;
  setDepartamento: (departamento: string) => void;
  setCiudad: (ciudad: string) => void;
  setLocation: (data: { departamento: string; ciudad: string }) => void;
  resetLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  departamento: "",
  ciudad: "",

  setDepartamento: (departamento) => set({ departamento }),
  setCiudad: (ciudad) => set({ ciudad }),
  setLocation: ({ departamento, ciudad }) => {
    Cookies.set("reference-data-location", JSON.stringify({ departamento, ciudad }), {
      expires: 1,
      sameSite: "lax",
      secure: true,
    });
    set({ departamento, ciudad });
  },
  resetLocation: () => {
    Cookies.remove("reference-data-location");
    set({ departamento: "", ciudad: "" });
  },
}));