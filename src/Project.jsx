import React from 'react';
import GitHubLogo from './assets/img/github.png'; // GitHub logo
import projectsData from './projectsData';

const { projects, techIcons } = projectsData;

function Project() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-blue-200 to-cyan-500 pt-24">
      <div className="text-white font-medium text-center mt-8 text-4xl">Projects</div>
      <div className="flex flex-wrap justify-center items-center mt-4 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg m-4 p-6 w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={project.image} alt={project.title} className="w-32 h-32 mx-auto visible" />
            <hr className="my-4 border-gray-300" />
            <h3 className="text-xl font-semibold mt-4 text-center">{project.title}</h3>
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-600 mt-2 text-center">{project.description}</p>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-center mt-2">
              <span className="text-gray-700 mr-2">Technologies Used:</span>
              {(project.technologies || []).map((tech, idx) => (
                <div key={idx} className="relative group">
                  <img
                    src={techIcons[tech]}
                    alt={`${tech} icon`}
                    className="w-6 h-6 mx-1 transform transition-transform duration-300 hover:scale-125"
                  />
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-4 border-gray-300" />
            {(project.githubUrl || project.deployedUrl) && (
              <div className="flex justify-between mt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-600 font-semibold transform transition-transform duration-300 hover:scale-110"
                  >
                    <img src={GitHubLogo} alt="GitHub" className="w-6 h-6 mr-2" />
                    Codebase
                  </a>
                )}
                {project.deployedUrl && (
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 font-semibold transform transition-transform duration-300 hover:scale-110"
                  >
                    View
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
