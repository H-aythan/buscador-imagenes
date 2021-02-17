import React, { useState } from 'react'
import db from '../fireBase/fireBase';

const Modal = ({modal,setModal}) => {
    const [form,setForm]=useState({});
    
    const datosForm=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
  
    const envio=async (e)=>{
        e.preventDefault()
        await db.collection('clientes').doc().set(form);
        setModal(!modal);
     
        
    }
    
    return (
        <div className="h-screen flex justify-center items-center w-screen bg-gray-800 bg-opacity-75 fixed top-0 z-40" onClick={()=>setModal(!modal)}>
            <div className="md:w-1/2 xl:w-1/3 bg-gray-900 flex flex-wrap " onClick={(e)=>e.stopPropagation()}>
                <div className="w-full h-10 float-right">
                    <button className="float-right text-xl focus:outline-none mt-2 mr-4"
                        onClick={()=>setModal(!modal)}
                    >
                        X
                    </button>
                </div>
                <p className="w-full text-xl text-center">Formas de contactarme </p>
                <div className="borde h-4/5 w-full px-10">
                    <form className="flex flex-wrap flex-col py-10 ">
                        <div className="flex flex-col flex-shrink text-xs sm:text-lg">
                            <p className="mb-2">Nombre y apellido:</p>
                            <input className=" pl-2 focus:outline-none focus:border-b-2  h-6 border-orange-600 sm:h-10 bg-gray-800 rounded" type="text"
                                onChange={(e)=>datosForm(e)}
                                name="nombre"
                            />
                        </div>
                        <div className="flex flex my-14 flex-col text-xs sm:text-lg">
                            <p className="mb-2 ">Correo electronico:</p>
                            <input className="focus:border-b-2 focus:outline-none h-6 border-orange-600 pl-2 sm:h-10 bg-gray-800 rounded" type="text"
                                onChange={(e)=>datosForm(e)}
                                name="correo"
                            />
                        </div>
                        <div className="flex flex flex-col max-h-24 sm:max-h-32 text-xs sm:text-lg">
                            <p className="mb-2">Mensaje:</p>
                            <textarea className="focus:outline-none focus:border-2 h-6 border-orange-600 pl-2 max-h-32 h-32 bg-gray-800 rounded"
                                onChange={(e)=>datosForm(e)}
                                name="mensaje"
                            ></textarea>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-gray-800 px-3 py-1 hover:bg-gray-600" onClick={(e)=>envio(e)}>
                                Enviar
                            </button>
                        </div>
                    </form>
                   
                    <div className="flex flex-row flex-wrap sm:flex-nowrap w-full items-center justify-around sm:justify-between flex-grow-0 py-4">
                        <img className="bg-white w-8 sm:w-12 " src="/img/logo/face.png" alt="face.png"/>
                        <p className="order-3 text-center w-full mt-2 sm:static flex-shrink text-xs sm:text-sm">anthonyromeroromero014@gmail.com</p>
                        <img className="bg-white sm:order-3 w-8 flex-shrink sm:w-12" src="/img/logo/github.png" alt="Linkedin.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
