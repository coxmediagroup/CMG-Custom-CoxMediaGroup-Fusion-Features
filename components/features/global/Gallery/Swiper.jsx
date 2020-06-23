import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwiperConstructor from 'swiper';
import SwiperItem from './SwiperItem';
import SwiperDisplay from './SwiperDisplay';

const Swiper = (props) => {
  const {
    gallery, loop, pagination, navigation, delay,
  } = props;

  let swiper;

  useEffect(() => {
    swiper = new SwiperConstructor('.test .swiper-container',
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
          nextEl: 'test a.swiper-button-next',
          prevEl: 'test a.swiper-button-prev',
        },
      });
  });

  const swiperItems = gallery.map((item, index) => {
    return <SwiperItem key={index} item={item} />;
  });

  return <SwiperDisplay rotatorItems={swiperItems} navigation={navigation} pagination={pagination} />;
};

Swiper.propTypes = {
  gallery: PropTypes.object,
  loop: PropTypes.boolean,
  pagination: PropTypes.boolean,
  navigation: PropTypes.boolean,
  delay: PropTypes.integer,
};

export default Swiper;