import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwiperConstructor from 'swiper';
import SwiperItem from './SwiperItem';
import SwiperDisplay from './SwiperDisplay';

const Swiper = (props) => {
  const {
    gallery, loop, pagination, navigation, delay, 
  } = props;

  console.log('loop: ', loop);
  console.log('pagination: ', pagination);
  console.log('navigation: ', navigation);
  console.log('delay: ', delay);

  useEffect(() => {
    const swiper = new SwiperConstructor('.gallery-feature .swiper-container',
      {
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: {
          delay: delay * 1000,
          disableOnInteraction: false,
        },
        loop,
        pagination: {
          el: 'gallery-feature .swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
        navigation: {
          nextEl: 'gallery-feature a.swiper-button-next',
          prevEl: 'gallery-feature a.swiper-button-prev',
        },
      });
  });

  const swiperItems = gallery && gallery.content_elements.map((item, index) => {
    return <SwiperItem key={index} item={item} />;
  });

  return <SwiperDisplay rotatorItems={swiperItems} navigation={navigation} pagination={pagination} />;
};

export default Swiper;
