import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { rotatorItems } = props;

  return (
    <div className='swiper'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {rotatorItems}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

Display.propTypes = {
  rotatorItems: PropTypes.object,
};

export default Display;
