import React,{createContext, useState,useEffect,useRef} from 'react'
import GetImage from'../GetImage';
const StateGlobal=createContext();

const Proveedor = ({children}) => {
    const[imagenes,setImagenes]=useState([])
    const[page,setPage]=useState(1);
    const[termino,setTermino]=useState("")
    const[error,setError]=useState("")
    const[monted,setMonted]=useState(true)
    const elemento=useRef();
    
    const buscarTermino=(e,palabra)=>{
        e.preventDefault();
        setTermino(palabra)
        setPage(1);
    }
    
    useEffect(()=>{
        const traerImage=(page,termino)=>{
            GetImage(page,termino)
                .then((datos)=>{
                    if(monted){
                        setImagenes(datos);
                    }
                })
                .catch((error)=>{
                    console.log(error);
                    if(monted){
                        setError("Error en la carga de Imagenes");
                        setTimeout(()=>{
                            setError("")
                        },8000) 
                        
                    }
                })
        }
        
        traerImage(page,termino);
        elemento.current.scrollIntoView("smooth","end")
        return()=>setMonted(false);
    },[page,termino,monted]) 
    
    return (
        <StateGlobal.Provider value={[imagenes,page,setPage,buscarTermino,error,elemento]}>
            {children}
        </StateGlobal.Provider>
    )
}
export {StateGlobal}
export default Proveedor;
