import React from 'react'
//../../.././public/img
const SinglePage = ({infoProducto}) => {
    const{imagen,nombre,precio,descripcion}=infoProducto;
   
    return (
        <div >
            <div className="flex sm:w-1/2 md:w-1/2 h-80 mx-auto mt-5 lg:flex-nowrap flex-col md:flex-row w-screen " >
                <img  className="w-56 ms:w-64 h-64 border-4 border-green-800 hover:border-green-300" src={`/img/${imagen}.png`} alt="fallo"/>
                <div className="md:mx-5 md:flex md:flex-col md:content-around">
                    <h1 className="text-3xl md:text-6xl">{nombre}</h1>
                    <span className="text-3xl my-5 text-yellow-300">$ {precio}</span> 
                    <p className=" text-justify px-3 ">{descripcion}</p>
                </div>
            </div> 
        </div>
    )
}


export default SinglePage;
