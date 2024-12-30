import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../assets/OIP (1).jpg';
import github from '../assets/logo-2582757_640.png';
import logo from '../assets/logo-8.png';

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <Link to="/portfolio" className="logo">
            <img src={logo} alt="Logo da Empresa" width="80" height="auto"/>
          </Link>
          {isMobile ? (
            <>
              <button className='menu-toggle' onClick={toggleMenu}>
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
              <ul className="nav-links">
                <li><Link to="/portfolio/works" className="button-56">Trabalhos</Link></li>
                <li><Link to="/portfolio/about" className="button-56">Sobre</Link></li>
                <li><Link to="/portfolio/contact" className="button-56">Contato</Link></li>
              </ul>
            </>
          ) : (
            <ul className="nav-links">
              <li><Link to="/portfolio/works" className="button-56">Trabalhos</Link></li>
              <li><Link to="/portfolio/about" className="button-56">Sobre</Link></li>
              <li><Link to="/portfolio/contact" className="button-56">Contato</Link></li>
            </ul>
          )}
          
        </nav>
      </header>
      
      <main className="main-content">
        {children}
      </main>
      

       <footer className="footer">
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
</footer>
    </div>
  );
};

export default Layout;