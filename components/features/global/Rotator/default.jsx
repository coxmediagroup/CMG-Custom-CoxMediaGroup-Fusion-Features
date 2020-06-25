import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Display from './Display';
import Item from './Item';

import CommonSwiper from '../../../utilities/Swiper/default';

const Rotator = (props) => {
  const {
    id, loop, pagination, navigation, delay,
  } = props.customFields;

  // these are specific options
  const spaceBetween = 10;
  const multislides = false;

  // eslint-disable-next-line max-len
  const swiper = <CommonSwiper identifier='.rotator' multislides={multislides} spaceBetween={spaceBetween} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  const rotatorItems = content && content.content_elements.map((item, index) => {
    if (index < 4) {
      return <Item key={index} item={item} />;
    }
    return null;
  });

  return (
    <>
      { swiper }
      <div className='rotator'>
        <Display rotatorItems={rotatorItems} />
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
