import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Story from './Story';
import Gallery from './Gallery';

const Test = (props) => {
  const {
    id, linked, summary, centered, loop, pagination, navigation, delay,
  } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  return <div className='test'>
    <>
      {content && content.type === 'story' && (
        <Story content={content} linked={linked} summary={summary} centered={centered} />
      )}
      {content && content.type === 'gallery' && (
        <Gallery content={content} linked={linked} summary={summary} centered={centered} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />
      )}
    </>
  </div>;
};

Test.label = 'Test';

Test.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'ID',
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

export default Test;
