
import {NavLink} from 'react-router-dom'

const Navegacion = ({data}) => {
    const {openModal,setOpenModal}=data;
    
    return (
        <nav className="my-auto">
            <NavLink className="px-3 py-1 text-sm hover:bg-gray-100 hover:text-black " 
                    activeClassName="bg-gray-100 text-black" exact to="/inicio"
                    >Inicio
            </NavLink>
            
            <NavLink className="px-3 py-1 text-sm hover:bg-gray-100 hover:text-black " activeClassName="bg-gray-100 text-black" exact to="/planes">Planes</NavLink>
            
            <a className="px-3 py-1 text-sm hover:bg-gray-100 hover:text-black cursor-pointer"  
                onClick={()=>setOpenModal(!openModal)}
            >Contacto</a>
        </nav>
    )
}

export default Navegacion
                
           
                    
