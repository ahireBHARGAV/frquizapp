import React, { useRef } from 'react'
import page1Text from '../components/Page1Text'
import Page1Text from '../components/Page1Text'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



export const Page1 = () => {
  var xvalue = 0;
  var yvalue = 0;
  const tiltref = useRef(null)



  const mouseMoving = (e) => {

    xvalue = (e.clientX - tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width/2)/50;
    yvalue = -((e.clientY - tiltref.current.getBoundingClientRect().y - tiltref.current.getBoundingClientRect().height/2)/50);
    gsap.to(tiltref.current, {
      transform: `rotateX(${yvalue}deg) rotateY(${xvalue}deg)`,
      duration: 1,
      ease: "power2.out"
    });
  }


  return (

    <div onMouseMove={(e)=>{
        mouseMoving(e)
      
      }} className='h-screen flex p-5 bg-white items-center justify-center'>  


      <div id='bgdiv' className='   h-full w-full bg-black rounded-[20px] bg-[url(/ko.jpg)] bg-cover bg-right '> 
        {/* og bg page which contain image */}

          {/* <img className='absolute z-10 h-32 w-40 ' src="src/assets/images/logo-removebg-preview.png" alt="" />
           logo image */}


        <div id='tiltdiv' ref={tiltref} className='h-full w-full bg-[url(/SHOTS.png)] rounded-[20px]  bg-left-top bg-cover '> 
          {/* mask for image */}
        </div>

        {/* <div  className=' rounded-4xl absolute z-10  text-white top-60 left-20  '>
          <h1 className="text-6xl font-mono font-bold leading-9">WE <span className="text-amber-400">BLEED</span></h1>
          <h1 className='text-6xl font-mono font-bold leading-9"'> WE BREAK</h1>
          <h2 className="text-6xl font-mono font-bold leading-9">BUT WE SHALL,</h2>
          <h2 className='text-6xl font-mono font-bold leading-15'>NEVER FALL.</h2>
          <h2 className="text-3xl font-sans font-bold leading-5"><span className="text-blue-700">TOGETHER</span> WE WILL RISE!</h2>
        </div> */}
      </div>

    </div>
  )
}

export default Page1
