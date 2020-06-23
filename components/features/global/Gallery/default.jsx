import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import StoryDisplay from './StoryDisplay';
import GalleryDisplay from './GalleryDisplay';

const Gallery = (props) => {
  const {
    id, imagePlacement, linked, summary, centered, loop, pagination, navigation, delay,
  } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  return <div className='test'>
    <>
      {content && content.type === 'story' && (
        <StoryDisplay content={content} linked={linked} summary={summary} centered={centered} />
      )}
      {content && content.type === 'gallery' && (
        <GalleryDisplay content={content} imagePlacement={imagePlacement} linked={linked} summary={summary} centered={centered} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />
      )}
    </>
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

export default Gallery;
