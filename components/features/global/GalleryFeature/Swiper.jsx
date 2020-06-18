import React from 'react';
import PropTypes from 'prop-types';
import SwiperConstructor from 'swiper';
import SwiperItem from './SwiperItem';
import SwiperDisplay from './SwiperDisplay';

const Swiper = (props) => {
  const {
    gallery, loop, pagination, delay, 
  } = props;

  // console.log('gallery: ', gallery);
  console.log('delay: ', delay);

  const swiperConstructor = new SwiperConstructor('.swiper-container',
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

  const swiperItems = gallery && gallery.content_elements.map((item, index) => {
    return <SwiperItem key={index} item={item} />;
  });

  return <SwiperDisplay rotatorItems={swiperItems} />;
};

export default Swiper;
