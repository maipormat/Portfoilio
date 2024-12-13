import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projectcard from './Projectcard';
import Connect from './Connect';

function App() {
  return (
    <div>
      <Navbar />
      <div id="about" className="bg-gray-100 w-full pt-16">
          <Hero />
          <AboutMe />
        <div id="projects">
          <Skills />
          <Projectcard />
        </div>
        <div id="contact">
          <Connect />
        </div>
      </div>
    </div>
  );
}

export default App;
