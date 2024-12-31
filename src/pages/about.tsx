import React from 'react';
import {motion} from 'framer-motion';

const About: React.FC = () => {
  /*
  const sectionRefs = [useRef<HTMLElement>(null), useRef<HTMLElement>(null)]

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
  */
  return (
    <div className="about fade-in">
      <motion.h1
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      >
        Sobre Mim
      </motion.h1>
      <div className='about-grid'>
          <div className='about-item extra-wide'>
            <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}>
              <p className="text-lg text-neutral-600 mb-6">
              Olá, me chamo João Pedro, sou uma pessoa que valoriza o aprendizado, experiências e novas 
              descobertas. Tenho facilidade em me socializar e busco desenvolver 
              minhas habilidades a cada nova oportunidade. Gosto de participar de 
              todo o processo de criação de uma solução, desde sua idealização até a entrega. 
              Além disso, me adapto facilmente a projetos em andamento, sou flexível a mudanças
              e sempre busco cumprir meus compromissos com responsabilidade.
              </p>

              <p className="text-lg text-neutral-600 mb-6">
              Minha experiência inclui a construção de aplicações completas, encarando cada etapa 
              como parte de uma jornada para oferecer uma solução que combine design, funcionalidade 
              e escalabilidade. Tenho facilidade em transformar conceitos em interfaces interativas, 
              responsivas e atrativas. No desenvolvimento backend, foco na criação e otimização de lógicas, 
              sempre atento às boas práticas de segurança e escalabilidade. Além disso, a Inteligência Artificial 
              atiça bastante a minha curiosidade e apesar de ter criado alguns projetos que integram modelos avançados 
              como Inception, ResNet50 e outras Redes Neurais Convolucionais próprias, reconheço que ainda há muito o 
              que se aprender. Por isso, procuro expandir meu conhecimento através da leitura de documentações, cursos online e 
              especialmente: praticando.
              </p>

              <p className="text-lg text-neutral-600 mb-6">
              Quando não estou codando, com quase toda certeza, estarei praticando algum exercício físico,
              desenhando ou pintando, jogando algum videogame ou aprendendo algo relacionado à programação, ciências sociais ou 
              ainda me debruçando sobre a lore de algum jogo que me marcou.
              </p>
            </motion.div>
          </div>

        {/*
        <div className='about-item'>
          <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}>
            <></>
          </motion.div>
        </div>
        */}
        <div className='about-item'>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}>
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <ul className="list-disc list-inside text-neutral-600 space-y-2 mb-12">
                <li><strong>Soft Skills:</strong> Comunicação Interpessoal, Resolução de Conflitos, Trabalho em Equipe, Liderança, Pensamento Crítico, Gestão de Tempo</li>
                <li><strong>Requisitos & Planejamento de Produtos:</strong> Análise de Stakeholders, Entrevistas, Questionários, Prototipagem, Workshops, Modelagem de Casos de Uso, Definição de Personas, Mapeamento de Fluxos de Trabalho</li>
                <li><strong>Experiência de Usuário (UX) Design</strong></li>
                <li><strong>Backend Development</strong></li>
                <li><strong>Frontend Development</strong></li>
                <li><strong>Machine Learning:</strong> Visão Computacional, Redes Neurais Artificiais, Machine Learning, Deep Learning</li>
                <li><strong>Versionamento de Código</strong></li>
              </ul>
          </motion.div>
        </div>

        <div className='about-item'>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}>
              <h2 className="text-2xl font-semibold mb-4">Ferramentas & Tecnologias</h2>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li><strong>Gerenciamento de Projetos e Produtividade:</strong> Notion, Trello, Plane, Obsidian</li>
                <li><strong>Design & Prototipação:</strong> Canvas, Figma, GIMP</li>
                <li><strong>Frontend Development:</strong> React, Next.js, TypeScript, Bootstrap, EJS, HTML5, CSS3</li>
                <li><strong>Backend Development:</strong> FastAPI, Django, Node.js, Express, NestJS, GraphQL</li>
                <li><strong>APIs & Integrações:</strong> REST APIs, GraphQL</li>
                <li><strong>Machine Learning & Visão Computacional:</strong> Tensorflow, Keras, YOLO, Orange, Pandas, Numpy</li>
                <li><strong>Bancos de Dados:</strong> PostgreSQL, MySQL, MongoDB</li>
                <li><strong>Testes & Documentaçãoes:</strong> Swagger, Pytest, Jest</li>
                <li><strong>Controle de Versão:</strong> Git, GitHub</li>
                <li><strong>Ferramentas de desenvolvimento:</strong> VS Code, Google Colab</li>
              </ul>
          </motion.div>
        </div>
        
        <div className='about-item'>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}>
              <h2 className="text-2xl font-semibold mb-4">Outros Passos No Momento...</h2>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li><strong>Aprendizado Contínuo:</strong> Estou estudando as linguagens C e C++ com foco em aplicações para sistemas embarcados. Paralelamente, aprofundo meus conhecimentos em ciência de dados, análise de dados e inteligência artificial, explorando suas aplicações práticas em diferentes contextos.</li>
                <li><strong>Participação em Programas de Startups:</strong> Participo de um programa de fomento à startups inovadoras, onde lidero uma equipe enxuta, desenvolvendo soluções tecnológicas com potencial de impacto no mercado.</li>
                <li><strong>Projetos Acadêmicos e Profissionais:</strong> Estou desenvolvendo soluções modulares que integram aplicações web com modelos de inteligência artificial, além de implementar sistemas voltados para otimizar a operação de pequenas empresas e estabelecimentos.</li>
              </ul>
          </motion.div>
        </div>
        
      </div>
        {/*<div className="about-image">
          <img src="/placeholder.svg?height=600&width=400" alt="Your Name" />
        </div>*/}
      </div>
  );
};

export default About;