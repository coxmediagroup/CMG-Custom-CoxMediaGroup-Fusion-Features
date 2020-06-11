import React from 'react';
import PropTypes from 'prop-types';

const Item1 = (props) => {
  const { api, key, article, columns, imagePlacement, summary, linked, centered } = props;
  let cols;

  switch (columns) {
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

  console.log('api: ', api);
  console.log('key: ', key);
  console.log('article: ', article);
  console.log('imagePlacement: ', imagePlacement);
  console.log('summary: ', summary);
  console.log('linked: ', linked);
  console.log('centered: ', centered);

  const canonicalUrl = `${article.canonical_url}/?_website=cmg-ms-40020`;

  const bodyElements = article.content_elements.map((item) => {
    if (item.type === 'text') {
      return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
    } if (item.type === 'image') {
      return <img src={item.url} />;
    }
    return null;
  });

  return (
    <div key={key} className={cols}>
      <div className='top-photo'>
        <div className='image-holder'>
          <img src={ article.promo_items.lead_art.url } alt={ article.promo_items.lead_art.alt_text } />
        </div>
      </div>
      <h4
        className={`headline${
          centered ? ' centered' : ''}`}>{article.headlines.basic}
      </h4>
      <div className={`listText${
        summary ? ' show-me' : ' show-me-mobile'}${
        centered ? ' centered' : ''}`}>{ bodyElements }</div>
    </div>
  );
};

export default Item1;