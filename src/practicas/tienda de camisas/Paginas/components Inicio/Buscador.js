import React, { useState } from 'react'

const Buscador = ({traerBusqueda}) => {
    const [datos,setDatos]=useState("")
    const leerDatos=(e)=>{
        setDatos(e.target.value)
        traerBusqueda(datos);
    }
    return (
        <form className=" flex justify-center mb-5">
            <input className="w-1/2 h-7 box-content px-5 border-yellow-400 border-4 text-black" value={datos} placeholder="Busqueda" type="text" onChange={(e)=>leerDatos(e)}/>
        </form>
    )
}

export default Buscador
