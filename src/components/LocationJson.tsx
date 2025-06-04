import { useState, useEffect } from "react";
import locations from "@/content/locations.json"; // Ruta según tu estructura
import type { CiudadPorDepartamento } from "@/types/types";

export function LocationJson() {
    const [departamentos, setDepartamentos] = useState<CiudadPorDepartamento[]>([]);
    const [ciudades, setCiudades] = useState<string[]>([]);
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState<string>("");
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState<string>("");

    useEffect(() => {
        setDepartamentos(locations as CiudadPorDepartamento[]);
    }, []);

    const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dep = e.target.value;
        setDepartamentoSeleccionado(dep);
        setCiudadSeleccionada("");

        const depto = departamentos.find((d) => d.departamento === dep);
        if (depto) {
            setCiudades(depto.ciudades);
        } else {
            setCiudades([]);
        }
    };

    const handleCiudadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCiudadSeleccionada(e.target.value);
    };

    return (
        <div>
            <label>
                Departamento:
                <select value={departamentoSeleccionado} onChange={handleDepartamentoChange}>
                    <option value="">Seleccione un departamento</option>
                    {departamentos.map((dep) => (
                        <option key={dep.id} value={dep.departamento}>
                            {dep.departamento}
                        </option>
                    ))}
                </select>
            </label>

            <br />

            <label>
                Ciudad:
                <select
                    value={ciudadSeleccionada}
                    onChange={handleCiudadChange}
                    disabled={!ciudades.length}
                >
                    <option value="">Seleccione una ciudad</option>
                    {ciudades.map((ciudad, index) => (
                        <option key={index} value={ciudad}>
                            {ciudad}
                        </option>
                    ))}
                </select>
            </label>

            <br />

            {/* Para debug */}
            <p>Departamento seleccionado: {departamentoSeleccionado}</p>
            <p>Ciudad seleccionada: {ciudadSeleccionada}</p>
        </div>
    );
}
