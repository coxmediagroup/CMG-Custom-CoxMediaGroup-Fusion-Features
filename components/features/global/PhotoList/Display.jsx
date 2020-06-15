import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

const Display = (props) => {
  const {
    api, content, columns, imagePlacement, summary, linked, centered,
  } = props;
  let itemsArray;

  if (api === 'singleStory') {
    // eslint-disable-next-line max-len
    itemsArray = <Items api={api} key="0" index="0" article={content} columns={columns} imagePlacement={imagePlacement} summary={summary} linked={linked} centered={centered} />;
  } else {
    itemsArray = content && content.content_elements.map((item, index) => {
      // eslint-disable-next-line max-len
      return <Items api={api} key={index} index={index} article={item} columns={columns} imagePlacement={imagePlacement} summary={summary} linked={linked} centered={centered} />;
    });
  }

  return (
    <div className='row'>
      { itemsArray }
    </div>
  );
};

Display.propTypes = {
  api: PropTypes.string,
  content: PropTypes.object,
  columns: PropTypes.number,
  imagePlacement: PropTypes.string,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Display;
