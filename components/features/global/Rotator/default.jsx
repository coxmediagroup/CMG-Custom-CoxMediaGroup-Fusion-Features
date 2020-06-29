import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

import CommonSwiper from '../../../utilities/Swiper/default';
import SwiperItem from '../../../utilities/Swiper/Item';
import SwiperDisplay from '../../../utilities/Swiper/Display';

const Rotator = (props) => {
  const {
    id, autoplay, loop, pagination, navigation, delay,
  } = props.customFields;

  // these are specific options
  const identifier = '.rotator';
  const spaceBetween = 10;
  const slidesPerView = 1;
  const slidesPerGroup = 1;

  // eslint-disable-next-line max-len
  const swiper = <CommonSwiper identifier={identifier} slidesPerView={slidesPerView} slidesPerGroup={slidesPerGroup} spaceBetween={spaceBetween} autoplay={autoplay} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  const swiperItems = content && content.content_elements.map((item, index) => {
    if (index < 4) {
      return <SwiperItem key={index} item={item} type="overlay" />;
    }
    return null;
  });

  return (
    <>
      { swiper }
      <div className='rotator'>
        <SwiperDisplay swiperItems={swiperItems} pagination={pagination} navigation={navigation} />
      </div>
    </>
  );
};

Rotator.label = 'Rotator';

Rotator.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Collection ID',
    }),
    autoplay: PropTypes.boolean.tag({
      group: 'Swiper options',
      label: 'Autoplay',
      defaultValue: true,
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
