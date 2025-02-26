import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ScalpSmart',
    description: 'An app which predicts hairloss stage amongst men.',
    tech: ['Computer Vision', 'Flask', 'SQlite'],
    link: 'https://github.com/Suvrat-Ketkar/ScalpSmart',
  },
  {
    title: 'TownSync',
    description: 'A Community Complaint platform for reporting and tracking local community complaints.',
    tech: ['MongoDB', 'Express.js', 'Google Maps API'],
    link: 'https://github.com/suvrat-ketkar/TownSync',
  },
  {
    title: 'Express JWT Auth',
    description: 'A Complete JWT authentication system built using Express.js and MongoDB.',
    tech: ['MongoDB', 'Express.js', 'JWT'],
    link: 'https://github.com/suvrat-ketkar/express-jwt-auth',
  },
  {
    title: 'Consumer Complaint Analytics',
    description: 'An consumer complaint analytics platform that provides insights into consumer complaints  .',
    tech: ['Python', 'Flask', 'NLTK'],
    link: 'https://github.com/suvrat-ketkar/quiz-generator',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto p-6 mt-16">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-[#f6e5cf] mb-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
        My Work
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative bg-[#0b6e71] border-4 border-[#4b433a] rounded-lg p-5 shadow-xl 
                       text-white hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Project Title */}
            <h3 className="text-2xl font-bold text-[#f6e5cf] mb-2">{project.title}</h3>
            
            {/* Description */}
            <p className="text-[#f6e5cf] opacity-80">{project.description}</p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#bd5019] text-[#f6e5cf] px-3 py-1 text-sm rounded-md shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Pixelated Overlay Effect */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
