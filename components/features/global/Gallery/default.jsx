import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

const Gallery = (props) => {
  const { id, api } = props.customFields;

  console.log("id: ", id)

  let content;

  if (api === 'story') {
    content = useContent({
      source: 'content-object-api',
      query: { api: 'stories', website: 'cmg-ms-40020', id },
    });
  } else {
    content = useContent({
      source: 'content-object-api',
      query: { api: 'galleries', website: 'cmg-ms-40020', id },
    });
  }

  console.log("content: ", content)

  return <div className='gallery'>
    <>
      <h4>Type: {content.type}</h4>
    </>
  </div>;
};

Gallery.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'ID',
    }),
    api: PropTypes.oneOf([
      'story', 'gallery',
    ]).tag({
      defaultValue: 'gallery',
      description: 'This is the api you wish to use',
      group: 'Feature options',
      label: 'Content Source',
      labels: { story: 'Story', gallery: 'Gallery' },
    }),
  }),
};

export default Gallery;
