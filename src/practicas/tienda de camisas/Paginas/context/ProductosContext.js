import {createContext,useEffect,useState} from 'react'
import datos from '../../datos/datos.json';
const ProductosContex=createContext();

const ProductoProvider=({children})=>{
    const [producto,setProducto]=useState()
    
    useEffect(()=>{
        
            setProducto(datos);

        
        
        return(
            setProducto(datos)
        )
    },[])
    
    return(
        <ProductosContex.Provider value={[producto,setProducto]}>
            {children}
        </ProductosContex.Provider>

    )

}
export {ProductoProvider}
export default ProductosContex;


