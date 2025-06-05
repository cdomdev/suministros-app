import { useEffect, useState } from "react";
import { useLocationStore } from "@/context/locationStore";
import locations from "@/content/locations.json";
import type { CiudadPorDepartamento } from "@/types/types";
import Cookies from "js-cookie";

export function useUbicacion() {
  const [departamentos, setDepartamentos] = useState<CiudadPorDepartamento[]>(
    []
  );
  const [ciudades, setCiudades] = useState<string[]>([]);
  const { departamento, ciudad, setDepartamento, setCiudad, setLocation } =
    useLocationStore();

  useEffect(() => {
    setDepartamentos(locations as CiudadPorDepartamento[]);
  }, []);

  useEffect(() => {
    const cookie = Cookies.get("reference-data-location");
    if (cookie) {
      try {
        const data = JSON.parse(cookie);
        setLocation({
          departamento: data.departamento || "",
          ciudad: data.ciudad || "",
        });
      } catch (e) {
        console.error("Error leyendo ubicación:", e);
      }
    }
  }, [setLocation]);

  useEffect(() => {
    const dep = departamentos.find((d) => d.departamento === departamento);
    setCiudades(dep?.ciudades || []);
  }, [departamento, departamentos]);

  return {
    departamentos,
    ciudades,
    departamento,
    ciudad,
    setDepartamento,
    setCiudad,
    setLocation,
  };
}
