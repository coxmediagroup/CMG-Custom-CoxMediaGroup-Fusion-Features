import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { key, item } = props;

  return (
    <div className="swiper-slide" key={key}>
      <div className="image-holder">
        <img src={ item.promo_items.lead_art.url } alt={ item.headlines.basic } title={ item.headlines.basic } />
      </div>
      <div className="content-holder">
        <p className="headline">{ item.headlines.basic }</p>
        <div className="list-text">
            <p>{ item.description.basic }</p>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  key: PropTypes.integer,
  item: PropTypes.object,
};

export default Item;
