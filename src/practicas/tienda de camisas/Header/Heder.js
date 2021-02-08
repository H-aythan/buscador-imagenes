import React from 'react'
import {Link}from 'react-router-dom'
import Navegacion from './Navegacion'

const Heder = () => {
    return (
        <header className=" w-screen flex flex-col text-green-200  items-center">
            <Link className="w-80  "to={"/inicio"}>
                <img className="mx-auto pt-5" src="/img/logo.png" alt="logo imagen"/>
            </Link>
            <Navegacion/>
        </header>
    )
}

export default Heder
