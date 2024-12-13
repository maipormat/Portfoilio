import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Connect = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      {/* Greeting Message */}
      <h1 className="text-4xl font-bold mb-4">Hello! Let's Connect</h1>
      <p className="text-lg text-gray-600 mb-8">
        Feel free to connect with me on LinkedIn or check out my projects on GitHub.
      </p>

      {/* Icons */}
      <div className="flex justify-center space-x-6">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/poramat/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-6xl hover:text-blue-800 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/maipormat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-6xl hover:text-gray-600 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Connect;
