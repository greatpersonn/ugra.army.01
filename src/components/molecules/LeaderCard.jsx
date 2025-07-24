import React from 'react';
import './LeaderCard.scss';

const LeaderCard = ({ name, rank, role, head, avatar }) => {
  return (
    <div className='card'>
      {avatar && <img src={avatar} alt={name} className='avatar' />}
      <div className='info'>
        <span>{name}</span>
        <span>{rank}</span>
        <span>{role}</span>
        <span>{head}</span>
      </div>
    </div>
  );
};

export default LeaderCard;
