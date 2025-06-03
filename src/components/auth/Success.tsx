export const Success = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-base font-semibold text-center mb-1">
        ¡Contraseña actualizada con éxito!
      </h1>
      <p className="text-sm font-normal text-center text-gray-700 text-balance">
        Ya puedes iniciar sesión en Suministros con tu nueva contraseña. Si
        tienes algun inconveniente por favor comunícate con nuestro soporte de
        inmediato. 👉 <a href="mailto:sum.store.col@gmail.com" className="font-semibold hover:underline">SOPORTE</a> 
      </p>

      <a
        href="/"
        className="mt-4  text-center px-10 py-2  rounded-md hover:underline bg-blue-700 hover:bg-blue-600 duration-200 text-white"
      >
        Regresar al inicio
      </a>
    </div>
  );
};
