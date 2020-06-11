import React from 'react';
import PropTypes from 'prop-types';

const Item2 = (props) => {
  // console.log('props: ', props.article);
  let cols;

  switch (props.columns) {
    case '1':
      cols = 'col-md-12';
      break;
    case '3':
      cols = 'col-md-4';
      break;
    case '4':
      cols = 'col-md-3';
      break;
    default:
      cols = 'col-md-1';
  }

  const bodyElements = props.article.content_elements.map((item) => {
    if (item.type === 'text') {
      return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
    } if (item.type === 'image') {
      return <img src={item.url} />;
    }
    return null;
  });

  return (
    <div className={cols}>
      <div className='top-photo'>
        <div className='image-holder'>
          <img src={ props.article.promo_items.lead_art.url } alt={ props.article.promo_items.lead_art.alt_text } />
        </div>
      </div>
      <h4
        className={`headline${
          props.centered ? ' centered' : ''}`}>{props.article.headlines.basic}
      </h4>
      <div className={`listText${
        props.summary ? ' show-me' : ' show-me-mobile'}${
        props.centered ? ' centered' : ''}`}>{ bodyElements }</div>
    </div>
  );
};

export default Item2;
