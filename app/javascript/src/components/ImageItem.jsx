import React from 'react';

export const ImageItem = ({ image, score, name }) => (
  <div className="gridbig">
    <a data-lightbox="image" className="grid">
      <img src={image} />
    </a>
    {score && name && (
      <div className="gridtxt">
        <div className="in-gridtxt">
          <i className="far fa-smile"></i>
          {typeof score === 'number' ? score.toFixed(2) : score}点
        </div>
        {name}
      </div>
    )}
  </div>
);
