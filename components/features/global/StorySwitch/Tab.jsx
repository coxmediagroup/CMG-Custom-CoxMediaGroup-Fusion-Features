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
    <a href="#"
      id={`${props.id}-tab`}
      role="tab"
      aria-selected={isSelected}
      tabIndex={!isSelected && -1}
      className={`story-switch_tab ${isSelected ? 'story-switch_tab--selected' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick();
      }}>
      {imageURL
        && <img src={imageURL} alt={imageAlt} />
      }
      <div className="story-switch_tab_caption">{caption}</div>
    </a>
  );
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default Tab;
