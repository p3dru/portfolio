import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../assets/OIP (1).jpg';
import github from '../assets/logo-2582757_640.png';
import logo from '../assets/logo-8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      if(!newIsMobile) {
        setIsMenuOpen(true);
      } else if (!isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className="layout">
      <header className="header">
      <nav className="nav">
          <Link to="/portfolio" className="logo">
            <img src={logo} alt="Logo da Empresa" width="80" height="auto"/>
          </Link>
          { isMobile && (
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} /> // Ícone de fechar
                ) : (
                <FontAwesomeIcon icon={faBars} /> // Ícone de menu
        )}
            </button>
          )}
          <ul className={`nav-links ${isMenuOpen || !isMobile ? 'open' : ''}`}>
            <li><Link to="/portfolio/works" className="button-56 menu-integration" onClick={() => isMobile && setIsMenuOpen(false)}>Trabalhos</Link></li>
            <li><Link to="/portfolio/about" className="button-56 menu-integration" onClick={() => isMobile && setIsMenuOpen(false)}>Sobre</Link></li>
            <li><Link to="/portfolio/contact" className="button-56 menu-integration" onClick={() => isMobile && setIsMenuOpen(false)}>Contato</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="main-content">
        {children}
      </main>
      

       <footer className="footer">
        { isMobile ? (
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} p3drü.</p>
            <nav>
              <a className='footer-a' href="https://www.linkedin.com/in/p3dru/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt='Linkedin' className='footer-logo'/>
              </a>
              <span className="separator">|</span>
              <a className='footer-a' href="https://github.com/p3dru" target="_blank" rel="noopener noreferrer">
                <img src={github} alt='Github' className='footer-logo'/>
              </a>
            {/*<a className='footer-a' href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>*/}
            </nav>
          </div>
        ) : (
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} p3drü. Todos os direitos (ainda não) reservados.</p>
            <nav>
              <a className='footer-a' href="https://www.linkedin.com/in/p3dru/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt='Linkedin' className='footer-logo'/>
                Linkedin
              </a>
              <span className="separator">|</span>
              <a className='footer-a' href="https://github.com/p3dru" target="_blank" rel="noopener noreferrer">
                <img src={github} alt='Github' className='footer-logo'/>
                Github
              </a>
            {/*<a className='footer-a' href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>*/}
            </nav>
          </div>
        )}
  
</footer>
    </div>
  );
};

export default Layout;