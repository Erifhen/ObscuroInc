import React from 'react';
import books from '../data/books.json';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Sections.css';

const BooksSection = () => {
  return (
    <section id="books" className="section">
      <div className="section-header">
        <h2 className="section-title font-fantasy">
          <i className="fas fa-book-dead icon-purple" />
          Nossos livros
        </h2>
        <div className="bounce-icon">
          <i className="fas fa-chevron-down animate-bounce" />
        </div>
      </div>

      <div className="project-grid">
        {books.map((book, index) => (
          <ProjectCard
            key={index}
            title={book.title}
            image={book.image}
            release={book.release}
            updated={book.updated}
            description={book.description}
            link={book.link}
            stage={book.stage}
          />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;