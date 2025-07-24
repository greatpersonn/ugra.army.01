import React, { useEffect, useState } from 'react';
import Header from './components/organisms/Header';
import Section from './components/molecules/Section';
import Preloader from './components/organisms/Preloader';
import { SECTIONS } from './config/sections.config';
import ContentSection from './components/molecules/ContentSection';
import { SECTION_CONTENT } from './config/sectionContent';
import './styles/globals.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}

      <div className={`app-wrapper ${isLoading ? 'hidden' : 'visible'}`}>
        <Header />
        <main>
          {SECTIONS.filter(s => s.enabled).map(({ id }) => (
            <Section id={id} key={id}>
              {SECTION_CONTENT[id] || <h2>{id}</h2>}
            </Section>
          ))}
        </main>
      </div>
    </>
  );
};

export default App;
