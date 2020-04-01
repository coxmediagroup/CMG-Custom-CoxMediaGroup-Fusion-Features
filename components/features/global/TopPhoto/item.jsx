import React from 'react';

const Item = (props) => {
    console.log('props: ', props.article);

    return (
    <div className="top-photo">
      <div className="image-holder">
        <a href={props.article.canonical_ur}>
          <img src={props.article.promo_items.lead_art.additional_properties} />
        </a>
      </div>
      <h3>
        <span className="headline">
          <a href={props.article.canonical_url}>{props.article.headlines.basic}</a>
        </span>
      </h3>
      <div className="listText">summary</div>
  </div>
  );
};

export default Item;