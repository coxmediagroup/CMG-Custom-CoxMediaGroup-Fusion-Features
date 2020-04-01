import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from "fusion:content";

const TopPhoto = (props) => {
  const {
    headline, summary, link, image,
  } = props.customFields;

  const content = useContent({
    source: 'content-api2',
    query:  { id: 'UUTHHPDO3ZCR7IZG7XZSN5RC7U' },
    filter: '',
  });

  console.log('content2b: ', content)
  // console.log("props type: ", props.type)
  // console.log("length: ", props.children.length)

  return <div className="top-photo">
      <div className="image-holder">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} />
        </a>
      </div>
      <h3>
        <span className="headline">
          <a href={link} target="_blank" rel="noopener noreferrer">{headline}</a>
        </span>
      </h3>
      <div className="listText">{summary}</div>
  </div>;
};

TopPhoto.propTypes = {
  customFields: PropTypes.shape({
    headline: PropTypes.string,
    summary: PropTypes.richtext,
    link: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default TopPhoto;
