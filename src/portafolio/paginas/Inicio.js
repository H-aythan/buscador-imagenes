import React, { useEffect, useState } from 'react'

const Inicio = () => {
    const[animation,setAnimation]=useState(false);
    const[animation2,setAnimation2]=useState(false)
    const[mounted,setMounted]=useState(true)
    
    useEffect(()=>{

        if(mounted){
        setTimeout(() => {
            setAnimation(true)
        }, 1000);
        setTimeout(() => {
            setAnimation2(true)
        }, 1500);
        }
        
        return ()=>{
            setMounted(false);
        }
    },[mounted])
    
    return (
        <div className="relative w-full h-full animate-move-t flex-grow overflow-hidden
        flex justify-center bg-portafolio bg-cover bg-center">
            <title>Home</title>
            <div className="pt-2 mt-20 text-center h-72">
                
                <h1 className="sm:text-4xl md:text-5xl border-b-4 sm:p-5 "> 
                    <p className={`${!animation&&"invisible"} 
                    ${animation&&"sm:relative animate-move-text-l visible"}`}>
                        Anthony Romero
                    </p>
                </h1>
               
                <p className={`sm:text-2xl opacity-75  text-center ${!animation2&&"invisible"} 
                    ${animation2&&"relative animate-move-text-l visible"}`}
                >
                    Desarrollador Front-End
                </p>
            </div>
         
        </div>
    )
}

export default Inicio;

