import React, { useContext, useEffect, useState } from 'react'
import { StateGlobal } from '../apis usadas/context/Proveedor';


const initImg=["/img/inicio.jpg","/img/inicio2.jpg","/img/lugia.jpg","/img/proyectos1.jpg"];

const Header = () => {
    
    const [nImg,setNImge]=useState(0);
    const [termino,setTermino]=useState("")
    const [,,,buscarTermino,error,elemento]=useContext(StateGlobal);
    
    const buscador=(e)=>{
        setTermino(e.target.value);
        
    }
    
    useEffect(()=>{
        
        const time=setTimeout(()=>{
            nImg===3
                ?setNImge(0)
                :setNImge(nImg+1);
        },6000)
       
        return()=>{
            clearTimeout(time);
        }
    },[nImg]) 

    return (
        <header className="relative w-screen bg-blueGray-500 h-4/5 text-center flex-grow" ref={elemento}>
        
            <img src={initImg[nImg]} className="w-full h-full object-cover" alt="imageHeader"/>
    
            <div className="absolute text-white w-full h-full top-0 flex flex-col  justify-center items-center">
                <h1 className="sm:text-3xl ">Espectaculares imagenes para ver!</h1>
                <form className="text-black min-w-20 min-w-max w-1/2 sm:h-9 flex mt-2 rounded flex ">
                    <input className="px-2 flex-grow sm:h-auto w-full outline-none mx-2 rounded focus:border border-green-400" type="text" onChange={(e)=>buscador(e)}/>
                    <input className="px-3 flex-grow sm:h-auto sm:px-2 bg-cyan-700 sm:rounded text-white cursor-pointer hover:bg-cyan-400 text-xs sm:text-lg" type="submit" value="Buscar" onClick={(e)=>buscarTermino(e,termino)}/>
                </form>
                {error!==""&&<p className="mt-10 text-xs sm:text-lg bg-red-400 py-2 px-3 animate-bounce rounded">{error}</p>}
            </div>
        </header>
    )
}

export default Header
