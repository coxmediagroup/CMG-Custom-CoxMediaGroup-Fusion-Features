import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Story from './Story';
import Gallery from './Gallery';

const Test = (props) => {
  const { id } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  console.log("content: ", content)

  return <div className='test'>
    <>
      {content && content.type === 'story' && (
        <Story content={content} />
      )}
      {content && content.type === 'gallery' && (
        <Gallery content={content} />
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
  }),
};

export default Test;
