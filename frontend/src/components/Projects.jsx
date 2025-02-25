const Projects = () => {
    const projects = [
      { id: 1, title: 'Project 1', description: 'A cool project', link: '#' },
      { id: 2, title: 'Project 2', description: 'Another cool project', link: '#' },
    ];
  
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;