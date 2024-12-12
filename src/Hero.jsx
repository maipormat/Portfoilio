import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
<div className="container mx-auto px-4 max-w-[1440px]">
    <div className="flex items-center justify-between p-8  z-0">
      {/* Text Section */}
      <div>
    <h1 className="text-5xl md:text-7xl font-bold">Hello, I'm Poramat</h1>
    <h2 className="text-3xl md:text-5xl text-yellow-500 mt-4">
      <Typewriter
        words={['Web developer', 'Junior Full Stack Developer']}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={30}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h2>
    <h2 className='text-3xl pt-4'>
    Committed to learning, Ready to take on new challenges
    </h2>
  </div>

      {/* Profile Image */}
      <div>
        <img
          src="/Images/mai.jpg"
          alt="Poramat"
          className="w-80 h-80 rounded-full object-cover"
        />
      </div>
    </div>
</div>
  );
};

export default HeroSection;
