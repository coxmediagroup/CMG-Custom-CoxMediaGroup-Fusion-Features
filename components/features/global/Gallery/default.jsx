import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

import CommonSwiper from '../../../utilities/Swiper/default';
import SwiperItem from '../../../utilities/Swiper/Item';
import SwiperDisplay from '../../../utilities/Swiper/Display';

const Gallery = (props) => {
  const {
    id, imagePlacement, summary, centered, autoplay, loop, pagination, navigation, delay,
  } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  const bodyContent = content.description.basic.split(/[\n\r]+/).map((line) => { return `<p>${line}</p>`; }).join('');

  // these are specific options
  const identifier = '.gallery';
  const spaceBetween = 30;
  const slidesPerView = 6;
  const slidesPerGroup = 6;

  // eslint-disable-next-line max-len
  const swiper = <CommonSwiper identifier={identifier} slidesPerView={slidesPerView} slidesPerGroup={slidesPerGroup} spaceBetween={spaceBetween} autoplay={autoplay} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />;

  const gallery = content.content_elements;

  const swiperItems = gallery.map((item, index) => {
    return <SwiperItem key={index} item={item} type="standard" />;
  });

  return <div className='gallery'>
    {imagePlacement && imagePlacement === 'top' && (
      <>
        { swiper }
        <SwiperDisplay swiperItems={swiperItems} navigation={navigation} pagination={pagination} />
      </>
    )}
    <div className="content-holder">
      <h4 className={`headline${centered ? ' centered' : ''}`}>{content.headlines.basic}</h4>
      {summary && (
        <summary className={`${
          summary ? ' show-me' : ' show-me-mobile'}${
          centered ? ' centered' : ''}`} dangerouslySetInnerHTML={{ __html: bodyContent }}></summary>
      )}
    </div>
    {imagePlacement && imagePlacement === 'bottom' && (
      <>
        { swiper }
        <SwiperDisplay swiperItems={swiperItems} navigation={navigation} pagination={pagination} />
      </>
    )}
  </div>;
};

Gallery.label = 'Gallery';

Gallery.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'ID',
    }),
    imagePlacement: PropTypes.oneOf([
      'top', 'bottom',
    ]).tag({
      defaultValue: 'bottom',
      description: 'This is the image placemnet',
      group: 'Feature options',
      label: 'Image Placement',
      labels: { top: 'Top', bottom: 'Bottom' },
    }),
    linked: PropTypes.boolean.tag({
      group: 'Item options',
      label: 'Linked',
      defaultValue: true,
    }),
    summary: PropTypes.boolean.tag({
      group: 'Item options',
      label: 'Summary',
      defaultValue: true,
    }),
    centered: PropTypes.boolean.tag({
      group: 'Item options',
      label: 'Centered',
      defaultValue: true,
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
      defaultValue: false,
    }),
    delay: PropTypes.oneOf([
      3, 5, 7, 10,
    ]).tag({
      defaultValue: 7,
      description: 'This is the delay before advancing',
      group: 'Swiper options',
      label: 'Delay',
      labels: {
        3: '3', 5: '5', 7: '7', 10: '10',
      },
    }),
  }),
};

export default Gallery;
