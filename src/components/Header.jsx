import React from 'react'
import 'remixicon/fonts/remixicon.css'

export const Header = () => {
  return (
    <div className='absolute w-full flex items-center justify-end p-20 z-10'>
        <button className='bg-black px-8 py-2 rounded-full text-white shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:bg-gray-500 '> Know Us </button>
        <i className="ri-more-2-line text-2xl hover:rotate-180 transition-all duration-300 ml-4 text-white"></i>
    </div>
  )
}

export default Header