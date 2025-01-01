import React from 'react';
import GitHubLogo from './assets/img/StudyMaterial.png'; // GitHub logo
import projects from './projectsData';

function Project() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-blue-200 to-cyan-500 pt-16">
      <div className="text-white font-medium text-center mt-8 text-4xl">Projects</div>
      <div className="flex flex-wrap justify-center items-center mt-4 w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg m-4 p-6 w-80">
            <img src={project.image} alt={project.title} className="w-32 h-32 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-center">{project.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{project.description}</p>
            <div className="flex justify-center mt-4">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mr-4">
                <img src={GitHubLogo} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-semibold">
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
