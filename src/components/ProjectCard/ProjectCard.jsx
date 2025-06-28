import React from 'react';
import './ProjectCard.css';

import lagarta from '../../assets/lagarta.png';
import casulo from '../../assets/casulo.png';
import mariposa from '../../assets/mariposa.png';

const stageIcons = {
  'stage-initial': lagarta,
  'stage-mvp': casulo,
  'stage-final': mariposa
};

const ProjectCard = ({ title, image, release, updated, description, link, stage }) => {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img src={image} alt={title} className="project-image" />
        <div className="stage-icon-wrapper">
          <img
            src={stageIcons[stage]}
            alt="Ícone do estágio"
            className="stage-icon"
          />
        </div>
        <div className="badge-wrapper">
          <span className={`stage-badge ${stage}`}>
            <i className={`fas ${stage === 'stage-final' ? 'fa-check-circle' : stage === 'stage-mvp' ? 'fa-flask' : 'fa-seedling'} icon`} />
            {stage === 'stage-final' ? 'Completo' : stage === 'stage-mvp' ? 'Útilizavel' : 'Inicial'}
          </span>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-meta">
          <span><i className="far fa-calendar" /> Lançamento: {release}</span>
          <span><i className="fas fa-sync-alt" /> Última atualização: {updated}</span>
        </div>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="learn-more">
          Abrir projeto <i className="fas fa-arrow-right" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;