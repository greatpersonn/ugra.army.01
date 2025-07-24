// components/atoms/RankIcon.jsx
import './RankIcon.scss';

const RankIcon = ({ image }) => {
  return (
    image ? (
      <div className="rank-icon">
        <img src={image} alt="Ранг" />
      </div>
    ) : (
      <div className="no-icon">
        <span>Не передбачено</span>
      </div>
    )
  );
};

export default RankIcon;
