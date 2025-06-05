import { Formik, Form, Field } from "formik";
import type { DatosUsurio } from "@/types/types";
import { UpdateSteps } from "../UpdateSteps";
import { useUbicacion } from "@/hook/useUbicacion";
import Cookies from "js-cookie";

export const FormEnvioDatosUsuario = () => {
  const {
    departamento,
    ciudades,
    departamentos,
    ciudad,
    setCiudad,
    setDepartamento,
    setLocation,
  } = useUbicacion();

  const handleSubmit = async (values: DatosUsurio) => {
    Cookies.set("dataUserForBuy", JSON.stringify(values), {
      expires: 1,
      sameSite: "lax",
      secure: true,
    });
    setLocation({
      departamento: departamento || "Sin dato",
      ciudad: ciudad || "Sin dato",
    });
  };

  return (
    <Formik
      initialValues={{
        telefono: "",
        direccion: "",
        departamento: departamento || "",
        ciudad: ciudad || "",
        detalles: "",
      }}
      validate={(values: DatosUsurio) => {
        const errors: Partial<DatosUsurio> = {};
        if (!values.direccion) {
          errors.direccion = "*El campo no puede quedar vacio*";
        }
        if (!values.departamento) {
          errors.departamento = "*Debe seleccionar una opcion*";
        }
        if (!values.ciudad) {
          errors.ciudad = "*Debe seleccionar una opcion*";
        }
        if (!values.telefono) {
          errors.telefono = "*El campo no puede quedar vacio*";
        } else if (values.telefono.length < 10) {
          errors.telefono = "*Ingrese un numero de telefono valido*";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <>
          <p className="mb-2 font-normal text-sm md:text-base">
            Ingrese los datos en el formulario para el envio de su compra, los
            datos marcados con (<strong className="text-base">∗</strong>) son
            obligatorios
          </p>
          <hr className="mb-4 border-dashed" />
          <Form onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                Seleccione un departamento ∗
              </label>
              <select
                id="departamento"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
              >
                <option value="">Seleccione un departamento</option>
                {departamentos.map((d) => (
                  <option key={d.id} value={d.departamento}>
                    {d.departamento}
                  </option>
                ))}
              </select>
              {formik.touched.departamento && formik.errors.departamento ? (
                <div className="text-red-600 font-normal text-sm">
                  {formik.errors.departamento}
                </div>
              ) : null}
            </div>
            <div className="mb-2">
              <label
                htmlFor="ciudad"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Selecciona tu ciudad
              </label>
              <select
                value={ciudad}
                id="ciudad"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setCiudad(e.target.value)}
                disabled={!ciudades.length}
              >
                <option value="">Seleccione una ciudad</option>
                {ciudades.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              {formik.touched.ciudad && formik.errors.ciudad ? (
                <div className="text-red-600 font-normal text-sm">
                  {formik.errors.ciudad}
                </div>
              ) : null}
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                Ingrese su dirección ∗
              </label>
              <Field
                className="bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                type="text"
                placeholder="calle 123 # 45-67"
                name="direccion"
                value={formik.values.direccion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.direccion && formik.errors.direccion ? (
                <div className="text-red-600 font-normal text-sm">
                  {formik.errors.direccion}
                </div>
              ) : null}
            </div>

            <div className="mb-2">
              <label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                Ingrese un numero de teléfono (123-456-7890) ∗
              </label>
              <Field
                className="bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                name="telefono"
                required
                placeholder="123456789"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.telefono && formik.errors.telefono ? (
                <div className="text-red-600 font-normal text-sm">
                  {formik.errors.telefono}
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                Detalle adicionales
              </label>
              <div aria-controls="exampleFieldTextarea1">
                <Field
                  className="bg-gray-50 border border-gray-300  text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  as="textarea"
                  rows={3}
                  placeholder="Conjunto residencial, torre 9, apartamento 123"
                  name="detalles"
                  value={formik.values.detalles}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <UpdateSteps
              ruta="/Pago"
              bg="bg-primary"
              textColor="text-white"
              textContent="Continuar"
              type="submit"
              disabled={formik.isSubmitting}
            />
          </Form>
        </>
      )}
    </Formik>
  );
};
