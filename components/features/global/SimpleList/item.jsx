import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const {
    identifier, article, summary, linked,
  } = props;

  const canonicalUrl = `${props.article.canonical_url}/?_website=cmg-ms-40020`;

  console.log('article with const: ', article)

  return (
    <div key={identifier.toString()}>
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
  identifier: PropTypes.integer,
  article: PropTypes.object,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
};

export default Item;
