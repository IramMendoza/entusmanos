const Form = () => {
  return (
    <div className=" ml-10  w-1/2 lg:w-2/5">
      
      <p className=" font-semibold text-2xl text-white text-center">Formulario</p>
      <p className=" mt-1 text-lg text-center text-teal-950">Añadir Paciente {''} y <span className=" text-lime-400">Administrar</span></p>
      
      <form>

        <div className=" mt-3 bg-teal-500 rounded-3xl p-2 shadow-md">
          <label htmlFor="Mascota" className="mr-3 text-teal-950">Mascota</label>
          <input id="Mascota" className=" rounded-lg w-full p-0.5 mt-1" type="text" placeholder=" Nombre de la Mascota"/>
        </div>

        <div className=" mt-3 bg-teal-500 rounded-3xl p-2 shadow-md">
          <label htmlFor="Dueño" className="mr-3 text-teal-950">Dueño</label>
          <input id="Dueño" className=" rounded-lg w-full p-0.5 mt-1" type="text" placeholder=" Nombre del Dueño"/>
        </div>
      
        <div className=" mt-3 bg-teal-500 rounded-3xl p-2 shadow-md">
          <label htmlFor="Email" className="mr-3 text-teal-950">Email</label>
          <input type='email' id="Email" className=" rounded-lg w-full p-0.5 mt-1" placeholder=" Email del Dueño"/>
        </div>

        <div className=" mt-3 bg-teal-500 rounded-3xl p-2 shadow-md">
          <label htmlFor="Date" className="mr-3 text-teal-950">Alta</label>
          <input type="date" id="Date" className=" rounded-lg w-full p-0.5 mt-1"/>
        </div>

        <div className=" mt-3 bg-teal-500 rounded-3xl p-2 shadow-md">
          <label htmlFor="Sintomas" className="mr-3 text-teal-950">Sintomas</label>
          <textarea type='text' id="Sintomas" className=" rounded-lg w-full p-0.5 mt-1" placeholder=" Descripcion de los sintomas del paciente"/>
        </div>

      </form>

    </div>
  )
}

export default Form
