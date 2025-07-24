// LeadershipSection.jsx
import React from 'react';
import LeaderCard from '../molecules/LeaderCard';
import './LeadershipSection.scss';

const leadershipStructure = [
  {
    title: 'Головнокомандувач',
    leaders: [
      {
        name: 'Нікіта Родителев',
        rank: 'Генерал ЗСУ',
        role: 'Головнокомандувач, відповідає за загальне стратегічне бачення та бойову ефективність усіх підрозділів Збройних Сил.',
        avatar: require('../../assets/images/head_of_army.png'),
      },
    ],
  },
  {
    title: 'Полковники',
    leaders: [
      {
        name: 'Матвій Мужило',
        rank: 'Полковник ЗСУ',
        role: 'Командувач логістики. Забезпечує підрозділи ресурсами та координує постачання.',
        head: 'Куратор підрозділу: Сили спеціальних операцій.',
        avatar: require('../../assets/images/colonel.png'),
      },
      {
        name: 'Богдан Николенко',
        rank: 'Полковник ЗСУ',
        role: 'Керує рекрутингом у військо. Відповідає за підготовку особового складу.',
        head: 'Куратор підрозділів: Десантно-штурмові війська.',
        avatar: require('../../assets/images/colonel.png'),
      },
      {
        name: 'Владислав Черевач',
        rank: 'Полковник ЗСУ',
        role: 'Очолює бойовий підрозділ дронів, відповідає за розвідку та технічну перевагу.',
        head: 'Куратор підрозділу: Військова служба правпорядку.',
        avatar: require('../../assets/images/colonel.png'),
      },
      {
        name: 'Стефан Янчев',
        rank: 'Полковник ЗСУ',
        role: 'Відповідає за розвиток сил спеціальних операцій. Забезпечує ефективність операцій у тилу ворога.',
        head: 'Куратор підрозділу: Головне управління розвідки.',
        avatar: require('../../assets/images/colonel.png'),
      },
    ],
  },
  {
    title: 'Десантно-штурмові війська',
    leaders: [
      {
        name: 'Кіріл Басов',
        rank: 'Підполковник ЗСУ',
        role: 'Очолює Десантно-штурмові війська. Забезпечує бойову готовність елітних мобільних частин.',
        head: 'Керівник підрозділу: Десантно-штурмові війська',
        avatar: require('../../assets/images/pre_colonel.png'),
      },
      {
        name: 'Нікіта Лізейник',
        rank: 'Майор ЗСУ',
        role: 'Працює над бойовою підготовкою та взаємодією в рамках союзницьких структур.',
        head: 'Заступник керівника підрозділу: Десантно-штурмові війська',
        avatar: require('../../assets/images/major.png'),
      },
    ],
  },
  {
    title: 'Сили спеціальних операцій',
    leaders: [
      {
        name: 'Микола Шевчук',
        rank: 'Підполковник ЗСУ',
        role: '',
        head: 'Керівник підрозділу: Сили спеціальних операці',
        avatar: require('../../assets/images/pre_colonel.png'),
      },
      {
        name: 'Олексій Клименко',
        rank: 'Майор ЗСУ',
        role: '',
        head: 'Заступник керівника підрозділу: Сили спеціальних операці',
        avatar: require('../../assets/images/major.png'),
      },
    ],
  },
  {
    title: 'Головне управління розвідки',
    leaders: [
      {
        name: 'Віктор Городиський',
        rank: 'Підполковник ЗСУ',
        role: '',
        head: 'Керівник підрозділу: Головне управління розвідки',
        avatar: require('../../assets/images/pre_colonel.png'),
      },
      {
        name: 'Хелін Найт',
        rank: 'Майор ЗСУ',
        role: '',
        head: 'Заступник керівника підрозділу: Головне управління розвідки',
        avatar: require('../../assets/images/major-fm.png'),
      },
    ],
  },
  {
    title: 'Військова служба правопорядку',
    leaders: [
      {
        name: 'Назар Полторацький',
        rank: 'Підполковник ЗСУ',
        role: '',
        head: 'Керівник підрозділу: Військова служба правопорядку',
        avatar: require('../../assets/images/pre_colonel.png'),
      },
      {
        name: 'Микола Долар',
        rank: 'Майор ЗСУ',
        role: '',
        head: 'Заступник керівника підрозділу: Військова служба правопорядку',
        avatar: require('../../assets/images/major.png'),
      },
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section className='leadership'>
      <span>Керівництво Збройних Сил України</span>
      {leadershipStructure.map((group, idx) => (
        <div key={idx} className='leader-group'>
          <span className='leader-title'>{group.title}</span>
          <div className='grid'>
            {group.leaders.map((leader, i) => (
              <LeaderCard key={i} {...leader} avatar={leader.avatar} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
