import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/R.jpg';

const Home: React.FC = () => {
  
  /*
  const sectionRefs = useMemo(() => [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ], []);
  */
  // eslint-disable-next-line 
  const sectionRefs = [useRef<HTMLElement>(null), useRef<HTMLElement>(null), useRef<HTMLElement>(null)];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]); 

  return (
    <div className="home">
      <section ref={sectionRefs[0]} className="hero section" data-snap-point>
        <div className="hero-content">
          <h1>Desenvolvedor Fullstack... +</h1>
          <p>Gosto de regar e alimentar ideias afim de as tornarem inovadoras, impactantes, viáveis e principalmente: úteis</p>
        </div>
        <div className="hero-image">
          <img src={img} alt="Developer" />
        </div>
      </section>

      <section ref={sectionRefs[1]} className="skills section" data-snap-point>
        <h2>Skills Principais</h2>
        <div className="skills-grid">
          <div className="skill-item wide">
            <h3>Fullstack</h3>
            <p>
             FastAPI | NestJS | React | JWT | PostgreSQL | TypeORM
            </p>
          </div>
          <div className="skill-item">
            <h3>Frontend</h3>
            <p>
              React | HTML5 | CSS3 
            </p>
          </div>
          <div className="skill-item">
            <h3>Backend</h3>
            <p>
            FastAPI | Express | GraphQL 
            | Swagger |
             PostgreSQL 
            </p>
          </div>
          <div className='skill-item'>
            <></>
          </div>
          <div className="skill-item">
            <h3>I.A & M.L</h3>
            <p>
              Tensorflow | YOLO | Pandas | Numpy | Orange 
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRefs[2]} className="explore section" data-snap-point>
        <h2>Explore Mais</h2>
        <div className="explore-grid">
          <Link to="/portfolio/works" className="explore-item">
            <h3>Trabalhos</h3>
            <p>Descubra meus últimos trabalhos e colaborações</p>
            <span>Ver Projetos →</span>
          </Link>
          <Link to="/portfolio/about" className="explore-item">
            <h3>Sobre</h3>
            <p>Leia mais sobre mim e minhas habilidades</p>
            <span>Leia Mais →</span>
          </Link>
          <Link to="/portfolio/contact" className="explore-item">
            <h3>Contato</h3>
            <p>Entre em contato para colaborações, dúvidas ou bater aquele papo construtivo</p>
            <span>Fique à vontade →</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;