import React from 'react'
import Navegacion from './Navegacion'

const Header = (props) => {
    
    return (
        <header className=" bg-gray-700  h-16 flex justify-between  px-5 border-b">
            <h1 className="text-2xl my-auto flex">3G Inter<p className="ml-1 text-xs pt-3">company</p></h1>
            <Navegacion data={props}/>
        </header>
    )
}

export default Header
