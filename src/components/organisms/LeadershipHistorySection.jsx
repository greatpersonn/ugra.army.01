// components/organisms/LeadershipHistorySection.jsx
import { BsPatchQuestion } from "react-icons/bs";
import './LeadershipHistorySection.scss';

const leadershipFacts = [
  'ЗСУ є однією з найбільш досвідчених армій Європи з бойовим досвідом з 2014 року.',
  'Офіцерський склад має високу кваліфікацію завдяки західним програмам підготовки.',
  'Генерали ЗСУ відігравали ключову роль у стримуванні повномасштабної агресії у 2022 році.',
  'Під час терміну генерала Родителева було створено перший дроновий батальйон.',
  'При Мужилі була впроваджена нова логістична система постачання.'
];

const pastLeaders = [
  {
    nickname: 'Нікіта Родителев',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Хрест особливих заслуг', 'За зразкову службу', 'Залізний хрест', 'За сприяння війську'],
    status: true,
  },
  {
    nickname: 'Крістіан Родаріо',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Ветеран служби', 'Хрест особливих заслуг', 'За зразкову службу', 'Залізний хрест', 'Золотий тризуб', 'За мужність при виконанні спец. завдань', 'За сприяння війську'],
    status: false,
  },
  {
    nickname: 'Нікіта Лізейник',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Ветеран служби', 'За зразкову службу', 'Залізний хрест', 'Золотий тризуб', 'Хрест ССО'],
    status: false,
  },
  {
    nickname: 'Томас Фельдшер',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Микита Гурцев',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Дімон Іванович',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Павло Дурнєв',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Денис Медвідь',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Віталій Керенський',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Олександр Платонов',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Вадим Адзусагава',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Антон Шелбі',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Владислав Дракула',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Ветеран служби', 'За зразкову службу', 'Золотий тризуб', 'Хрест ДШВ'],
    status: false,
  },
  {
    nickname: 'Алекс Македонський',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Цілком таємно'],
    status: false,
  },
  {
    nickname: 'Дмитро Федченко',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Ветеран служби', 'За зразкову службу', 'Золотий тризуб'],
    status: false,
  },
  {
    nickname: 'Андрій Колос',
    avatar: require('../../assets/images/head_of_army.png'),
    awards: ['Ветеран служби', 'За зразкову службу', 'Золотий тризуб'],
    status: false,
  },
];

const LeadershipHistorySection = () => {
  return (
    <section className='leadership-history'>
      <span>Історія керівництва</span>
      <span className='description'>
        Керівники Збройних Сил України залишили помітний слід в історії нашої армії. Кожен із них
        вніс унікальний вклад у становлення та розвиток сучасного війська.
      </span>

      {/* <ul className='facts'>
        {leadershipFacts.map((fact, i) => (
          <li className="fact" key={i}>
            <div className="icon-wrapper">
              <BsPatchQuestion />
            </div>
            <span>{fact}</span>
          </li>

        ))}
      </ul> */}

      <div className='past-leaders'>
        {pastLeaders.map((leader, i) => (
          <div key={i} className={`leader-card ${leader.status ? 'actual' : ''}`}>
            <img src={leader.avatar} alt={leader.nickname} />
            <div className='nickname'>{leader.nickname}</div>
            {leader.awards?.length > 0 && (
              <ul className='awards'>
                {leader.awards.map((award, j) => (
                  <li key={j}>{award}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeadershipHistorySection;