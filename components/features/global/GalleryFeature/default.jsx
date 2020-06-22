import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Swiper from './Swiper';

const GalleryFeature = (props) => {
  const {
    id, imagePlacement, linked, summary, centered, loop, pagination, navigation, delay,
  } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  const bodyContent = content.content_elements.map((item) => {
    if (item.type === 'text') {
      return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
    } if (item.type === 'image') {
      return <img src={item.url} />;
    }
    return null;
  });

  console.log('linked: ', linked);

  return <div className='gallery-feature'>
    <>
      {imagePlacement && imagePlacement === 'top' && (
        <Swiper gallery={content.promo_items.lead_art} loop={loop} pagination={pagination} delay={delay} />
      )}
      <div className="content-holder">
        <h4 className={`headline${centered ? ' centered' : ''}`}>{content.headlines.basic}</h4>
        {summary && (
          <summary className={`${
            summary ? ' show-me' : ' show-me-mobile'}${
            centered ? ' centered' : ''}`}>{bodyContent}</summary>
        )}
      </div>
      {imagePlacement && imagePlacement === 'bottom' && (
        <Swiper gallery={content.promo_items.lead_art} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />
      )}
    </>
  </div>;
};

GalleryFeature.label = 'Gallery Feature';

GalleryFeature.propTypes = {
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

export default GalleryFeature;
