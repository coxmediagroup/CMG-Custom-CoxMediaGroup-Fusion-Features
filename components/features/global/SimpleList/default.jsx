import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Item from './item';

const SimpleList = (props) => {
  const {
    Title, Collection, Linked, Summary,
  } = props.customFields;

  const content = useContent({
    source: 'content-api2',
    query: { id: Collection, website: 'cmg-ms-40020' },
    filter: '',
  });

  const items = content && content.content_elements.map((item, index) => {
    return <Item key={index} article={item} summary={Summary} linked={Linked} />;
  });

  return <div className='simple-list'>
      {Title && (
        <h4>{Title}</h4>
      )}
      <ul className='list-unstyled'>
        {items}
      </ul>
  </div>;
};

SimpleList.propTypes = {
  customFields: PropTypes.shape({
    Title: PropTypes.string.tag({
      group: 'Feature options',
    }),
    Collection: PropTypes.string.tag({
      group: 'Feature options',
    }),
    Linked: PropTypes.boolean.tag({
      group: 'Item options',
      defaultValue: true,
    }),
    Summary: PropTypes.boolean.tag({
      group: 'Item options',
      defaultValue: true,
    }),
  }),
};

export default SimpleList;
