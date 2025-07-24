import RankGrid from './RankGrid';
import './RankGroups.scss';

const rankGroups = [
  {
    title: 'Старший офіцерський склад',
    ranks: ['Генерал', 'Полковник', 'Підполковник', 'Майор'],
  },
  {
    title: 'Молодший офіцерський склад',
    ranks: ['Капітан', 'Лейтенант'],
  },
  {
    title: 'Сержантський і старшинський склад',
    ranks: ['Старшина', 'Сержант', 'Капрал'],
  },
  {
    title: 'Рядовий та солдатський склад',
    ranks: ['Старший солдат', 'Солдат', 'Рекрут'],
  },
];

const rankData = {
  Генерал: require('../../assets/images/or-12.png'),
  Полковник: require('../../assets/images/or-11.png'),
  Підполковник: require('../../assets/images/or-10.png'),
  Майор: require('../../assets/images/or-9.png'),
  Капітан: require('../../assets/images/or-8.png'),
  Лейтенант: require('../../assets/images/or-7.png'),
  Старшина: require('../../assets/images/or-6.png'),
  Сержант: require('../../assets/images/or-5.png'),
  Капрал: require('../../assets/images/or-4.png'),
  'Старший солдат': require('../../assets/images/or-3.png'),
  Солдат: require('../../assets/images/or-2.png'),
  Рекрут: null,
};

const RankGroups = () => {
  return (
    <section className="rank-groups">
      <span className='rank-header'>Військові звання у Збройних Силах України</span>
      {rankGroups.map((group) => (
        <div key={group.title} className="rank-group">
          <span className='rank-name'>{group.title}</span>
          <RankGrid
              ranks={group.ranks.map((title) => ({
              title,
              image: rankData[title],
            }))}
          />
        </div>
      ))}
    </section>
  );
};

export default RankGroups;
