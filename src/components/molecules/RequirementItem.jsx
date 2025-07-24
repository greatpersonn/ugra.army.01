// RequirementItem.jsx (Molecule)
import React from 'react';
import RequirementIcon from '../atoms/RequirementIcon';
import './RequirementItem.scss';

const RequirementItem = ({ icon, color, title, description }) => {
  return (
    <div className="req-item">
      <RequirementIcon type={icon} />
      <div className="req-text">
        <span className='req-title'>{title}</span>
        <span className='req-desc'>{description}</span>
      </div>
    </div>
  );
};

export default RequirementItem;