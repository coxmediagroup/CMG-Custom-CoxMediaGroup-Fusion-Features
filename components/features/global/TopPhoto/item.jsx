import React from 'react';

const Item = (props) => {
  console.log('all props: ', props);

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
    <div key={props.index} className={cols}>
      <div className='top-photo'>
        {props.article.promo_items.lead_art.url && (
          <div className='image-holder'>
            <a href={canonicalUrl}>
              <img src={props.article.promo_items.lead_art.url} />
            </a>
          </div>
        )}
        <h3>
          <span className='headline'>
            <a href={canonicalUrl}>{props.article.headlines.basic}</a>
          </span>
        </h3>
        {props.article.description.basic && (
          <div className='listText'>{props.article.description.basic}</div>
        )}
      </div>
    </div>
  );
};

export default Item;