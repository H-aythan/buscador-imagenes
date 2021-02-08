import React, { useContext, useEffect, useState } from 'react'       //5494 clave de laptp
import ProductosContex from './context/ProductosContext'
import Producto from './components Inicio/producto';
import Buscador from './components Inicio/Buscador';


const ProductosPage = ({traerInfo}) => {
    
    const[producto,setProducto]=useContext(ProductosContex);
    const[copy,setCopy]=useState();
    
   useEffect(()=>{
        setCopy(producto);
        
   },[]) 
    
    
    const traerBusqueda=(termino)=>{
        termino.length>1
        ?setProducto(producto?.filter(producto=>{
            return(
                producto.nombre.toLowerCase().indexOf(termino.toLowerCase())!==-1
            )
        }))
        :setProducto(copy);
    }
    return (
        <div className=" w-screen">
            <h2 className="text-center my-5 text-yellow-200 ">Nuestros Productos</h2>
                <Buscador traerBusqueda={traerBusqueda}/>            
                <ul className="flex flex-wrap w-3/4 mx-auto justify-center">
                {producto?.map(producto=>{/* console.log(producto) */
                    return(
                        <Producto key={producto.id} producto={producto} traerInfo={traerInfo}  />
                    )
                    })}
                    {/* <div className="border-2 w-20 h-20">sal</div>
                    <div className="border-2 w-20 h-20">sal</div> */}
                </ul>      
             
        </div>
    )
}
   
    

export default ProductosPage
               

