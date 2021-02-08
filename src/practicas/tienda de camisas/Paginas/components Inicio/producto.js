import React from 'react'
import {Link}from 'react-router-dom'

const producto = ({producto,traerInfo}) => {
    const {imagen,nombre,precio,id}=producto
    
    return (
        <li className="mx-8 mb-8 flex flex-col items-center">
            <img className="border-4 hover:border-green-200 border-green-800" src={`img/${imagen}.png`} alt={nombre}/>
            <p className="text-white">{nombre}
                <span className="text-2xl text-yellow-300"> $ {precio}</span>
            </p>
            <Link to={`/producto:${id}`} className="ms:w-32 py-2 px-2 text-center hover:bg-green-200 rounded md:px-10 text-black bg-green-400 mt-2" onClick={(e)=>traerInfo(e,producto)} >Mas informacion</Link>
            
        </li>
    )
}

export default producto
