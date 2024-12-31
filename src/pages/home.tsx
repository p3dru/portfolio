import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img_1.jpeg';
import img2 from '../assets/img_2.jpeg';
import AnimatedCanvas from '../components/animatedCanvas';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Se a largura for menor que 768px, define como true
      setIsMobile(window.innerWidth < 768);
    };

    // Chama a função ao carregar e redimensionar a janela
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpeza do event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const images = [
    img1, img2
  ];

  const selectedImage = images[Math.floor(Math.random() * images.length)];
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
          <h1 className='julius-sans-one-regular'>João 'p3drü' Pedro</h1>
          <h2>Desenvolvedor FullStack... +</h2>
          <p>Gosto de regar e alimentar ideias afim de as tornarem inovadoras, impactantes, viáveis e principalmente: úteis</p>
        </div>
        <div className="hero-image">
          <img src={selectedImage} alt="Developer" />
        </div>
      </section>

      <section ref={sectionRefs[1]} className="skills section" data-snap-point>
        <h2>Skills Principais</h2>
        <div className="skills-grid">

          <div className="skill-item">
            <h3>Backend</h3>
            <p>
            FastAPI | Express | NestJS |
             PostgreSQL 
            </p>
          </div>

          <div className="skill-item">
            <h3>Frontend</h3>
            <p>
              React | HTML5 | CSS3 
            </p>
          </div>

          <div className="skill-item">
            <h3>I.A & M.L</h3>
            <p>
              Tensorflow | YOLO | Pandas  
            </p>
          </div>

          {/*
          <div className='skill-item'>
            <></>
          </div>
          */}
          
          {!isMobile && (
            <div className="skill-item wide line-animation">
              <AnimatedCanvas/>
            </div>
          )}
          
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