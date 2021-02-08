import React from 'react'
import{BrowserRouter,Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import OtraPage from './components/OtraPage'
import OtraPage2 from './components/OtraPage2'
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Route  path="/inicio" component={Inicio}/>
            <Route  path="/2daPage" component={OtraPage}/>
            <Route  path="/3eraPage" component={OtraPage2}/>
        </BrowserRouter>
    )
}

export default AppRouter
