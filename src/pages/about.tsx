import React from 'react';
import {motion} from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="about fade-in">
      <motion.h1
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      >
        Sobre Mim
      </motion.h1>
      <div className='about-grid'>
        <div className='about-item wide'>
          <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}>
            <p className="text-lg text-neutral-600 mb-6">
              Sou uma pessoa que preza pelo aprendizado, experiências e novas descobertas. 
              Sou facilmente sociável e tento desenvolver minhas habilidades a cada nova oportunidade.
              Gosto de participar de todo o período de criação de uma solução, passando pela sua idealização,
              desenvolvimento até sua entrega. Apesar desse gosto, também não tenho problemas em participar de 
              projetos em andamento, sou facilmente adaptável a mudanças
              e também busco sempre entregar o que me comprometo a fazer.
            </p>

            <p className="text-lg text-neutral-600 mb-6">
            Com experiência em construir aplicações completas do zero, vejo cada 
            etapa como parte de uma jornada para entregar uma experiência que una 
            design, funcionalidade e escalabilidade. Tenho facilidade em transformar 
            conceitos de design em interfaces interativas, responsivas e atraentes - React,
            CSS e JS/TS tornam isso possível e visualmente satisfatório.
            </p>
            
            <p className="text-lg text-neutral-600 mb-6">
            No backend, meu gosto pelo desenvolvimento se traduz na criação e otimização
            de lógicas com ferramentas como FastAPI, TypeORM e PostgreSQL, sempre focando
            em boas práticas de segurança e escalabilidade.
            </p>

            <p className="text-lg text-neutral-600 mb-6">
            Além disso, a Inteligência Artificial ocupa um papel especial no meu trabalho e ativa
            bastante minha curiosidade. Utilizo ferramentas como Tensorfolow, Roboflow e YOLO para
            preparar dataset, criar e treinar modelos robustos para classificação e segmentação de
            imagens, integrando modelos diretamente em sistemas para resolver problemas reais. 
            </p>

            <p className="text-lg text-neutral-600 mb-6">
            Quando não estou codando, com quase toda certeza, estarei praticando algum exercício físico,
            desenhando ou pintando, jogando algum videogame ou aprendendo algo relacionado à programação, ciências sociais ou 
            ainda me debruçando sobre a lore de algum jogo que me marcou.
            </p>
          </motion.div>
        </div>
        <div className='about-item'>
          <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}>
            <></>
          </motion.div>
        </div>

        <div className='about-item'>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}>
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <ul className="list-disc list-inside text-neutral-600 space-y-2 mb-12">
                <li><strong>Soft Skills</strong> (Comunicação Interpessoal, Resolução de Conflitos, Trabalho em Equipe, Liderança, Pensamento Crítico, Gestão de Tempo)</li>
                <li><strong>Requisitos & Planejamento de Produtos</strong> (Análise de Stakeholders, Entrevistas, Questionários, Prototipagem, Workshops, Modelagem de Casos de Uso, Definição de Personas, Mapeamento de Fluxos de Trabalho)</li>
                <li><strong>Prototipação & Wireframing</strong></li>
                <li><strong>Experiência de Usuário (UX) Design</strong></li>
                <li><strong>Backend Development</strong> (SQL, NoSQL, APIs REST, GraphQL, Python, JavaScript/TypeScript)</li>
                <li><strong>Frontend Development</strong> (HTML, CSS, JavaScript, React)</li>
                <li><strong>Machine Learning</strong> (Visão Computacional, Redes Neurais Artificiais, Machine Learning, Deep Learning)</li>
                <li><strong>Versionamento com Git & Github</strong></li>
              </ul>
          </motion.div>
        </div>
        
        <div className='about-item'>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}>
              <></>
          </motion.div>
        </div>

        <div className='about-item'>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}>
              <h2 className="text-2xl font-semibold mb-4">Ferramentas & Tecnologias</h2>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li><strong>Gerenciamento de Projetos e Produtividade</strong> (Notion, Trello, Plane, Obsidian)</li>
                <li><strong>Design & Prototipação</strong> (Canvas, Figma, GIMP)</li>
                <li><strong>Frontend Development</strong> (React, Next.js, TypeScript, Bootstrap, EJS, HTML5, CSS3)</li>
                <li><strong>Backend Development</strong> (FastAPI, Django, Node.js, Express, NestJS)</li>
                <li><strong>APIs</strong> (REST APIs, GraphQL)</li>
                <li><strong>Machine Learning & Visão Computacional</strong> (Tensorflow, Keras, YOLO)</li>
                <li><strong>Bancos de Dados</strong> (PostgreSQL, MySQL, MongoDB)</li>
                <li><strong>Testes & Documentaçãoes</strong> (Swagger, Jest)</li>
                <li><strong>Controle de Versão</strong> (Git, GitHub)</li>
                <li><strong>Ferramentas de desenvolvimento</strong> (VS Code, Google Colab)</li>
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