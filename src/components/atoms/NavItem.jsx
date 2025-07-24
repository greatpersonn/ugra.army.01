// src/components/atoms/NavItem.jsx
import React from 'react';
import './NavItem.scss';

const NavItem = ({ id, label, onClick }) => {
  return (
    <button className="nav-item" onClick={() => onClick(id)}>
      {label}
    </button>
  );
};

export default NavItem;
