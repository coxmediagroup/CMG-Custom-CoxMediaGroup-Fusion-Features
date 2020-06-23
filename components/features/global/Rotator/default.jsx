import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import SwiperConstructor from 'swiper';
import Display from './Display';
import Item from './Item';

const Rotator = (props) => {
  const {
    id, loop, pagination, navigation, delay,
  } = props.customFields;

  const swiperOptions = {
    autoplay: {
      delay: delay * 1000,
      disableOnInteraction: true,
    },
    loop,
  };

  if (pagination) {
    swiperOptions.pagination = {
      el: '.rotator .swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"></span>`;
      },
    };
  }

  if (navigation) {
    swiperOptions.navigation = {
      nextEl: '.rotator a.swiper-button-next',
      prevEl: '.rotator a.swiper-button-prev',
    };
  }

  // eslint-disable-next-line no-unused-vars
  const swiper = new SwiperConstructor('.rotator .swiper-container', swiperOptions);

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  const rotatorItems = content && content.content_elements.map((item, index) => {
    if (index < 4) {
      return <Item key={index} item={item} />;
    }
    return null;
  });

  return (
    <div className='rotator'>
      <Display rotatorItems={rotatorItems} />
    </div>
  );
};

Rotator.label = 'Rotator';

Rotator.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Collection ID',
    }),
    loop: PropTypes.boolean.tag({
      group: 'Swiper options',
      label: 'Loop',
      defaultValue: true,
    }),
    pagination: PropTypes.boolean.tag({
      group: 'Swiper options',
      label: 'Pagination',
      defaultValue: true,
    }),
    navigation: PropTypes.boolean.tag({
      group: 'Swiper options',
      label: 'Navigation',
      defaultValue: true,
    }),
    delay: PropTypes.oneOf([
      10, 7, 5, 3,
    ]).tag({
      defaultValue: 7,
      description: 'This is the delay before advancing',
      group: 'Swiper options',
      label: 'Delay',
      labels: {
        10: '10', 7: '7', 5: '5', 3: '3',
      },
    }),
  }),
};

export default Rotator;
