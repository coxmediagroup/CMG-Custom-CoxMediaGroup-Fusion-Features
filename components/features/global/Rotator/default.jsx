import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Swiper from 'swiper';
import Display from './Display';
import Item from './Item';

const Rotator = (props) => {
  const { id, loop, delay } = props.customFields;

  const swiper = new Swiper('.swiper-container',
    {
      autoplay: {
        delay: delay * 1000,
        disableOnInteraction: false,
      },
      loop,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: 'a.swiper-button-next',
        prevEl: 'a.swiper-button-prev',
      },
    });

  // console.log(swiper);

  const content = useContent({
    source: 'content-api2',
    query: { id, website: 'cmg-ms-40020' },
    filter: '',
  });

  const rotatorItems = content && content.content_elements.map((item, index) => {
    return <Item key={index} item={item} />;
  });

  return <Display rotatorItems={rotatorItems} />;
};

Rotator.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Collection ID',
    }),
    loop: PropTypes.boolean.tag({
      group: 'Feature options',
      label: 'Loop',
      defaultValue: true,
    }),
    delay: PropTypes.oneOf([
      10, 7, 5, 3,
    ]).tag({
      defaultValue: 7,
      description: 'This is the delay before advancing',
      group: 'Feature options',
      label: 'Delay',
      labels: {
        10: '10', 7: '7', 5: '5', 3: '3',
      },
    }),
  }),
};

export default Rotator;
