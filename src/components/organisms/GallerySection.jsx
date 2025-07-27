import GalleryImageCard from '../molecules/GalleryImageCard';
import './GallerySection.scss';

const photos = [
  {
    src: require('../../assets/images/gallery1.png'),
    title: 'Тренування ДШВ',
  },
  {
    src: require('../../assets/images/gallery2.png'),
    title: 'Робота групи винищувачів',
  },
  {
    src: require('../../assets/images/gallery3.png'),
    title: 'Підготовка до навчального польоту',
  },
  {
    src: require('../../assets/images/gallery4.png'),
    title: 'Підготовка до знищення ворожих БПЛА',
  },
  {
    src: require('../../assets/images/gallery5.png'),
    title: 'Огляд військової техніки',
  },
  {
    src: require('../../assets/images/gallery6.png'),
    title: 'Оператор ППО на варті неба над ВЧ',
  },
  {
    src: require('../../assets/images/gallery7.png'),
    title: 'Оператори БПЛА на навчанні',
  },
  {
    src: require('../../assets/images/gallery8.png'),
    title: 'Демонстрація Т-80 "Оплот"',
  },
  {
    src: require('../../assets/images/gallery9.png'),
    title: 'Водій-механік та БТР-4 "Буцефал"',
  },
  {
    src: require('../../assets/images/gallery10.png'),
    title: 'Робота пари МіГ-29 по ворожим об`єктам',
  },
  {
    src: require('../../assets/images/gallery11.png'),
    title: 'Захист повітряного простору над ВЧ',
  },
  {
    src: require('../../assets/images/gallery12.png'),
    title: 'Нагородження особового складу Президентом України',
  },
  {
    src: require('../../assets/images/gallery13.png'),
    title: 'Виїзд на тренування БТР-3',
  },
];

const GallerySection = () => (
  <section className="gallery">
    <span className='gallery-title'>Фотогалерея Збройних Сил України</span>

    <div className="photo-grid">
      {photos.map((item, index) => (
        <GalleryImageCard key={index} {...item} />
      ))}
    </div>
    <div className="video-grid">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yonySVJUsb0?si=XrV1ePEGtGbB-blb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </section>
);

export default GallerySection;