import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const canonicalUrl = `${props.article.canonical_url}/?_website=cmg-ms-40020`;
  let cols;

  switch (props.columns) {
    case '1':
      cols = 'col-12';
      break;
    case '3':
      cols = 'col-4';
      break;
    case '4':
      cols = 'col-3';
      break;
    default:
      cols = 'col-1';
  }

  return (
    <div key={props.key} className={cols}>
      {props.linked && (
        <a href={canonicalUrl}>
          <div className='top-photo'>
            {props.article.promo_items.lead_art.url && (
              <div className='image-holder'>
                <img src={props.article.promo_items.lead_art.url} />
              </div>
            )}
            <h3 className='headline'>{props.article.headlines.basic}</h3>
            {props.article.description.basic && props.summary && (
              <div className='listText'>{props.article.description.basic}</div>
            )}
          </div>
        </a>
      )}

      {!props.linked && (
        <div className='top-photo'>
          {props.article.promo_items.lead_art.url && (
            <div className='image-holder'>
              <img src={props.article.promo_items.lead_art.url} />
            </div>
          )}
          <h3 className='headline'>{props.article.headlines.basic}</h3>
          {props.article.description.basic && props.summary && (
            <div className='listText'>{props.article.description.basic}</div>
          )}
        </div>
      )}
    </div>
  );
};

Item.propTypes = {
  key: PropTypes.integer,
  article: PropTypes.object,
  columns: PropTypes.string,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
};

export default Item;