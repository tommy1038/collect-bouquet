import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const ImageItem = ({ image, score, name }) => (
  <div className="gridbig">
    <Zoom>
      <img
        src={image}
        className="zoom-img"
      />
    </Zoom>
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
