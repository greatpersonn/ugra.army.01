// src/components/organisms/Header.jsx
import React from 'react';
import Nav from '../molecules/Nav';
import ThemeToggle from '../atoms/ThemeToggle';
import './Header.scss';

const Header = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={require("../../assets/images/AFoU.png")} alt="EmblemArmy" />
        <span>Армія?</span>
      </div>
      <Nav onScroll={handleScroll} />
      <ThemeToggle />
    </header>
  );
};

export default Header;
