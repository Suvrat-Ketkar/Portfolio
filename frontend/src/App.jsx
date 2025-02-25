import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import './index.css'; // Make sure Tailwind CSS is included

const App = () => {
  return (
    <div className="bg-[#f6e5cf] text-gray-800 min-h-screen font-inter">
      <Navbar />
      <Header />
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
