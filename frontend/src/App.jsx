import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './index.css'; // Make sure Tailwind CSS is included

const App = () => {
  return (
    <div className="bg-minecraft text-gray-800 min-h-screen font-inter">
      <Navbar />
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
