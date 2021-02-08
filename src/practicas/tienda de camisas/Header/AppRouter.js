
import {BrowserRouter as Router,Route }from 'react-router-dom'

import ProductosPage from '../Paginas/Inicio'
import Nosotros from '../Paginas/Nosotros'
import Heder from './Heder'
import SinglePage from '../Paginas/SinglePage'
import { useState } from 'react'
import Contacto from '../Paginas/Contacto'



const AppRouter = () => {
    const [infoProducto,setInfoProducto]=useState({})
   
    const traerInfo=(e,infoProducto)=>{
        setInfoProducto(infoProducto);
 

    }
    
    return (
        <>
            <Router>
                <Heder/>  
                    <Route exact path="/inicio" render={()=><ProductosPage traerInfo={traerInfo}/>}/>
                    <Route exact path="/nosotros" component={Nosotros}/>
                    <Route exact path={`/producto:${infoProducto.id}`} render={()=><SinglePage infoProducto={infoProducto}/>}/>
                    <Route exact path="/contacto" component={Contacto}/>
                    {/* <Route component={Error}/> */}
            </Router>
        </>
    )
}

export default AppRouter


    
    
   

