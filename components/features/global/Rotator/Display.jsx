import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { rotatorItems, navigation, pagination } = props;

  return (
    <div className='swiper'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {rotatorItems}
        </div>
        {pagination && (
          <div className="swiper-pagination"></div>
        )}
        {navigation && (
          <>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </>
        )}
      </div>
    </div>
  );
};

Display.propTypes = {
  rotatorItems: PropTypes.object,
  pagination: PropTypes.boolean,
  navigation: PropTypes.boolean,
};

export default Display;
