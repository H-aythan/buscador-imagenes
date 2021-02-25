import React,{createContext, useState,useEffect,useRef} from 'react'
import GetImage from'../GetImage';
const StateGlobal=createContext();

const Proveedor = ({children}) => {
    const[imagenes,setImagenes]=useState([])
    const[page,setPage]=useState(1);
    const[termino,setTermino]=useState("")
    const[error,setError]=useState("")
    
    const elemento=useRef();
  
    const buscarTermino=(e,palabra)=>{
        e.preventDefault();
        setTermino(palabra)
        setPage(1);
    }
  
    useEffect(()=>{
            
        GetImage(page,termino)
            .then((datos)=>{
                setImagenes(datos);
                
            })
            .catch((error)=>{
                console.log(error);
                setError("Error en la carga de Imagenes");
                    setTimeout(()=>{
                        setError("")
                    },8000) 
        })
        elemento.current.scrollIntoView({block: "start", behavior: "smooth"})
    
    },[page,termino]) 
    
    return (
        <StateGlobal.Provider value={[imagenes,page,setPage,buscarTermino,error,elemento]}>
            {children}
        </StateGlobal.Provider>
    )
}
export {StateGlobal}
export default Proveedor;
