import React from 'react'
import {BrowserRouter as Router,Route}from 'react-router-dom'
import Menu from './Menu'
import Inicio from './paginas/Inicio'
import Proyectos from './paginas/Proyectos'

const AppRouter = () => {
    return (
        <Router>
            <Menu/>     
            <div className="relative w-full h-screen overflow-x-hidden sm:overflow-hidden flex">
                <Route exsact path="/Home" component={Inicio}/>
                <Route exsact path="/proyectos" component={Proyectos}/>
            </div>    
        </Router>
    )
}

export default AppRouter;
