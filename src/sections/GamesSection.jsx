import React from 'react';
import games from '../data/games.json';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Sections.css';

const GamesSection = () => {
  return (
    <section id="games" className="section">
      <div className="section-header">
        <h2 className="section-title font-fantasy">
          <i className="fas fa-dragon icon-purple" />
          Nossos Jogos
        </h2>
        <div className="bounce-icon">
          <i className="fas fa-chevron-down animate-bounce" />
        </div>
      </div>

      <div className="project-grid">
        {games.map((game, index) => (
          <ProjectCard
            key={index}
            title={game.title}
            image={game.image}
            release={game.release}
            updated={game.updated}
            description={game.description}
            link={game.link}
            stage={game.stage}
          />
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
