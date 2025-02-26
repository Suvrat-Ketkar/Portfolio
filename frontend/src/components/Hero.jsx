// // // import React from 'react';
// // import { FaArrowRight } from 'react-icons/fa';
// // import MyButton from './MyButton.jsx';

// // const Hero = () => {
// //   return (
// //     <main className="max-w-7xl mx-auto p-10">
// //       {/* Split layout using flex */}
// //       <div className="flex flex-col md:flex-row items-center gap-16">
// //         {/* Left Section */}
// //         <div className="flex-1">
// //           {/* Work Section */}
// //           <section className="mt-8">
// //             <h2 className="underline text-3xl font-bold">About Me</h2>
// //             <p className="mt-6 font-body text-2xl leading-relaxed">
// //               I am a Computer Engineering student based in India. <br />
// //               I am Pursuing my degree from Pune Institute of Computer Technology. <br />
// //               I have a keen interest in Machine Learning and Web Development. <br />
// //               I am passionate about building web applications and scalable web solutions.
// //             </p>

// //             <MyButton label="Explore My Work" />
// //           </section>

// //           {/* Bio Section */}
// //           <section className="mt-10">
// //             <h2 className="text-3xl font-bold">Bio</h2>
// //             <p className="mt-4 text-xl">
// //               <strong>2004</strong> Born in Pune, India.
// //             </p>
// //           </section>
// //         </div>

// //         {/* Right Section - Bigger Square Image */}
// //         <div className="flex-1 flex justify-end">
// //           <img
// //             src="/images/DX86X_20240610_142710_lmc_8.4.jpg"
// //             alt="Profile"
// //             className="rounded-2xl shadow-xl object-cover w-full md:w-[500px] h-[500px]"
// //           />
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Hero;


// import { motion } from 'framer-motion';
// import { FaArrowRight } from 'react-icons/fa';
// import MyButton from './MyButton.jsx';

// const Hero = () => {
//   // Animation variants for the hero section
//   const heroVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 1, ease: 'easeOut' },
//     },
//   };

//   return (
//     <main className="max-w-7xl mx-auto p-10">
//       {/* Split layout using flex */}
//       <div className="flex flex-col md:flex-row items-center gap-16">
//         {/* Left Section */}
//         <motion.div
//           className="flex-1"
//           initial="hidden"
//           animate="visible"
//           variants={heroVariants}
//         >
//           {/* Work Section */}
//           <section className="mt-8">
//             <h2 className="underline text-3xl font-bold">About Me</h2>
//             <p className="mt-6 font-body text-2xl leading-relaxed">
//               I am a Computer Engineering student based in India. <br />
//               Pursuing my degree from Pune Institute of Computer Technology. <br />
//               Keen interest in Machine Learning and Web Development. <br />
//               Passionate about building web applications and scalable solutions.
//               I am an undergraduate student pursuing Computer Science at VIT Pune. 
//               I am a passionate Web Developer who specializes in creating clean and responsive websites.
//               With expertise in MongoDB, Express.JS, React.JS, and Node.JS as the primary tech-stack,
//               I strive to build user-friendly websites that enhance the overall user experience. 
//               Another area of interest for me is the field of artificial intelligence . 
//               I am fascinated by the potential of AI tools to streamline processes and enhance user interactions. 
//               I have experience developing chatbots, text summarizers, and image processors using the Python programming language.
//               Currently, I am focused on developing websites that are not only visually appealing but 
//               also easy to navigate and provide features that improve the overall user experience. 
//               I believe that a well-designed website can make a significant impact on how users interact with digital platforms.
//             </p>

//             <MyButton label="Explore My Work" />
//           </section>

//           {/* Bio Section */}
//           <section className="mt-10">
//             <h2 className="text-3xl font-bold">Bio</h2>
//             <p className="mt-4 text-xl">
//               <strong>2004</strong> Born in Pune, India.
//             </p>
//           </section>
//         </motion.div>

//         {/* Right Section - Profile Image Animation */}
//         <motion.div
//           className="flex-1 flex justify-end"
//           initial="hidden"
//           animate="visible"
//           variants={imageVariants}
//         >
//           <img
//             src="/images/DX86X_20240610_142710_lmc_8.4.jpg"
//             alt="Profile"
//             className="rounded-2xl shadow-xl object-cover w-full md:w-[500px] h-[500px]"
//           />
//         </motion.div>
//       </div>
//     </main>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import MyButton from './MyButton.jsx';

const Hero = () => {
  // Animation variants for the hero section
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <main className="max-w-7xl mx-auto p-10">
      {/* Split layout using flex */}
      <div className="flex flex-col md:flex-row items-start gap-16">
        {/* Left Section */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* Work Section */}
          <section className="mt-8">
            <h2 className="underline text-3xl font-bold">About Me</h2>
            <p className="mt-6 font-navbar text-xl leading-relaxed">
              I am a <span className="font-semibold">Computer Engineering</span> student based in <span className="font-semibold">India</span>.<br />
              Pursuing my degree from <span className="font-semibold">Pune Institute of Computer Technology</span>.<br />
              <br />
              I specialize in creating clean and responsive websites using <span className="font-semibold">MongoDB</span>, <span className="font-semibold">Express.js</span>, <span className="font-semibold">React.js</span>, and <span className="font-semibold">Node.js</span> as my primary tech stack.<br />
              I am fascinated by the potential of <span className="font-semibold">Artificial Intelligence</span> to streamline processes and enhance user interactions.<br />
              <br />
              I have developed <span className="font-semibold">chatbots</span>, <span className="font-semibold">text summarizers</span>, and <span className="font-semibold">image processors</span> using <span className="font-semibold">Python</span>.<br />
              My focus is on creating websites that are visually appealing, easy to navigate, and provide a seamless user experience.<br />
              <br />
              I believe that a well-designed website can significantly impact how users interact with digital platforms.
            </p>
            <MyButton label="Explore My Work" />
          </section>

          {/* Bio Section */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold">Bio</h2>
            <p className="mt-4 text-xl">
              <strong>2004</strong> - Born in <span className="font-semibold">Pune, India</span>.
            </p>
          </section>
        </motion.div>

        {/* Right Section - Profile Image Animation */}
        <motion.div
          className=" flex justify-end items-start md:w-[400px]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/images/DX86X_20240610_142710_lmc_8.4.jpg"
            alt="Profile"
            className="rounded-2xl shadow-xl object-cover w-full md:w-[400px] h-[650px] md:h-[700px]"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
