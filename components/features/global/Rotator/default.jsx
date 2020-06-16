import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Swiper from 'swiper';

const Rotator = (props) => {
  let swiper;

  useEffect(() => {
    swiper = new Swiper('.swiper-container',
      {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
  });

  const { id } = props.customFields;

  const content = useContent({
    source: 'content-api2',
    query: { id, website: 'cmg-ms-40020' },
    filter: '',
  });

  const rotatorItems = content && content.content_elements.map((item, index) => {
    return (
      <div className="swiper-slide" key={index}>
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
  });

  return <div className='swiper'>
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {rotatorItems}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  </div>;
};

Rotator.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Collection ID',
    }),
  }),
};

export default Rotator;
