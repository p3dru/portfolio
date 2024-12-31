import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real application, you would fetch the project details based on the id
  const project = {
    title: `Project ${id}`,
    description: 'This is a detailed description of the project. It would typically include information about the project goals, technologies used, challenges faced, and outcomes achieved.',
    image: '/placeholder.svg?height=600&width=800',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://example.com/project',
  };

  return (
    <div className="project-detail fade-in">
      <Link to="/portfolio/works" className="back-link">← Voltar</Link>
      <div className='project-grid'>
        <div className='project-item'>
          <h1>{project.title}</h1>
          <div className="project-content">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </div>
        <div className='project-item'>
          <div className="project-info">
              <h2>Tecnologias Usadas</h2>
              <ul className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Ver Projeto</a>
            </div>
        </div>
      </div>
      
      <div className='project-item'>
        <div className='project-description'>
          <h2>Descrição</h2>
          <p>{project.description}</p>
        </div>
      </div>
      
      <div className='project-item'>
        <div className='project-description'>
          <h2>Desafios e Soluções</h2>
          <p>
            During the development of this project, we faced several challenges, including [specific challenge]. To overcome this, we implemented [solution], which resulted in [positive outcome].
          </p>
        </div>
      </div>

      <div className='project-item'>
        <div>        
          <h2>Resultado</h2>
          <p>
            The final product met all the client's requirements and exceeded their expectations. It resulted in [specific positive results, e.g., increased user engagement, improved performance, etc.].
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;