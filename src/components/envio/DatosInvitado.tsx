import { Form } from "react-bootstrap";
import type { DatosUsurio } from '@/types/types'
import { Formik } from "formik";
import { UpdateSteps } from "../UpdateSteps";

export const FormEnvioDatosInvitado = () => {

    const handleSubmit = async (values: DatosUsurio) => {
        localStorage.setItem('dataUserForBuy', JSON.stringify(values))
    }

    return (
        <Formik
            initialValues={{
                nombre: "",
                apellido: "",
                email: "",
                direccion: "",
                telefono: "",
                destino: "",
                detalles: "",
            }}
            validate={(values: DatosUsurio) => {
                const errors: Partial<DatosUsurio> = {};
                if (!values.nombre) {
                    errors.nombre = "*El campo no puede quedar vacio*";
                }
                if (!values.direccion) {
                    errors.direccion = "*El campo no puede quedar vacio*";
                }
                if (!values.destino) {
                    errors.destino = "*Debe seleccionar una opcion*";
                }
                if (!values.email) {
                    errors.email = "*El campo no puede quedar vacio*";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                    errors.email = "*Ingrese un correo electrónico válido*";
                }
                if (!values.telefono) {
                    errors.telefono = "*El campo no puede quedar vacio*";
                } else if (values.telefono.length < 10) {
                    errors.telefono = '*Ingrese un numero de telefono valido*';
                }

                return errors;
            }}
            onSubmit={handleSubmit}>
            {(formik) =>

                <div className="font-font-cust-2">
                    <p className="mb-2 font-normal leading-5 text-sm md:text-base">
                        Ingrese los datos en el formulario para el envio de su compra, los datos marcados con (*) son obligatorios
                    </p>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-2">
                            <Form.Label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                                Ingrese su nombre   ∗
                            </Form.Label>
                            <Form.Control
                                className='bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                type="text"
                                name="nombre"
                                placeholder="example"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.nombre && formik.errors.nombre ? (
                                <div className="text-red-600 font-normal text-sm">{formik.errors.nombre}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                                Ingrese su apellido
                            </Form.Label>
                            <Form.Control
                                className='bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                type="text"
                                name="apellido"
                                placeholder="opciona"
                                value={formik.values.apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                                Ingrese su correo electronico  ∗
                            </Form.Label>
                            <Form.Control
                                className='bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                type="text"
                                placeholder="example@sumi.com"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-600 font-normal text-sm">{formik.errors.email}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                                Seleccione un destino para su pedido  ∗
                            </Form.Label>
                            <Form.Select
                                className='bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                name="destino"
                                value={formik.values?.destino}
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
                            <Form.Label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                                Ingrese su dirección  ∗
                            </Form.Label>
                            <Form.Control
                                className='bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
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
                            <Form.Label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                                Ingrese un numero de teléfono  ∗
                            </Form.Label>
                            <Form.Control
                                className='bg-gray-50 border text-xs md:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
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
                            <Form.Label className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                                Detalle adicionales
                            </Form.Label>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    className='bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                    as="textarea"
                                    rows={3}
                                    placeholder="Conjunto residencial sumi, torre 9, apartamento 123"
                                    name="detalles"
                                    value={formik.values?.detalles}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Form.Group>
                        </div>

                        <UpdateSteps
                            ruta="/pago"
                            bg="bg-primary"
                            textColor="text-white"
                            textContent="Continuar"
                            type="submit"
                            disabled={formik.isSubmitting}
                        />

                    </Form>
                </div>
            }
        </Formik>
    )
}