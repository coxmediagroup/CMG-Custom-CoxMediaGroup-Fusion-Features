import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwiperConstructor from 'swiper';
import SwiperItem from './SwiperItem';
import SwiperDisplay from './SwiperDisplay';

const Swiper = (props) => {
  const {
    gallery, loop, pagination, navigation, delay,
  } = props;

  // eslint-disable-next-line no-unused-vars
  let swiper;

  useEffect(() => {
    const swiperOptions = {
      slidesPerView: 6,
      spaceBetween: 30,
      autoplay: {
        delay: delay * 1000,
        disableOnInteraction: false,
      },
      loop,
    };

    if (pagination) {
      swiperOptions.pagination = {
        el: '.gallery .swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      };
    }

    if (navigation) {
      swiperOptions.navigation = {
        nextEl: 'gallery a.swiper-button-next',
        prevEl: 'gallery a.swiper-button-prev',
      };
    }

    swiper = new SwiperConstructor('.gallery .swiper-container', swiperOptions);
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
