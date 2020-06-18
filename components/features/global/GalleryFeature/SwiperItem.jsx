import React from 'react';
import PropTypes from 'prop-types';

const SwiperItem = (props) => {
  const { key, item } = props;

  return (
    <div className="swiper-slide" key={key}>
      <div className="image-holder">
        {/* <img src={ item.promo_items.lead_art.url } alt={ item.headlines.basic } title={ item.headlines.basic } /> */}
        <img src={ item.url } alt={ item.subtitle } title={ item.subtitle } />
      </div>
    </div>
  );
};

SwiperItem.propTypes = {
  key: PropTypes.integer,
  item: PropTypes.array,
};

export default SwiperItem;
