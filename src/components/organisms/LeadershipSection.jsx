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
        role: 'Головнокомандувач, відповідає за загальне стратегічну роботу та бойову ефективність усіх підрозділів Збройних Сил.',
        avatar: require('../../assets/images/head_of_army.png'),
      },
    ],
  },
  {
    title: 'Полковники',
    leaders: [
      {
        name: 'Віктор Городинський',
        rank: 'Полковник ЗСУ',
        role: 'Організовує логістику та постачання для розвідки.',
        head: 'Куратор підрозділу: Головне управління розвідки.',
        avatar: require('../../assets/images/colonel.png'),
      },
      {
        name: 'Хелін Найт',
        rank: 'Полковник ЗСУ',
        role: 'Керує рекрутингом і підготовкою бійців ССО.',
        head: 'Куратор підрозділів: Сили спеціальних операцій.',
        avatar: require('../../assets/images/major-fm.png'),
      },
      {
        name: 'Назар Полторацький',
        rank: 'Полковник ЗСУ',
        role: 'Очолює підрозділ дронів для розвідки та підтримки ВСП.',
        head: 'Куратор підрозділу: Військова служба правопорядку.',
        avatar: require('../../assets/images/colonel.png'),
      },
      {
        name: 'Стефан Янчев',
        rank: 'Полковник ЗСУ',
        role: 'Планує та координує тилові операції ВСП.',
        head: 'Куратор підрозділу: Військова служба правопорядку.',
        avatar: require('../../assets/images/colonel.png'),
      },
      {
        name: 'Нікіта Лізейник',
        rank: 'Полковник ЗСУ',
        role: 'Забезпечує взаємодію ССО з десантом у спецопераціях.',
        head: 'Куратор підрозділу: Десантно-штурмові війська.',
        avatar: require('../../assets/images/colonel.png'),
      }
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
      // {
      //   name: 'Нікіта Лізейник',
      //   rank: 'Майор ЗСУ',
      //   role: 'Працює над бойовою підготовкою та взаємодією в рамках союзницьких структур.',
      //   head: 'Заступник керівника підрозділу: Десантно-штурмові війська',
      //   avatar: require('../../assets/images/major.png'),
      // },
    ],
  },
  {
    title: 'Сили спеціальних операцій',
    leaders: [
      // {
      //   name: 'Микола Шевчук',
      //   rank: 'Підполковник ЗСУ',
      //   role: 'Очолює підрозділ Сил спеціальних операцій. Організовує проведення операцій на території противника.',
      //   head: 'Керівник підрозділу: Сили спеціальних операцій',
      //   avatar: require('../../assets/images/pre_colonel.png'),
      // },
      // {
      //   name: 'Актуальне місце',
      //   rank: 'Майор ЗСУ',
      //   role: 'Відповідає за тактичну підготовку особового складу та планування спеціальних місій.',
      //   head: 'Заступник керівника підрозділу: Сили спеціальних операцій',
      //   avatar: require('../../assets/images/major.png'),
      // },
    ],
  },
  {
    title: 'Головне управління розвідки',
    leaders: [
      {
        name: 'Надія Уайт',
        rank: 'Підполковник ЗСУ',
        role: 'Керує діяльністю розвідки, планує операції зі збору критично важливої інформації про противника.',
        head: 'Керівник підрозділу: Головне управління розвідки',
        avatar: require('../../assets/images/major-fm.png'),
      },
      {
        name: 'Богдан Усик',
        rank: 'Майор ЗСУ',
        role: 'Координує аналітичну роботу та оперативну підтримку розвідувальних місій.',
        head: 'Заступник керівника підрозділу: Головне управління розвідки',
        avatar: require('../../assets/images/major.png'),
      },
    ],
  },
  {
    title: 'Військова служба правопорядку',
    leaders: [
      {
        name: 'Микола Долар',
        rank: 'Підполковник ЗСУ',
        role: 'Забезпечує дотримання військової дисципліни, контролює правопорядок у підрозділах.',
        head: 'Керівник підрозділу: Військова служба правопорядку',
        avatar: require('../../assets/images/pre_colonel.png'),
      },
      {
        name: 'Микола Миколаєвич',
        rank: 'Майор ЗСУ',
        role: 'Займається профілактикою правопорушень серед військовослужбовців.',
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
            { group.leaders.length > 0 ?
                group.leaders.map((leader, i) => (
                  <LeaderCard key={i} {...leader} avatar={leader.avatar} /> 
                ))
              : <div className="undef-container">
                  <span>Інформація засекречена</span>
                </div>
            }
          </div>  
        </div>
      ))}
    </section>
  );
}
