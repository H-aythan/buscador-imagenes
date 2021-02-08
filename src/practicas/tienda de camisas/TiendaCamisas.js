import React from 'react'
import AppRouter from './Header/AppRouter'
import Heder from './Header/Heder'
import {ProductoProvider} from './Paginas/context/ProductosContext'

const TiendaCamisas = () => {
    return (
        <div className=" bg-gray-700 w-screen  text-white  border-4 box-border overflow-y-scroll h-screen overflow-x-hidden">
          <ProductoProvider>
             <AppRouter/> 
          </ProductoProvider>
        </div>
    )
}

export default TiendaCamisas


           
          
          


