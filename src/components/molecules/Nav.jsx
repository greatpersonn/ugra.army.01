// src/components/molecules/Nav.jsx
import React from 'react';
import { SECTIONS } from '../../config/sections.config';
import NavItem from '../atoms/NavItem';
import './Nav.scss';

const Nav = ({ onScroll }) => {
  return (
    <nav className="nav">
      {SECTIONS.filter(s => s.enabled).map(({ id, label }) => (
        <NavItem key={id} id={id} label={label} onClick={onScroll} />
      ))}
    </nav>
  );
};

export default Nav;
