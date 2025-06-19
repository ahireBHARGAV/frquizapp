import React from 'react'
import 'remixicon/fonts/remixicon.css'

export const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end py-15 px-12 z-10'>
        <button className=' active:scale-95 backdrop-blur-xs border-2 px-8 py-2 rounded-full text-white shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:bg-black hover:text-white '> Know Us </button>
        <i className="ri-menu-4-line text-2xl hover:rotate-180 transition-all duration-300 ml-4 text-white"></i>
    </div>
  )
}

export default Header