import React, { useEffect, useState } from 'react'

const Inicio = () => {
    const[animation,setAnimation]=useState(false);
    const[animation2,setAnimation2]=useState(false)
    const[animation3,setAnimation3]=useState(false)
    const[mounted,setMounted]=useState(true)
    
    useEffect(()=>{

        if(mounted){
        var time1=setTimeout(() => {
            setAnimation(true)
        }, 1000);
        var time2=setTimeout(() => {
            setAnimation2(true)
        }, 1500);
        var time3=setTimeout(() => {
            setAnimation3(true)
        }, 2000);
        }
      
        return ()=>{
            setMounted(false);
            clearTimeout(time1,time2,time3)
        }
    },[mounted])
    
    return (
        <div className="relative w-full h-full sm:animate-move-t flex-grow 
            flex xl:flex-col flex-wrap justify-center xl:justify-start md:bg-portafolio bg-cover bg-center
            bg-gradient-to-b from-blueGray-900 to-blueGray-800"
        >
            <title>Home</title>
            <div className="pt-2 h-24 xl:mt-32 ">
                
                <h1 className="text-2xl sm:text-4xl md:text-5xl flex justify-center w-full"> 
                    <p className={`p-2 border-b-4 ${!animation&&"invisible"} 
                        ${animation&&"relative animate-move-text-l visible"}`}>
                        Anthony Romero
                    </p>
                </h1>
               
                <p className={`sm:text-2xl opacity-75 text-center ${!animation2&&"invisible"} 
                    ${animation2&&"relative animate-move-text-l visible"}`}
                >
                    Desarrollador Front-End
                </p>
                
            </div>
            <div className={`px-10 sm:mt-32 sm:text-2xl xl:text-lg w-full justify-center flex sm:justify-between flex-wrap ${!animation3&&"invisible"}  ${animation3&&"relative animate-move-text-l visible"}`}>
                <p className="w-60 text-center py-2 ">Soy un desarrollador dedicado 
                    al area web, para ser mas especifico en la especialidad del desarrollo front-end
                </p>
                <p className="w-60 text-center py-2">Las herramientas que mas gustan para 
                    para desarrollar en el front-end son React Js y tailwindCss
                </p>
            </div>
        </div>
    )
}

export default Inicio;

