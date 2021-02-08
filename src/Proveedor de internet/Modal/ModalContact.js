import {useState,useRef} from 'react'



const ModalContact = ({openModal,setOpenModal}) => {
    const [formulario,setFormulario]=useState({});
    const inpuRef=useRef();   
    console.log(inpuRef.current)
    const obtenerDatos=(e)=>{
         
       
        setFormulario(
            {...formulario,[e.target.name]:e.target.value,}
        )
    }

    return (
        <div className={`${openModal&&"hidden"} z-40 bg-opacity-70 bg-gray-800 top-0 
        fixed h-screen w-screen bg-white text-black flex justify-center items-center`}
        onClick={()=>setOpenModal(!openModal)}
        >
            <div className=" bg-gray-600 text-white h-3/4 w-1/3 bg-opacity-100  rounded-lg" onClick={(e)=>e.stopPropagation()}>
                <button className=" float-right h-10 w-10 border-green-200 " onClick={()=>setOpenModal(!openModal)}>X</button>
                <div className="flex flex-col  my-5 w-full h-full ">
                    <h1 className="my-5 text-center text-2xl">Informacion de Contacto</h1>
                    <form className="flex flex-col px-5 text-sm">
                        <label>Nombre: </label>
                        <input className="px-1 text-black border-black border rounded my-4 py-1 "placeholder="Nombre" type="text"
                           value={formulario.nombre}     onChange={(e)=>obtenerDatos(e)} name="nombre"
                           ref={inpuRef}
                        />
                        <label>Correo:</label>
                        <input className="px-1 text-black border-black border rounded my-4 py-1" placeholder="Email" type="email"
                            value={formulario.correo}    onChange={(e)=>obtenerDatos(e)} name="correo"
                        />
                        <label>Mensaje:</label>
                        <textarea className="px-1 text-black border-black border my-4 rounded h-32 max-h-32 " maxLength="300"
                            value={formulario.mensaje}    onChange={(e)=>obtenerDatos(e)} name="mensaje"
                        />
                        <input  className="bg-blue-700 w-20 py-1 rounded text-white cursor-pointer" type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalContact

