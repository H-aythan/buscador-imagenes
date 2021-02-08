import React from 'react'
import {NavLink}from 'react-router-dom'

const Menu = () => {
    
return (
        <>
         <aside className="sm:h-screen h-1/3 flex-grow px-4 flex flex-col items-center bg-gray-900 ">
            <div className="mt-5 w-20 sm:mt-32 sm:w-40 sm:h-40 rounded-full sm:rounded-md  bg-blueGray-400 overflow-y-hidden">
                <img className="w-full h-full m-auto " src="/img/avatar.svg" alt="avatar.jpg"/>
            </div>
            <ul className="order-2  sm:order-1 text-xs sm:text-lg text-center w-full mb-2 flex sm:flex-col items-start sm:items-center justify-center sm:h-32 mt-5 ">
                
                <NavLink className="p-1 sm:w-28 sm:py-1  flex-grow sm:flex-grow-0" 
                    activeClassName="border-b-2 bg-gray-700" 
                    to="/inicio">
                        Inicio
                </NavLink>
                
                <NavLink className="p-1 sm:w-28 sm:py-1 flex-grow sm:flex-grow-0" 
                    activeClassName="border-b-2 bg-gray-700" 
                    to="/proyectos">
                    Proyectos
                </NavLink>
                
                
            </ul>
            <div className="order-1 w-full sm:h-72 mt-10 px-2 p-auto flex-shrink sm:flex flex-col items-center justify-around flex-grow">
                <p className="border-b hidden sm:inline">Formas de contacto</p>
                <div className="flex sm:w-40 justify-around flex-wrap">
                    <img className="bg-white w-7 sm:w-12" src="/logo/face.png" alt="face.png"/>
                    <img className="bg-white w-7 sm:w-12 order-2" src="/logo/github.png" alt="Linkedin.jpg"/>
                    <p className="text-green-400 sm:mt-10 sm:order-3">+58 424-9307397</p>
                </div>
           </div>
                <p className="fixed z-20 bottom-2 right-3 opacity-50 hover:opacity-100 flex-grow">anthonyromeroromero014@gmail.com</p>
        </aside> 
        </>
    )
}

export default Menu
