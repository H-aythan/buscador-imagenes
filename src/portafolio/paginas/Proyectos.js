import React from 'react'

const Proyectos = () => {
    
    return (
        <div className="relative w-full  sm:animate-move-t sm:bg-proyectos bg-cover">
            <title>Proyectos</title>
            <div className="absolute mb-10 w-full h-full flex flex-col ">
                
                <div className="w-full flex-col sm:flex-row sm:h-1/2 flex items-center justify-end px-2">
                    
                    <p className="sm:w-72 px-3 text-justify opacity-75 flex-grow sm:flex-grow-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia obcaecati reprehenderit voluptatibus nemo atque! Iusto, harum repudiandae! Quisquam, deserunt odit expedita cum, esse totam facilis praesentium facere natus voluptatibus unde.</p>
                    
                    <div className="w-full  flex-grow sm:flex-grow-0 px-3 mt-5 order-first sm:order-last sm:w-1/3  sm:mt-0">
                        <img className="w-full h-full object-scale-down " src="/img/inicio2.jpg" alt="proyecto1.jpg"/>
                    </div>
               
                </div>
                
                <div className="w-full mt-5 sm:h-1/2 flex flex-col sm:flex-row items-center justify-start px-2">
                    
                    <div className="sm:h-28 px-3 flex-grow sm:w-1/3 sm:h-4/5 sm:flex-grow-0">
                        <img className="w-full h-full object-scale-down " src="/img/inicio.jpg" alt="proyecto2.jpg"/>
                    </div>
                  
                    <p className="sm:w-72 px-3 text-justify opacity-75 flex-grow sm:flex-grow-0 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia obcaecati reprehenderit voluptatibus nemo atque! Iusto, harum repudiandae! Quisquam, deserunt odit expedita cum, esse totam facilis praesentium facere natus voluptatibus unde.</p>
                
                </div>
            
            </div>
        </div>
    )
}

export default Proyectos
