import React from 'react';

export const ImageItem = ({ image }) => (
  <div className="gridbig">
    <a data-lightbox="image" className="grid">
      <img src={image} />
    </a>
    <div className="gridtxt">
      <div className="in-gridtxt">
        <i className="far fa-smile"></i> 100点
      </div>
      散布流太郎
    </div>
  </div>
);
