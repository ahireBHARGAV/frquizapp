import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function(){
    gsap.from('.rotateText',{
      transform: 'rotateX(-80deg)',
      opacity:0,
      duration: 1,
      stagger: 1,
      scrollTrigger:{
      trigger: '.rotateText',
      //  markers: true,
       start: 'top 50%',
       end: 'top -100%',
      scrub: 1
      }
    })

  })
  return (
    <div id='section2'className='text-center text-black bg-white pt-5 p-28'>
      <h3 className='text-center text-grey-500 text-xl font-[anzo4]'>@ manatramuse.studio 2025 | design and create</h3>
      <div className='rotateText  mt-5'>
        <h1 className='text-[38vw] overflow-hidden font-[anzo2]  text-black uppercase leading-[33vw]'>Creativity</h1>
      </div>
      <div className='rotateText '>
        <h1 className='text-[38vw] font-[anzo2]  overflow-hidden text-black uppercase leading-[33vw]'>takes</h1>
      </div>
      <div className='rotateText '>
        <h1 className='text-[38vw] font-[anzo2] overflow-hidden text-black uppercase leading-[33vw]'>courage!</h1>
      </div>
    </div>
  );
};

export default Page2;