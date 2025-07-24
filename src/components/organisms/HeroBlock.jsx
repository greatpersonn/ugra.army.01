// components/organisms/HeroBlock.jsx
import './HeroBlock.scss';

const HeroBlock = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (

  <section className="hero-block">
    <span>Збройні Сили України</span>
    <span>Основна військова структура, що відповідає за оборону країни та захист її суверенітету.</span>
    <span>Офіційний інформаційний портал фракції ЗСУ</span>
    <div className="buttons">
      <button onClick={() => handleScroll('requirements')}>Доєднатись до армії</button>
    </div>
  </section>
  )
};

export default HeroBlock;
