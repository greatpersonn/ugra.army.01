// src/config/sectionContent.js
import React from 'react';
import FaqAccordion from '../components/organisms/FaqAccordion';
import LeadershipSection from '../components/organisms/LeadershipSection';
import RequirementsList from '../components/organisms/RequirementsList';
import HeroBlock from '../components/organisms/HeroBlock';
import TasksGrid from '../components/organisms/TaskGrid';
import RankGroups from '../components/organisms/RankGroup';
import GallerySection from '../components/organisms/GallerySection';
import LeadershipHistorySection from '../components/organisms/LeadershipHistorySection';
import FaqSection from '../components/organisms/FaqSection';
import UnitsSection from '../components/organisms/UnitSection';

export const SECTION_CONTENT = {
  home: (
    <>
      <div className='home-container'>
        <HeroBlock />
        <TasksGrid />
      </div>
    </>
  ),

  requirements: (
    <>
      <div className='req-container'>
        <RequirementsList />
      </div>
    </>
  ),

  team: (
    <>
      <div className='team-container'>
        <LeadershipSection />
      </div>
    </>
  ),

  faq: (
    <>
      <div className='faq-container'>
        <FaqSection />
      </div>
    </>
  ),

  units: (
    <>
      <UnitsSection />
    </>
  ),

  ranks: (
    <>
      <RankGroups />
    </>
  ),

  gallery: (
    <>
      <GallerySection />
    </>
  ),

  history: (
    <>
      <LeadershipHistorySection />
    </>
  )
};