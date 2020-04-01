import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from "fusion:content";
import Item from './item';

const TopPhoto = (props) => {
  const {
    headline, collection, columns,
  } = props.customFields;

  const content = useContent({
    source: 'content-api2',
    query: { id: collection, website: 'cmg-ms-40020' },
    filter: '',
  });

  console.log('content: ', content);
  console.log('columns: ', columns);

  const items = content && content.content_elements.map((item, index) => {
    return <Item key={index} article={item} />;
  });

  return <div className="top-photo">
      <h3>{headline}</h3>
      {items}
  </div>;
};

TopPhoto.propTypes = {
  customFields: PropTypes.shape({
    headline: PropTypes.string,
    collection: PropTypes.string,
    columns: PropTypes.string,
  }),
};

export default TopPhoto;
