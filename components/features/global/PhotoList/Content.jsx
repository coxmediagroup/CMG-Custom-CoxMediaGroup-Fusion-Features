import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const {
    type, identifier, article, imagePlacement, summary, centered,
  } = props;

  let bodyContent;
  let contentClass;

  if (type === 'story') {
    bodyContent = article.content_elements.map((item, index) => {
      if (item.type === 'text') {
        return <p key={index} dangerouslySetInnerHTML={{ __html: item.content }}></p>;
      }
      return null;
    });
  } else {
    bodyContent = article.description.basic;
  }

  const leadArt = article.promo_items.basic ? article.promo_items.basic.url : article.promo_items.lead_art.url;

  if (imagePlacement === 'Left') {
    contentClass = ' leftImage';
  } else if (imagePlacement === 'Right') {
    contentClass = ' rightImage';
  } else {
    contentClass = '';
  }

  return (
    <div key={identifier} className={contentClass}>
      <div className='image-holder'>
        {leadArt && imagePlacement !== 'Bottom' && (
          <img src={leadArt} alt={ article.headlines.basic } />
        )}
      </div>

      <div className='content-holder'>
        <h4
          className={`headline${
            centered ? ' centered' : ''}`}>{article.headlines.basic}
        </h4>
        {bodyContent && (
          <summary className={`${
            summary ? ' show-me' : ' show-me-mobile'}${
            centered ? ' centered' : ''}`}>{bodyContent}</summary>
        )}
      </div>

      <div className='image-holder'>
        {leadArt && imagePlacement === 'Bottom' && (
          <img src={leadArt} alt={ article.headlines.basic } />
        )}
      </div>
    </div>
  );
};

Content.propTypes = {
  type: PropTypes.string,
  identifier: PropTypes.string,
  article: PropTypes.object,
  imagePlacement: PropTypes.string,
  summary: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Content;
