import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const works = [
  { id: 1, title: 'Project 1', description: 'A brief description of Project 1' },
  /*
  { id: 2, title: 'Project 2', description: 'A brief description of Project 2' },
  { id: 3, title: 'Project 3', description: 'A brief description of Project 3' },
  { id: 4, title: 'Project 4', description: 'A brief description of Project 4' },
  */
];

const Works: React.FC = () => {
  return (
    <div className="works">
      <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2}}>
        <h1>Meus Trabalhos</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay:0.6}}>
        <div className="works-grid">
          {works.map((work, index) => (    
            <Link key={work.id} to={`/portfolio/project/${work.id}`} className="work-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="work-image">
                <img src={`/placeholder.svg?height=400&width=600`} alt={work.title} />
              </div>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </Link>
          ))}

          <div className="works-grid"> 
            <div className="work-item promise">
              <h2>Novos Trabalhos em construção</h2>
              <p>Logo, logo estarei atualizando</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Works;