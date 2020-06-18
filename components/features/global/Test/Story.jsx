import React from 'react';
import PropTypes from 'prop-types';

const Story = (props) => {
  const { content } = props;

  console.log("story content: ", content)

  const bodyContent = content.content_elements.map((item) => {
    if (item.type === 'text') {
      return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
    } if (item.type === 'image') {
      return <img src={item.url} />;
    }
    return null;
  });

  return <div className='gallery'>
    <>
      {content && content.headlines.basic && (
        <h4>Story: {content.headlines.basic}</h4>
      )}
      { bodyContent }
    </>
  </div>;
};

export default Story;
