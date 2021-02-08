import {BrowserRouter as Router,Route} from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Planes from './Paginas/Planes'
import ModalContact from './Modal/ModalContact'

const AppRouter = () => {
    const [openModal,setOpenModal]=useState(false);
    return (
        <Router>
            <Header setOpenModal={setOpenModal} openModal={openModal}/>
            <ModalContact openModal={openModal} setOpenModal={setOpenModal}/> 
            <Route exact path="/inicio" component={Inicio}/>
            <Route exact path="/planes" component={Planes}/>
            <Footer/>
        </Router>
    )
}
export default AppRouter
    

            


