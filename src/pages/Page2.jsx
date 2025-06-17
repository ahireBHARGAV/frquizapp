import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger)

  
  useGSAP(function () {
    gsap.from(".rotateText", {
      transform: 'rotateX(-80deg)',
      opacity:0,
      duration:1,
      stagger: 1,
      scrollTrigger: {
        trigger: '.rotateText',
        markers: true,
        start:"top 60%" ,
        end: "top -270%",
        scrub: 2
      }
    })
  })
  return (
    <div id="section2" className="text-center text-black p-10 bg-gradient-to-r from-blue-800 to-amber-300">
      <h3 className="text-gray-500 text-xl font-[anzo4]">
        @ mantramuse.studio 2025 | create and design
      </h3>
      <div  className="rotateText  mt-[60px]">
        <h1  className="text-[40vw] text-black font-[anzo2] uppercase leading-[33vw]">
          Creativity
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[40vw] text-black font-[anzo2] uppercase leading-[33vw]">
          Takes
        </h1>
      </div>
      <div className="rotateText bg-white">
        <h1 className="text-[40vw] text-black font-[anzo2] uppercase leading-[33vw]">
          Courage!
        </h1>
      </div>
      {/* <div className="rotateText bg-white">
        <h1 className="text-[38vw] text-black font-[anzo2] uppercase leading-[31vw]">
          and
        </h1>
      </div>
      <div className="rotateText bg-white">
        <h1 className="text-[38vw] text-black font-[anzo2] uppercase leading-[31vw]">
          we
        </h1>
      </div>
      <div className="rotateText bg-white">
        <h1 className="text-[38vw] text-black font-[anzo2] uppercase leading-[31vw]">
          are
        </h1>
      </div>
      <div className="bg-white">
        <h1 className="text-[38vw] text-black font-[anzo2] uppercase leading-[31vw]">
          Courageous
        </h1>
      </div> */}
    </div>
  );
};

export default Page2;