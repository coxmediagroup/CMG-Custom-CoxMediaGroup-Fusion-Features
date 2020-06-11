import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Item2 from './Item2';

const Display = (props) => {
  const { api, content, columns, imagePlacement, summary, linked, centered } = props;

  let items;

  if (api === 'contentApi') {
    items = <Item2 article={content} columns={columns} summary={summary} linked={linked} centered={centered} />;
  } else {
    items = content && content.content_elements.map((item, index) => {
      return <Item key={index} article={item} columns={columns} summary={summary} linked={linked} centered={centered} />;
    });
  }

  console.log("props: ", props);

  return (
    <div className='row'>
      { items }
    </div>
  );
};

export default Display;
