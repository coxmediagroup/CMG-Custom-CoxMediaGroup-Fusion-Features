import React from 'react';
import PropTypes from 'prop-types';

const SwiperDisplay = (props) => {
  // eslint-disable-next-line react/prop-types
  const { swiperItems, navigation, pagination } = props;

  return (
    <div className='swiper'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {swiperItems}
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

SwiperDisplay.propTypes = {
  pagination: PropTypes.boolean,
  navigation: PropTypes.boolean,
};

export default SwiperDisplay;
