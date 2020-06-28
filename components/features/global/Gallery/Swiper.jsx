import React from 'react';
import PropTypes from 'prop-types';
import SwiperItem from './SwiperItem';
import SwiperDisplay from './SwiperDisplay';

import CommonSwiper from '../../../utilities/Swiper/default';

const Swiper = (props) => {
  const {
    gallery, autoplay, loop, pagination, navigation, delay,
  } = props;

  // these are specific options
  const identifier = '.gallery';
  const spaceBetween = 30;
  const slidesPerView = 6;
  const slidesPerGroup = 6;

  // eslint-disable-next-line max-len
  const swiper = <CommonSwiper identifier={identifier} slidesPerView={slidesPerView} slidesPerGroup={slidesPerGroup} spaceBetween={spaceBetween} autoplay={autoplay} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />;

  const swiperItems = gallery.map((item, index) => {
    return <SwiperItem key={index} item={item} />;
  });

  return (
    <>
      { swiper }
      <SwiperDisplay rotatorItems={swiperItems} navigation={navigation} pagination={pagination} />
    </>
  );
};

Swiper.propTypes = {
  gallery: PropTypes.object,
  loop: PropTypes.boolean,
  autoplay: PropTypes.boolean,
  pagination: PropTypes.boolean,
  navigation: PropTypes.boolean,
  delay: PropTypes.integer,
};

export default Swiper;
