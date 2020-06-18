import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

const Story = (props) => {
  const { content } = props;

  // let content;

  // if (api === 'story') {
  //   content = useContent({
  //     source: 'content-object-api',
  //     query: { api: 'stories', website: 'cmg-ms-40020', id },
  //   });
  // } else {
  //   content = useContent({
  //     source: 'content-object-api',
  //     query: { api: 'galleries', website: 'cmg-ms-40020', id },
  //   });
  // }

  console.log("story content: ", content)

  return <div className='gallery'>
    <>
      {content && content.headlines.basic && (
        <h4>Story: {content.headlines.basic}</h4>
      )}
    </>
  </div>;
};

export default Story;
