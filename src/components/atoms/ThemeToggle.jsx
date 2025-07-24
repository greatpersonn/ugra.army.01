// src/components/atoms/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <label className="toggle">
      <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
      <span className="slider" />
      <span className="label-text">{ dark ? 'Темний режим' : 'Світлий режим' }</span>
    </label>
  );
};

export default ThemeToggle;
