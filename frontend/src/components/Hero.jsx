// import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import MyButton from './MyButton.jsx';

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto p-10">
      {/* Split layout using flex */}
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Left Section */}
        <div className="flex-1">
          {/* Work Section */}
          <section className="mt-8">
            <h2 className="underline text-3xl font-bold">About Me</h2>
            <p className="mt-6 font-body text-2xl leading-relaxed">
              I am a Computer Engineering student based in India. <br />
              I am Pursuing my degree from Pune Institute of Computer Technology. <br />
              I have a keen interest in Machine Learning and Web Development. <br />
              I am passionate about building web applications and scalable web solutions.
            </p>

            <MyButton label="Explore My Work" />
          </section>

          {/* Bio Section */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold">Bio</h2>
            <p className="mt-4 text-xl">
              <strong>2004</strong> Born in Pune, India.
            </p>
          </section>
        </div>

        {/* Right Section - Bigger Square Image */}
        <div className="flex-1 flex justify-end">
          <img
            src="/images/DX86X_20240610_142710_lmc_8.4.jpg"
            alt="Profile"
            className="rounded-2xl shadow-xl object-cover w-full md:w-[500px] h-[500px]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
