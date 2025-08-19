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

const faqItems = [
  {
    question: 'Чи можу я доєднатись до ЗСУ з низьким соціальним рейтингом?',
    answer: 'Так, для покращення свого рейтингу - ви можете доєднатись до Збройних Сил України.',
  },
  {
    question: 'Як мені потрапити у лави Збройних Сил України?',
    answer: 'Потрапити ви можете декількома шляхами: отримайте повістку або прийдіть на співбесіду у військомат. З собою необхідно мати паспорт і медичну карту. У військоматі потрібно буде пройти співбесіду.',
  },
  {
    question: 'Що я отримаю якщо стану військовослужбовцем?',
    answer: 'Безкоштовне лікування, достойне грошове забезпечення, оновленний соціальний статус і підтримка зі сторони держави. Вас забезпечать формою, багаторазовим харчуванням, дружній колектив, який ніколи не підведе і завжди підтримає.'
  },
  {
    question: 'Куди звернутись про правопорушення військовослужбовців?',
    answer: 'Зверніться до ВСП - військової служби правопорядку, надайте їм докази та опишіть ситуацію, залиште свої контактні дані. Служба Правопорядку - зареєструє справу і буде проводити розслідування. Як наслідок - ви отримаєте дзвінок і вам повідомлять по рішення.'
  },
  {
    question: 'Чи впораюсь я зі службою у армії?',
    answer: 'У Збройних Силах існує підрозділ НК - навчальний корпус, який повністю займається вашою фізичною підготовкою, навчанням, вогневими практиками і іншими тренуванням.'
  },
  {
    question: 'А військовий квиток я отримаю?',
    answer: 'Так, Збройні Сили - єдине місце та організація, яка має право видавати військовий квиток. Військовий квиток ви отримуєте, як будете старшим солдатом. Надалі ви можете звільнитись з армії або наприклад перевестись у НПУ, або СБУ.'
  },
  {
    question: 'А які підрозділі існують?',
    answer: 'Збройні Сили складаються з таких підрозділів: НК, ССО, ГУР, ДШВ та ВСП. Кожен з підрозділів має свою ціль і свої задачі, які націлені на зміцнення обороноспроможності України. Детально ознайомитись з підрозділами ви можете на сайті армії у роздлілі "Підрозділи".'
  },
];

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
        <span>Питання та відповіді</span>
        <FaqAccordion items={faqItems} />
      </div>
    </>
  ),

  units: (
    <>
      <span className='units-header'>До складу Збройних сил України входять </span>
      <div className='units-container'>
        {/* ДШВ */}
        <div className='container-info'>
          <div className='info-header'>
            <img src={require('../assets/images/2dshv.png')} alt='dshv' />
            <span>Десантно-штурмові війська</span>
          </div>
          <div className='info-content'>
            <span>
              Маневрені війська для швидких штурмів і десантних операцій. Працюють у тилу та на передовій.
            </span>
            <span>
              Основне завдання: забезпечення маневру, штурм тилу ворога, повітряне десантування.
            </span>
            <span><strong>Керівник:</strong> Кирило Басов</span>
          </div>
        </div>

        {/* ГУР */}
        <div className='container-info'>
          <div className='info-header'>
            <img src={require('../assets/images/sso.png')} alt='dshv' />
            <span>Сили спеціальних операцій</span>
          </div>
          <div className='info-content'>
            <span>
              Підрозділи для виконання найскладніших бойових завдань — розвідка, диверсії, психологічні операції. Діють у тилу ворога.
            </span>
            <span>
              Основне завдання: розвідка, диверсії, контрдиверсійна боротьба, психологічні операції.
            </span>
            <span><strong>Керівник:</strong> Ігор Хлібороб</span>
          </div>
        </div>

        {/* ССО */}
        <div className='container-info'>
          <div className='info-header'>
            <img src={require('../assets/images/gur.png')} alt='dshv' />
            <span>Головне управління розвідки</span>
          </div>
          <div className='info-content'>
            <span>
              Воєнна розвідка Міноборони. Збирає, аналізує і передає розвідувальні дані у сферах безпеки, оборони та кіберпростору.
            </span>
            <span>
              Основне завдання: збір, обробка й передача воєнної розвідінформації.
            </span>
            <span><strong>Керівник:</strong> Надія Уайт</span>
          </div>
        </div>

        {/* ВСП */}
        <div className='container-info'>
          <div className='info-header'>
            <img src={require('../assets/images/vsp.png')} alt='dshv' />
            <span>Військова служба правопорядку</span>
          </div>
          <div className='info-content'>
            <span>
              Військова поліція. Слідкує за дисципліною в армії, підтримує порядок і виконує правоохоронні функції.
            </span>
            <span>
              Основне завдання: забезпечення правопорядку, жандармські функції, військова юстиція.
            </span>
            <span><strong>Керівник:</strong> Микола Долар</span>
          </div>
        </div>

        {/* НК */}
        <div className='container-info'>
          <div className='info-header'>
            <img src={require('../assets/images/nk.png')} alt='dshv' />
            <span>159й Окремий Навчальний корпус</span>
          </div>
          <div className='info-content'>
            <span>
              Готує військових фахівців для Сухопутних військ. Забезпечує бойову підготовку особового складу.
            </span>
            <span>
              Основне завдання: підготовка особового складу Сухопутних військ.
            </span>
            <span><strong>Керівник:</strong> Нікіта Родителев</span>
          </div>
        </div>
      </div>
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