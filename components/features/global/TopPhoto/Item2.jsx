import React from 'react';
import PropTypes from 'prop-types';

const Item2 = (props) => {
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

  return (
    // eslint-disable-next-line react/prop-types
    <div key={props.key} className={cols}>
      {props.linked && (
        <a href={canonicalUrl}>
          <div className='top-photo'>
            {article.promo_items.lead_art.url && (
              <div className='image-holder'>
                <img src={article.promo_items.lead_art.url} />
              </div>
            )}
            <h4
              className={`headline${
                props.centered ? ' centered' : ''}`}>{article.headlines.basic}
            </h4>
            {article.description.basic && (
              <div className={`listText${
                props.summary ? ' show-me' : ' show-me-mobile'}${
                props.centered ? ' centered' : ''}`}>{article.description.basic}</div>
            )}
          </div>
        </a>
      )}

      {!props.linked && (
        <div className='top-photo'>
          {article.promo_items.lead_art.url && (
            <div className='image-holder'>
              <img src={article.promo_items.lead_art.url} />
            </div>
          )}
          <h4
            className={`headline${
              props.centered ? ' centered' : ''}`}>{article.headlines.basic}
          </h4>
            {article.description.basic && (
              <div className={`listText${
                props.summary ? ' show-me' : ' show-me-mobile'}${
                props.centered ? ' centered' : ''}`}>{article.description.basic}</div>
            )}
        </div>
      )}
    </div>
  );
};

Item2.propTypes = {
  index: PropTypes.integer,
  article: PropTypes.object,
  columns: PropTypes.string,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Item2;
