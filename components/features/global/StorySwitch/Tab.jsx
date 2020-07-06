import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display a simple tab with an image and some text.
 */
const Tab = (props) => {
  const {
    caption, imageURL, imageAlt, isSelected,
  } = props;

  return (
    <div className={`story-switch_tab ${isSelected ? 'story-switch_tab--selected' : ''}`} onClick={() => {
      props.onClick();
    }}>
      {imageURL
        && <img src={imageURL} alt={imageAlt} />
      }
      <div className="story-switch_tab_caption">{caption}</div>
    </div>
  );
};

Tab.propTypes = {
  caption: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
