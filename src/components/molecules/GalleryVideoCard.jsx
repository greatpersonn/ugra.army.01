import React from 'react';
import ReactPlayer from 'react-player';
import './Gallery.scss';

const GalleryVideoCard = ({ url, title }) => {
  return (
    <div className="gallery-video-card">
      <ReactPlayer url={url} controls width="100%" height="100%" />
      {title && <p className="video-title">{title}</p>}
    </div>
  );
};

export default GalleryVideoCard;
