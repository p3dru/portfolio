import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Works from './pages/works';
import About from './pages/about';
import Contact from './pages/contact';
import ProjectDetail from './pages/project_detail';
import './pages/styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/works" element={<Works />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;