import React from 'react';
import { FaPaw, FaMoon,FaJava } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-[#8B5A2B] rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.4),inset_0_-4px_#5A3820] border-2 border-[#5A3820]">
      <div className="flex items-center space-x-2">
        <FaJava className="text-[#F3E0C7] text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]" />
        <span className="font-bold text-lg text-[#F3E0C7]">Suvrat Ketkar</span>
      </div>
      <nav className="space-x-4">
        {['My Work', 'Resume', 'Socials', 'About Me', 'Contact'].map((item) => (
          <a
            key={item}
            className="font-navbar text-[#F3E0C7] hover:text-[#FFD700] transition duration-150 ease-in-out drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]"
            href="#"
          >
            {item}
          </a>
        ))}
      </nav>
      <button className="bg-[#BD5019] border-2 border-[#5A3820] text-white p-2 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_-2px_#A94417] transition-all duration-150 active:shadow-[inset_0_2px_#5A3820]">
        <FaMoon />
      </button>
    </header>
  );
};

export default Navbar;
