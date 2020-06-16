import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Swiper from 'swiper';

const Rotator = (props) => {
  const { id } = props.customFields;

  const content = useContent({
    source: 'content-api2',
    query: { id, website: 'cmg-ms-40020' },
    filter: '',
  });

  const rotatorItems = content && content.content_elements.map((item, index) => {
    console.log('item: ', item);
    return (
      <div key={index}>
        <img src={ item.promo_items.lead_art.url } />
        <h3>{ item.headlines.basic }</h3>
        <p>{ item.description.basic }</p>
      </div>
    );
  });

  return <div className='rotator'>
    { rotatorItems }
  </div>;
};

Rotator.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Collection ID',
    }),
  }),
};

export default Rotator;
