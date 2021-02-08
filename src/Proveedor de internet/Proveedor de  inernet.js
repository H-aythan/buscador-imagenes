import React from 'react'
import AppRouter from './AppRouter';
import Inicio from './Paginas/Inicio';

const ProveedorDeIntrnet = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 h-screen w-screen overflow-y-hidden box-border text-white">
          
          <AppRouter/>
         
        </div>
    )
}

export default ProveedorDeIntrnet;
