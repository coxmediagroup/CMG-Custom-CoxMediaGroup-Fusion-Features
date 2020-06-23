import React from 'react';
import PropTypes from 'prop-types';

const SwiperItem = (props) => {
  const { key, item } = props;

  return (
    <div className="swiper-slide" key={key}>
      <div className="image-holder">
        <img src={ item.url } alt={ item.subtitle } title={ item.subtitle } />
      </div>
    </div>
  );
};

SwiperItem.propTypes = {
  key: PropTypes.integer,
  item: PropTypes.object,
};

export default SwiperItem;
