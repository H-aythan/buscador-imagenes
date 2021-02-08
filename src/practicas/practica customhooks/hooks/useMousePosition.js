import {useState,useEffect} from 'react'

const initialPosition={x:null,y:null}

const useMousePosition = () => {
    const [position,setPosition]=useState(initialPosition);
    useEffect(()=>{
        const handleMouseMove=(e)=>{
            
            const{clientX:X,clientY:Y}=e;
            
            setPosition({x:X,y:Y})
        }
        window.addEventListener('mousemove',handleMouseMove)    
    },[])
    
    
    return position
    
}

export default useMousePosition
        
