import React from 'react'

const Tailwind2 = () => {
    return (
        <>
        <div className="container mx-auto mt-5 text-center"> 
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-red-500">A</div>
                <div className="bg-red-400">A</div>
                <div className="bg-red-300">A</div>
                <div className="bg-red-300">A</div>
            </div>
        </div>
        <div className="container mx-auto mt-5 text-center"> 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-blue-500">A</div>
                <div className="bg-blue-400">A</div>
                <div className="bg-blue-300">A</div>
                <div className="bg-blue-300">A</div>
            </div>
        </div>
        <div className="container mx-auto mt-5 text-center"> 
            <div className="grid grid-cols-4 gap-5">
                <div className="bg-pink-500 col-span-2">A1</div>
                <div className="bg-pink-400">A2</div>
                <div className="bg-pink-300">A3</div>
                <div className="bg-pink-300 col-span-full">A4</div>
            </div>
        </div>

        <div className="container mx-auto mt-5 text-center"> 
            <div className="grid grid-cols-12 gap-5">
                <div className="bg-gray-500">A1</div>
                <div className="bg-gray-400">A2</div>
                <div className="bg-gray-300">A3</div>
                <div className="bg-gray-300">A4</div>
                <div className="bg-gray-500">A5</div>
                <div className="bg-gray-400">A6</div>
                <div className="bg-gray-300">A7</div>
                <div className="bg-gray-300">A8</div>
                <div className="bg-gray-500">A9</div>
                <div className="bg-gray-400">A10</div>
                <div className="bg-gray-300">A11</div>
                <div className="bg-gray-300">A12</div>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="bg-gray-500 col-span-3">A1</div>
                <div className="bg-gray-400 col-span-3">A2</div>
                <div className="bg-gray-300 col-span-3">A3</div>
                <div className="bg-gray-300 col-span-3">A4</div>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-5">
                <div className="bg-gray-500 col-start-2">A1</div>
                <div className="bg-gray-400 col-start-4">A2</div>
                <div className="bg-gray-300 ">A3</div>
                <div className="bg-gray-300 ">A4</div>
            </div>

            <div className="grid grid-rows-4 mt-5 gap-4">
                <div className="bg-yellow-500 row-span-3">A1</div>
                <div className="bg-yellow-400 ">A2</div>
                <div className="bg-yellow-300 ">A3</div>
                <div className="bg-yellow-300 ">A4</div>
            </div>

            <div className="grid grid-cols-5 mt-5 gap-4">
                <div className="bg-green-500 ">A1</div>
                <div className="bg-green-400 ">A2</div>
                <div className="bg-green-300 col-span-3 row-span-2">A3</div>
                <div className="bg-green-300 ">A4</div>
                <div className="bg-green-300 ">A4</div>

            </div>

            </div>
        </>
    )
}

export default Tailwind2
