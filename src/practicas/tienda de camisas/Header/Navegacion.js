import React from 'react'
import {NavLink}from 'react-router-dom';
const Navegacion = () => {
    return (
        <nav className="flex justify-center mt-5 text-white border-green-300 w-screen ">
            <NavLink activeClassName="bg-green-200 " className="hover:text-green-300 border-2 border-green-700 hover:border-green-300 px-2" to={'/nosotros'}>Nosotros</NavLink>
            <NavLink activeClassName="bg-green-200 " className="md:mx-64 hover:text-green-300 border-2 border-green-700 hover:border-green-300 px-2"to={'/inicio'}>Producto</NavLink>
            <NavLink activeClassName="bg-green-200 " className="hover:text-green-300 border-2 px-2 border-green-700 hover:border-green-300" to={'/contacto'}>Contacto</NavLink>
        </nav>
    )
}

export default Navegacion
