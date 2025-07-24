// src/components/molecules/Section.jsx
import React from 'react';
import './Section.scss';

const Section = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section__inner">
        <div className="section__content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
