import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 🔥 FireParticles Component
const FireParticles = ({ count = 20 }) => {
  const particleVariants = {
    initial: { opacity: 0, y: 0, scale: 0.5 },
    animate: {
      opacity: [1, 0],
      y: -120,
      x: [0, -15, 15, 0],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random(), // Random delay for each particle
      },
    },
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
          style={{
            bottom: '30px',
            left: `${32 + Math.random() * 6}%`, // Spread particles around the torch
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
        />
      ))}
    </>
  );
};

// 🔥 Header Component
const Header = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center relative text-white"
      style={{
        backgroundImage: 'url(/images/minecraft-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="text-center">
        {/* Animated Heading */}
        <motion.h1
          className="text-7xl md:text-8xl font-minecraft font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm Suvrat Ketkar!
          <div className="relative inline-block ml-4">
            <img
              src="/images/blue_torch.gif"
              alt="Animated Torch"
              className="inline-block"
              style={{ maxWidth: '85px', maxHeight: '85px' }}
            />
            {/* Fire Particles Component */}
            <div className="absolute inset-0 pointer-events-none">
              <FireParticles count={35} />
            </div>
          </div>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="bg-[#bd5019] inline-block px-8 py-4 rounded-lg mt-6 shadow-lg text-lg md:text-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm a Web Developer based in India!
        </motion.p>

        {/* Scroll Down Button */}
        <motion.button
          className="mt-10 p-4 rounded-full bg-white text-[#bd5019] hover:bg-[#bd5019] hover:text-white shadow-lg transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FaArrowDown size={30} />
        </motion.button>
      </section>
    </div>
  );
};

export default Header;
