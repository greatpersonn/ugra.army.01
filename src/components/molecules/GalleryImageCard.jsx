import React from 'react';
import './Gallery.scss';

const GalleryImageCard = ({ src, title }) => {
  return (
    <div className="gallery-image-card">
      <img src={src} alt={title} />
      <div className="overlay">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GalleryImageCard;
