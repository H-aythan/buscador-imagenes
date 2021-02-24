import React, { useContext} from 'react'
import { StateGlobal } from './apis usadas/context/Proveedor'

import Header from './componentesInicio/Header'
import Imagen from './componentesInicio/Imagen'

const Inicio = () => {
    
    const[images,page,setPage]=useContext(StateGlobal);
    
    return (
        <div className="w-screen h-screen overflow-x-hidden bg-blueGray-800 flex flex-col sm:items-center">
                <title>Buscador de imagenes</title>
                <Header/> 
                <section className="flex flex-wrap ">
                    {images?.map(imagen=>{
                        return <Imagen key={imagen?.id} imagen={imagen}/>
                    })}
                </section> 
                <div className="min-w-max text-xs sm:text-sm sm:w-1/4 flex text-white relative my-5 flex-grow">
                    <button className="px-4 py-1 bg-cyan-700 hover:bg-cyan-300 text-2xl flex-grow max-h-12" onClick={()=>setPage(page>1?page-1:1)}>
                       &#9668; 
                    </button>
                    <button className="px-4 py-1 bg-cyan-700 hover:bg-cyan-300 flex-grow max-h-12 ">
                        {page}
                    </button>
                    <button className="px-4 py-1 bg-cyan-700 hover:bg-cyan-300 flex-grow max-h-12" onClick={()=>setPage(page+1)}>
                        {page+1}
                    </button>
                    <button className="px-4 py-1 bg-cyan-700 hover:bg-cyan-300 flex-grow max-h-12" onClick={()=>setPage(page+2)}>
                        {page+2}
                    </button>
                    <button className="px-4 py-1 bg-cyan-700 hover:bg-cyan-300 flex-grow max-h-12" onClick={()=>setPage(page+3)}>
                        {page+3}
                    </button>
                    <button className="px-4 py-1 bg-cyan-700 hover:bg-cyan-300 flex-grow max-h-12" onClick={()=>setPage(page+4)}>
                        {page+4}
                    </button>
                    <button className="px-4 py-1 bg-cyan-700 hover:bg-cyan-300 flex-grow text-2xl max-h-12 " onClick={()=>setPage(page+1)}>
                        &#9658;
                    </button>
                </div>      
            </div>
    )
}

export default Inicio
