import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const {
    key, article, summary, linked,
  } = props;

  const canonicalUrl = `${props.article.canonical_url}/?_website=cmg-ms-40020`;

  console.log('article with const: ', article)

  return (
    <div key={key}>
      {linked && (
        <a href={canonicalUrl}>
          <li>
            {article.headlines.basic && (
              <div className='headline'>{article.headlines.basic}</div>
            )}
            {article.description.basic && summary && (
              <div className='listText'>{article.description.basic}</div>
            )}
          </li>
        </a>
      )}

      {!linked && (
        <li>
          {article.headlines.basic && (
            <div className='headline'>{article.headlines.basic}</div>
          )}
          {article.description.basic && summary && (
            <div className='listText'>{article.description.basic}</div>
          )}
        </li>
      )}
    </div>
  );
};

Item.propTypes = {
  key: PropTypes.integer,
  article: PropTypes.object,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
};

export default Item;
