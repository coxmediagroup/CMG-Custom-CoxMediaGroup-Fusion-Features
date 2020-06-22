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
    swiper = new SwiperConstructor('.gallery-feature .swiper-container',
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

  console.log('swiper: ', swiper);

  const swiperItems = gallery && gallery.content_elements.map((item, index) => {
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
