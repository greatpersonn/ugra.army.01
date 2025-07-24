// molecules/RankList.jsx

import RankItem from '../molecules/RankItem';
import './RankGrid.scss';

const RankList = ({ ranks }) => (
  <div className="rank-grid">
    {ranks.map(({ title, image }) => (
      <RankItem key={title} title={title} image={image} />
    ))}
  </div>
);

export default RankList;
