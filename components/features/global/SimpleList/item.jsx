import React from 'react';

const Item = (props) => {
  console.log('all props: ', props);

  const canonicalUrl = `${props.article.canonical_url}/?_website=cmg-ms-40020`;

  return (
    <div key={props.index}>
      {props.linked && (
        <a href={canonicalUrl}>
          <li>
            {/* {props.article.promo_items.lead_art.url && (
              <div className='image-holder'>
                <img src={props.article.promo_items.lead_art.url} />
              </div>
            )} */}
            <div className='headline'>{props.article.headlines.basic}</div>
            {props.article.description.basic && props.summary && (
              <div className='listText'>{props.article.description.basic}</div>
            )}
          </li>
        </a>
      )}

      {!props.linked && (
        <li>
          {/* {props.article.promo_items.lead_art.url && (
            <div className='image-holder'>
              <img src={props.article.promo_items.lead_art.url} />
            </div>
          )} */}
          <div className='headline'>{props.article.headlines.basic}</div>
          {props.article.description.basic && props.summary && (
            <div className='listText'>{props.article.description.basic}</div>
          )}
        </li>
      )}
    </div>
  );
};

export default Item;