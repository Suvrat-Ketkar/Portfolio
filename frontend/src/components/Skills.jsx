import { motion } from 'framer-motion';

const Skills = () => {
  // Animation variants for scroll-in effect
  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    'Frontend Development',
    'Machine Learning',
    'Backend Development',
    'React',
    'Flask & Express.js',
    'Natural Language Processing',
  ];

  return (
    <section className="max-w-6xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center text-[#F3E0C7] mb-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-[#8B5A2B] border-2 border-[#5A3820] rounded-[12px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.4),inset_0_-4px_#5A3820] text-center text-[#F3E0C7] font-semibold text-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
          >
            🌿 {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
