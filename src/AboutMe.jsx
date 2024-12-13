import React, { useState } from 'react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className="container mx-auto px-4 max-w-[1440px] flex items-stretch space-x-8">
      {/* Block: Download CV และรูปไก่ */}
      <div className="flex flex-col items-center  w-1/3">
        {/* รูปภาพไก่ */}
        <img
          src="/Images/rb_11230.png"
          alt="chick"
          className="w-auto  object-contain"
        />
        {/* ปุ่ม Download CV */}
          <button
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={() => window.open('/pdf/Poramat CV.pdf')}
          >
            Download CV
          </button>
 
      </div>

      {/* Block: About Me */}
      <div className="p-8 border-2 border-yellow-400 rounded-lg w-2/3">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6 text-gray-800">
          I started my career as a video editor with 4 years of experience. Later on, I had the opportunity to work on editing projects related to coding, which sparked my interest in web development. Driven by curiosity, I began self-studying web technologies and enrolled in the JSD8 Bootcamp. Since then, I have been continually expanding my skills and knowledge in web development, eager to learn and grow every step of the way.
        </p>

        {/* Tabs */}
        <div className="flex space-x-6 mb-4 text-gray-600">
          <button
            className={`text-lg ${activeTab === 'skills' ? 'text-purple-500 border-b-2 border-purple-500' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`text-lg ${activeTab === 'education' ? 'text-purple-500 border-b-2 border-purple-500' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-lg">
          {activeTab === 'skills' && (
            <ul className="list-disc pl-5">
              <li>JavaScript, React, Node.js, Express</li>
              <li>TailwindCSS, MongoDB, HTML, CSS, Git</li>
              <li>Responsive Design & Web Development</li>
            </ul>
          )}
          {activeTab === 'education' && (
            <ul className="list-disc pl-5">
              <li>Kmutt (Applied Computer Science-Multimedia)</li>
              <li>JSD8 Bootcamp Graduate</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
