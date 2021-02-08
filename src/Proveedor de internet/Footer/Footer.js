import React from 'react'

const Footer = () => {
    return (
        <footer className=" bg-gray-800 h-20  flex justify-between px-5 items-center border-t">
             <a>CorreoExample@gmail.com</a>
             <p className="text-sm">3G Inter Company ©</p>
             <ul className="flex">
                <a className="cursor-pointer "><img className="w-8 h-8 rounded-full" src="/img/iconinstagram.png"/></a>
                <a className="cursor-pointer mx-10 "><img className="w-8 h-8 rounded-full" src="/img/icontwiter.png"/></a>
                <a className="cursor-pointer "><img className="w-8 h-8 rounded-full" src="/img/iconface2.png"/></a>
            </ul>  
        </footer>
    )
}

export default Footer
