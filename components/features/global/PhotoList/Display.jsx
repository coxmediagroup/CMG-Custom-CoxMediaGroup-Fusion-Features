/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

const Display = (props) => {
  const {
    type, content, columns, imagePlacement, summary, linked, centered,
  } = props;
  let itemsArray;

  if (type === 'story') {
    itemsArray = <Items type={type} identifier="0" article={content} columns={columns} imagePlacement={imagePlacement} summary={summary} linked={linked} centered={centered} />;
  } else {
    itemsArray = content && content.content_elements.map((item, index) => {
      // eslint-disable-next-line react/jsx-key
      return <Items type={type} identifier={index.toString()} article={item} columns={columns} imagePlacement={imagePlacement} summary={summary} linked={linked} centered={centered} />;
    });
  }

  return (
    <div className='row'>
      { itemsArray }
    </div>
  );
};

Display.propTypes = {
  type: PropTypes.string,
  content: PropTypes.object,
  columns: PropTypes.number,
  imagePlacement: PropTypes.string,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Display;
