import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projectcard from './Projectcard';
import Connect from './Connect'


function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 w-full">
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projectcard/>
      <Connect/>
    </div>
    </div>
  
  );
}

export default App;