import React from 'react';

const Page3 = () => {
  return (
    <div className='h-screen relative bg-gradient-to-r from-blue-800 to-amber-300 flex items-center justify-center'>
      <img className='absolute h-[80vh] object-cover'src="src\assets\images\image.png" alt="Tv" />
     <video autoplay="true" loop muted className='h-[69vh] w-[55vw] object-cover'src="src\assets\video\Video2.mp4"></video>
    </div>
  );
};

export default Page3;