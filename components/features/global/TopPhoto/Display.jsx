import React from 'react';
import PropTypes from 'prop-types';
import Item1 from './Item1';
import Item2 from './Item2';

const Display = (props) => {
  const { api, content, columns, imagePlacement, summary, linked, centered } = props;

  let items;

  if (api === 'contentApi') {
    items = content && content.content_elements.map((item, index) => {
      // eslint-disable-next-line max-len
      return <Item1 api={api} key={index} article={item} columns={columns} imagePlacement={imagePlacement} summary={summary} linked={linked} centered={centered} />;
    });
  } else {
    // eslint-disable-next-line max-len
    items = <Item2 api={api} key="0" article={content} columns={columns} imagePlacement={imagePlacement} summary={summary} linked={linked} centered={centered} />;
  }

  return (
    <div className='row'>
      { items }
    </div>
  );
};

export default Display;
