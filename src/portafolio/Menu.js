import React, { useState } from 'react'
import {NavLink}from 'react-router-dom'
import Modal from './components/Modal'
const Menu = () => {
   const [modal,setModal]=useState(false) 
    return (
        <>
       {modal&&<Modal modal={modal} setModal={setModal}/>}
        <aside className="xl:h-screen flex-grow px-4 flex flex-col items-center bg-gray-900">
            <div className="mt-5 md:mt-16 xl:mt-32 w-40 flex-shrink-0 h-40 rounded-full sm:rounded-md bg-blueGray-400 overflow-y-hidden">
                <img className="w-full h-40 m-auto" src="/img/avatar.svg" alt="avatar.jpg"/>
            </div>
            <ul className="text-xs md:text-2xl xl:text-lg text-center w-full mb-2 flex xl:flex-col items-start sm:items-center justify-center xl:h-32 mt-5 ">
                
                <NavLink className="p-1 sm:w-28 sm:py-1 flex-grow sm:flex-grow-0" 
                    activeClassName="border-b-2 bg-gray-700" 
                    to="/home">
                        Home
                </NavLink>
               
                <NavLink className="p-1 sm:w-28 sm:py-1 flex-grow sm:flex-grow-0" 
                    activeClassName="border-b-2 bg-gray-700" 
                    to="/proyectos">
                    Proyectos
                </NavLink>
                <button className="p-1 sm:w-28 focus:border-b-2 focus:outline-none focus:bg-gray-700 sm:py-1 flex-grow sm:flex-grow-0 cursor-pointer" onClick={()=>setModal(!modal)}> 
                    Contacto
                </button>
            </ul>
           <div className="hidden h-72 mt-10 px-2 p-auto flex-shrink xl:flex flex-col items-center justify-around flex-grow">
                <p className="border-b">Formas de contacto</p>
                <div className="flex w-40 justify-around">
                    <img className="bg-white w-12" src="/img/logo/face.png" alt="face.png"/>
                    <img className="bg-white w-12" src="/img/logo/github.png" alt="Linkedin.jpg"/>
                </div>
                <p className="text-green-400">+58 424-9307397</p>
           </div>
               
        </aside> 
        </>
    )
}

export default Menu
