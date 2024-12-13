import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gray-100 shadow-xl z-10">
      {/* Logo */}
      <div className="text-2xl font-semibold">MAI</div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        {/* About Button */}
        <button
          onClick={() => scrollToSection('about')}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          About
        </button>
        {/* Projects Button */}
        <button
          onClick={() => scrollToSection('projects')}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          Projects
        </button>
        {/* Contact Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-200 transition"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
