// import { motion } from 'framer-motion';

// const Skills = () => {
//   // Animation variants for scroll-in effect
//   const skillVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const skills = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'Tailwind CSS',
//     'React',
//     'Node/Express',
//     'Flask',
//     'SQL',
//     'MongoDB',
//     'Python',
    
    

//   ];

//   return (
//     <section className="max-w-6xl mx-auto p-6 mt-10">
//       <h2 className="text-3xl font-bold text-center text-[#F3E0C7] mb-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
//         My Skills
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill}
//             className="bg-[#8B5A2B] border-2 border-[#5A3820] rounded-[12px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.4),inset_0_-4px_#5A3820] text-center text-[#F3E0C7] font-semibold text-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]"
//             variants={skillVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ delay: index * 0.2 }}
//           >
//             🌿 {skill}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { motion } from 'framer-motion';

// const Skills = () => {
//   // Animation variants for scroll-in effect
//   const skillVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const skills = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'Tailwind CSS',
//     'React',
//     'Node/Express',
//     'Flask',
//     'SQL',
//     'MongoDB',
//     'Python',
//   ];

//   return (
//     <section className="max-w-6xl mx-auto p-6 mt-10">
//       <h2 className="text-3xl font-bold text-center text-[#5A3820] mb-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
//         My Skills
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill}
//             className="relative bg-[#F5E1A4] border-2 border-[#5A3820] w-32 h-24 shadow-[0_6px_20px_rgba(0,0,0,0.3),inset_0_-4px_#5A3820] text-center flex items-center justify-center text-[#3E2C1D] font-semibold text-md rounded-[12px] transform transition-transform duration-200 ease-in-out hover:-translate-y-3 hover:shadow-[0_12px_25px_rgba(0,0,0,0.4),inset_0_-6px_#5A3820] cursor-pointer"
//             style={{ transform: 'perspective(500px) rotateX(5deg) rotateY(5deg)' }}
//             variants={skillVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ delay: index * 0.15 }}
//           >
//             🎀 {skill}
//             {/* Slanted edges effect */}
//             <div className="absolute inset-0 rounded-[12px] border-2 border-[#5A3820] shadow-inner pointer-events-none" style={{ transform: 'translateY(6px) translateX(4px) rotateX(3deg) rotateY(3deg)' }}></div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;





// import { motion } from 'framer-motion';

// const Skills = () => {
//   // Animation variants for scroll-in effect
//   const skillVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const skills = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'Tailwind CSS',
//     'React',
//     'Node/Express',
//     'Flask',
//     'SQL',
//     'MongoDB',
//     'Python',
//   ];

//   return (
//     <section className="max-w-6xl mx-auto p-6 mt-10">
//       <h2 className="text-3xl font-bold text-center text-[#8a5e0a] mb-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
//         My Skills
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill}
//             className="relative bg-[#e0b985] border-b-4 border-[#5A3820] rounded-lg p-4 shadow-[0_6px_12px_rgba(0,0,0,0.3)] text-center text-[#5A3820] font-semibold text-base"
//             style={{
//               transform: 'perspective(600px) rotateX(15deg)',
//               boxShadow: 'inset 0 -4px 8px rgba(90, 56, 32, 0.6), 0 6px 12px rgba(0,0,0,0.3)',
//             }}
//             variants={skillVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ delay: index * 0.15 }}
//           >
//             🌿 {skill}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { motion } from 'framer-motion';

const Skills = () => {
  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Tailwind CSS',
    'React',
    'Node/Express',
    'Flask',
    'SQL',
    'MongoDB',
    'Python',
  ];

  return (
    <section className="max-w-6xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold  text-center text-[#8a5e0a] mb-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="relative font-navbar bg-[#e0b985] border-b-4 border-[#5A3820] rounded-lg p-4 shadow-[0_10px_15px_rgba(0,0,0,0.4)] text-center text-[#5A3820] font-semibold text-base"
            style={{
              transform: 'perspective(600px) rotateX(30deg) rotateY(-20deg) skewY(-10deg)',
              boxShadow: 'inset 0 -6px 12px rgba(90, 56, 32, 0.6), 0 10px 20px rgba(0,0,0,0.4)',
            }}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.15 }}
          >
            🌿 {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

