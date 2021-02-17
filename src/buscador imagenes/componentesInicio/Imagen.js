import React,{useState} from 'react'

const Imagen = ({imagen}) => {
    const[hover,setHover]=useState(false);
    const{largeImageURL:image,type,user,favorites,likes,downloads}=imagen;
    
    return (
        <div className="relative flex-grow sm:w-72 items-center sm:h-72 m-0.5 hover:border text-white" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <img src={image} alt={type} className="w-full h-full"/>
            {hover&&<div className="absolute text-xs pt-1 bottom-0 h-5 w-full text-center flex px-2 bg-gray-800 opacity-75 animate-opacity-0-1 justify-between" >
                <p className="flex">
                    <img className="w-3 h-3 sm:w-4 sm:h-4 mr-1 rounded-full" src="/img/logo/user.jpg" alt="user.jpg"/> {user}
                </p> 
                <div className="flex">
                    <p className="flex">
                        <img className="w-3 h-3 sm:w-4 sm:h-4 mr-1 rounded-full" src="/img/logo/corazon1.jpg"alt="corazon.jpg" /> {favorites}
                    </p>
                    <p className="flex mx-1">
                        <img className="w-3 h-3 sm:w-4 sm:h-4 mr-1 rounded-full" src="/img/logo/like.jpg" alt="like.jpg"/>   {likes}
                    </p>
                    <p className="flex">
                        <img className="w-3 h-3 sm:w-4 sm:h-4 mr-1 rounded-full" src="/img/logo/descarga.jpg" alt="descarga.jpg"/>   {downloads}
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default Imagen
