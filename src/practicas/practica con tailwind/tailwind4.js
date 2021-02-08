import React,{useState,useEffect} from 'react'

const Tailwind4 = () => {
    const [desplegar,setDesplegar]=useState(false);
    
    
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setDesplegar(767>=window.innerWidth?true:false)            
            
        })
    },[])
    return (
        <>
            <nav className=" bg-blue-400  text-white flex flex-wrap justify-between py-5 px-5 w-full ">
                <div className="text-xl md:text-3xl">
                    Tailwind CSS
                </div>
                <a className="block md:hidden" href="#menu" onClick={()=>setDesplegar(!desplegar)}>
                    &#9776;
                </a>
                <div className={`transform duration-700 md:translate-x-0 ${desplegar&&' translate-x-20' } fixed  -left-20 inset-y-16 bg-blue-400 mt-1 md:static`}>
                    <div className={`text-white flex flex-col  md:px-5 text-opacity-80  cursor-pointer 
                        md:flex-row` }
                        >
                            <a className="border-b-2 md:border-none">Docs</a>
                            <a className=" md:mx-5  border-b-2 md:border-none">Examples</a>
                            <a className="border-b-2 md:border-none">Blog</a>
                    </div>
                    
                </div>
                
            </nav>
            {/* <button className="transform -translate-x-2 hover:translate-x-7 duration-500 bg-green-500 text-white px-5 py-1 rounded  ">
                boton
            </button> */}
            
        </>
    )
}

export default Tailwind4;
        
                            
                    
