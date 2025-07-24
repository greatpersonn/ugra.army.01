// atoms/RankItem.jsx
import RankIcon from '../atoms/RankIcon';
import './RankItem.scss';

const RankItem = ({ title, image }) => (
  <div className="rank-item">
    <RankIcon image={image} />
    <span>{title}</span>
  </div>
);

export default RankItem;
