import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import type { DatosEnvio } from '@/types/types'

export const FormEnvioDatosUsuario = () => {
    const handleSubmit = async (values: DatosEnvio) => {
        console.log(values)
    }
    return (
        <Formik
            initialValues={{
                telefono: "",
                direccion: "",
                destino: "",
                detalles: "",
            }}
            validate={(values: DatosEnvio) => {
                const errors: Partial<DatosEnvio> = {};
                if (!values.direccion) {
                    errors.direccion = "*El campo no puede quedar vacio*";
                }
                if (!values.destino) {
                    errors.destino = "*Debe seleccionar una opcion*";
                }
                if (!values.telefono) {
                    errors.telefono = "*El campo no puede quedar vacio*";
                }
                return errors;
            }}
            onSubmit={handleSubmit}>
            {(formik) =>

                <div className="font-font-cust-2">
                    <p className="mb-2 font-semibold text-base">
                        Ingrese los datos en el formulario para el envio de su compra, algunos datos son obligatorios
                    </p>
                    <Form onSubmit={formik.handleSubmit}>

                        <Form.Group className="mb-2">
                            <Form.Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Ingrese su dirección
                            </Form.Label>
                            <Form.Control
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                type="text"
                                placeholder="calle 123 # 45-67"
                                name="direccion"
                                value={formik.values.direccion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.direccion && formik.errors.direccion ? (
                                <div className="text-red-600 font-normal text-sm">{formik.errors.direccion}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Seleccione un destino para su pedido
                            </Form.Label>
                            <Form.Select
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                name="destino"
                                value={formik.values.destino}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                                <option value="">Seleccione un destino</option>
                                <option value="1">Bogota - Municipios aledaños</option>
                                <option value="2">Otros destinos nacionales</option>
                            </Form.Select>
                            {formik.touched.destino && formik.errors.destino ? (
                                <div className="text-red-600 font-normal text-sm">{formik.errors.destino}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Ingrese un numero de teléfono
                            </Form.Label>
                            <Form.Control
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                type="number"
                                name="telefono"
                                placeholder="123456789"
                                value={formik.values.telefono}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.telefono && formik.errors.telefono ? (
                                <div className="text-red-600 font-normal text-sm">{formik.errors.telefono}</div>
                            ) : null}
                        </Form.Group>

                        <div className="mb-3">
                            <p className="text-sm my-2">
                                Los detalles no son obligatorios, pero nos ayudarian mucho en el proceso para la entrega de su compra. Puede agregar datos de referencia como nombre de barrio, conjuto o localidad.
                            </p>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    className='bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                    as="textarea"
                                    rows={3}
                                    placeholder="Conjunto residencial sumi, torre 9, apartamento 123"
                                    name="detalles"
                                    value={formik.values.detalles}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Form.Group>
                        </div>
                        <Button
                            className='w-full '
                            variant="primary"
                            type="submit"
                            disabled={formik.isSubmitting}>
                            Continuar
                        </Button>
                    </Form>
                </div>
            }
        </Formik>
    )
}
