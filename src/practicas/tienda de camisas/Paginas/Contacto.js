import React from 'react'

const Contacto = () => {
    return (
        <div className="mt-5 h-screen overflow-y-hidden">
            <form className="mt-5  sm:border-2 sm:w-1/2 mx-auto">
                <legend className="mt-5 text-center w-full max-y-1 text-2xl">Formulario de Contacto</legend>
                <div className="w-full b py-7 flex flex-wrap sm:flex-nowrap md:justify-between ">
                    <label className=" mx-3 sm:mx-7  h-10  ">Nombre: </label>
                    <input  className="w-3/4 py-2 mx-5" type="text" placeholder="Tu nombre"/>    
                </div>
                <div className="w-full py-7 flex flex-wrap sm:flex-nowrap justify-between">
                    <label className=" px-2 mx-3 sm:mx-7 h-10 ">Email: </label>
                    <input className="w-3/4 mx-5 py-2"type="email" placeholder="Correo electronico"/>    
                </div>
                <div className="w-full py-7 flex flex-wrap sm:flex-nowrap sm:justify-between">
                    <label className=" mx-3 sm:mx-7  h-10">Mensaje: </label>
                    <textarea className="mx-3 w-3/4 mr-5 max-h-16 min-h-16 overflow-y-scroll" min="50px"></textarea>    
                </div>
                <div className="flex md:justify-end">
                    <button className="mx-5 mb-8 border-2 px-8">Enviar</button>
                </div>
            </form>
        </div>
    )
}


export default Contacto
                
                
