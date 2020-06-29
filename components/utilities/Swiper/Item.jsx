import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { key, item, type } = props;

  return (
    <div className="swiper-slide" key={key}>
      {type === 'overlay' && (
        <>
          <div className="image-holder">
            <img src={ item.promo_items.lead_art.url } alt={ item.headlines.basic } title={ item.headlines.basic } />
          </div>
          <div className="content-holder">
            <h4 className="headline">{ item.headlines.basic }</h4>
            <summary>
                <p>{ item.description.basic }</p>
            </summary>
          </div>
        </>
      )}
      {type === 'standard' && (
        <div className="image-holder">
          <img src={ item.url } alt={ item.subtitle } title={ item.subtitle } />
        </div>
      )}
    </div>
  );
};

Item.propTypes = {
  key: PropTypes.integer,
  item: PropTypes.object,
  type: PropTypes.string,
};

export default Item;
