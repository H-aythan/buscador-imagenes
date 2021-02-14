import React from 'react'

const Modal = ({modal,setModal}) => {
    return (
        <div className="h-screen flex justify-center items-center w-screen bg-gray-800 bg-opacity-75 fixed top-0 z-40">
            <div className="md:w-1/3 bg-gray-900 flex flex-wrap ">
                <div className="w-full h-10 float-right">
                    <button className="float-right text-xl focus:outline-none mt-2 mr-4"
                        onClick={()=>setModal(!modal)}
                    >
                        X
                    </button>
                </div>
                <p className="w-full text-xl text-center">Formas de contactarme </p>
                <div className="borde h-4/5 w-full px-10">
                    <form className="flex flex-wrap flex-col py-10 ">
                        <div className="flex flex-col max-h-16 flex-shrink">
                            <p className="mb-2">Nombre:</p>
                            <input className=" pl-2 focus:outline-none focus:border-b-2 border-orange-600 h-10 bg-gray-800 rounded" type="text"/>
                        </div>
                        <div className="flex flex my-14 flex-col max-h-16">
                            <p className="mb-2">Correo electronico:</p>
                            <input className="focus:border-b-2 focus:outline-none border-orange-600 pl-2 h-10 bg-gray-800 rounded" type="text"/>
                        </div>
                        <div className="flex flex flex-col max-h-24 sm:max-h-32">
                            <p className="mb-2">Mensaje:</p>
                            <textarea className="focus:outline-none focus:border-2 border-orange-600 pl-2 max-h-32 h-32 bg-gray-800 rounded"></textarea>
                        </div>
                    </form>
                   
                    <div className="flex flex-col sm:flex-row w-full items-center justify-between flex-grow-0 py-5">
                        <img className="bg-white w-8 sm:w-12 " src="/img/logo/face.png" alt="face.png"/>
                        <p className="absolute sm:static flex-shrink text-xs sm:text-sm">anthonyromeroromero014@gmail.com</p>
                        <img className="bg-white w-8 flex-shrink sm:w-12" src="/img/logo/github.png" alt="Linkedin.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
