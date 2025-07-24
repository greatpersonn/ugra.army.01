import React from 'react';
import './Preloader.scss';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__text">
        Трішки зачекайте, вам вже майже виписана повістка...
      </div>
      <div className="preloader__dot-loader">
        <span></span><span></span><span></span>
      </div>
    </div>
  );
};

export default Preloader;
