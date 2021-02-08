import React from 'react'

const Inicio = () => {
    return (
        <>
            <div className="relative w-3/4 h-4/5 flex justify-center ">
                <img className="w-1/2 " alt="antena"  src="/img/satelite2.jpg" /> 
                <div className="absolute  py-5 pl-8 w-96 h-3/4 bg-white right-0 top-16 bg-gray-600 rounded-lg border-b-4 border-r-4">
                    <h1 className="text-5xl mb-8">Titulo <br/>MasTitulo</h1>
                    <p className="text-justify mr-6 mb-9">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aperiam iure assumenda eius dolor ex? Impedit, alias molestiae cupiditate voluptatum harum labore maxime ipsum animi illum ea aliquam id delectus?
                    </p>   
                    <a className="bg-white rounded-lg border-2 text-gray-800 hover:bg-gray-600 hover:text-white p-2 cursor-pointer ">Contactar</a>                 
                </div>
            </div>
            
        </>
    )
}
                    

export default Inicio
                    
                        
                    
           

