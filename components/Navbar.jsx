import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="sm:w-[80%] w-full mx-auto filter fixed z-10 left-1/2 transform -translate-x-1/2 mt-3 py-2 px-4 rounded-lg flex justify-between items-center">
        <Image src="/images/logo.webp" width={100} height={100} className="w-[50px] " alt="logo"/>
        <a href="#contact">
        <button className='bg-gradient_pink p-2 rounded text-white'>Contact</button></a>
    </div>
  )
}

export default Navbar
export const revalidate = 3