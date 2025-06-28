import React from 'react';
import apps from '../data/applications.json';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Sections.css';

const AppsSection = () => {
  return (
    <section id="apps" className="section">
      <div className="section-header">
        <h2 className="section-title font-fantasy">
          <i className="fas fa-mobile-alt icon-purple" />
          Nossos Aplicativos
        </h2>
        <div className="bounce-icon">
          <i className="fas fa-chevron-down animate-bounce" />
        </div>
      </div>

      <div className="project-grid">
        {apps.map((app, index) => (
          <ProjectCard
            key={index}
            title={app.title}
            image={app.image}
            release={app.release}
            updated={app.updated}
            description={app.description}
            link={app.link}
            stage={app.stage}
          />
        ))}
      </div>
    </section>
  );
};

export default AppsSection;