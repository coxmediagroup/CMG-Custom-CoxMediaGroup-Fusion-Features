import React from 'react';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  const { content } = props;

  // console.log("gallery content: ", content)

  return <div className='gallery'>
    <>
      {content && content.headlines.basic && (
        <h4>Gallery: {content.headlines.basic}</h4>
      )}
    </>
  </div>;
};

export default Gallery;