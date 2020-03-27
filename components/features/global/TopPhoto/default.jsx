import React from 'react';
import PropTypes from 'prop-types';

const TopPhoto = (props) => {
  const { headline, summary, link, image } = props.customFields;

  // console.log("props: ", props)
  // console.log("props type: ", props.type)
  // console.log("length: ", props.children.length)

  return <div className="top-photo">
      <div className="image-holder">
        <a href={link} target="_blank">
          <img src={image} />
        </a>
      </div>
      <h3>
        <span className="headline">
          <a href={link} target="_blank">{headline}</a>
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