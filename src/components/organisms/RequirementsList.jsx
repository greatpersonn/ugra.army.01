// RequirementsList.jsx (Organism)
import React from 'react';
import RequirementItem from '../molecules/RequirementItem';
import './RequirementsList.scss';

const requirements = [
  {
    icon: 'age',
    title: 'Вік: 18+ років',
    description: 'Мінімальний вік для вступу до служби',
  },
  {
    icon: 'location',
    title: 'Проживання в області: 2+ роки',
    description: 'Постійне місце проживання в області',
  },
  {
    icon: 'documents',
    title: 'Повний пакет документів',
    description: 'Паспорт, трудова книга, медична книга',
  },
  {
    icon: 'fitness',
    title: 'Фізична підготовка',
    description: 'Відповідність встановленим нормативам ЗСУ',
  },
  {
    icon: 'mental',
    title: 'Психологічна стійкість',
    description: 'Стресостійкість, бути готовим до всього',
  },
];

const RequirementsList = () => {
  return (
    <section className="wrapper">
      <div className="req-header">
        <span>Вимоги для новобранців</span>
        <span>Основні критерії яким повинен відповідати громадянин, який має бажання доєднатись до лав Збройних Сил України.<br /><br />Якщо ж ви вже входите до складу Збройних Сил України і під час вашої служби у вас виникають труднощі - знайдіть свою відповідь у посібнику або зверніться до старшого особового складу.</span>
        <a href="https://www.youtube.com/@3cy.ug.01/videos" target="_blank">Офіційний канал ЗСУ</a>
      </div>
      <div className="req-list">
        {requirements.map((req, index) => (
          <RequirementItem key={index} {...req} />
        ))}
      </div>
    </section>
  );
};

export default RequirementsList;