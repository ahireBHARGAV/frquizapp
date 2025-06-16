import React from 'react'
import page1Text from '../components/Page1Text'
import Page1Text from '../components/Page1Text'

export const Page1 = () => {
  return (
    <div className='h-screen flex p-5 bg-white '> 


      <div className='  shadow-2xl shadow-gray-500 h-full w-full bg-black rounded-[20px] bg-[url(src/assets/images/bweye.jpeg)] bg-cover bg-right '> 
        {/* og bg page which contain image */}


          {/* <img className='absolute z-10 h-32 w-40 ' src="src/assets/images/logo-removebg-preview.png" alt="" />
           logo image */}

          <Page1Text />
           

        <div className='h-full w-full bg-black rounded-[20px] mask-r-to-100% '> 
          {/* mask for image */}


        </div>

      </div>

    </div>
  )
}

export default Page1
