import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const {
    type, article, imagePlacement, summary, centered,
  } = props;

  let bodyContent;
  let contentClass;

  if (type === 'story') {
    bodyContent = article.content_elements.map((item) => {
      if (item.type === 'text') {
        return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
      } if (item.type === 'image') {
        return <img src={item.url} />;
      }
      return null;
    });
  } else {
    bodyContent = article.description.basic;
  }

  if (imagePlacement === 'Left') {
    contentClass = ' leftImage';
  } else if (imagePlacement === 'Right') {
    contentClass = ' rightImage';
  } else {
    contentClass = '';
  }

  return (
    <div className={contentClass}>
      <div className='image-holder'>
        {article.promo_items.lead_art.url && imagePlacement !== 'Bottom' && (
          <img src={article.promo_items.lead_art.url} alt={ article.promo_items.lead_art.alt_text } />
        )}
       {article.promo_items.lead_art.type === 'gallery' && article.promo_items.lead_art.content_elements && imagePlacement !== 'Bottom' && (
          <img src={article.promo_items.lead_art.content_elements[0].url} alt={ article.promo_items.lead_art.slug } />
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
        {article.promo_items.lead_art.url && imagePlacement === 'Bottom' && (
          <img src={article.promo_items.lead_art.url} alt={ article.promo_items.lead_art.alt_text } />
        )}
        {/* eslint-disable-next-line max-len */}
        {article.promo_items.lead_art.type === 'gallery' && article.promo_items.lead_art.content_elements && imagePlacement === 'Bottom' && (
          <img src={article.promo_items.lead_art.content_elements[0].url} alt={ article.promo_items.lead_art.slug } />
        )}
      </div>
    </div>
  );
};

Content.propTypes = {
  type: PropTypes.string,
  article: PropTypes.object,
  imagePlacement: PropTypes.string,
  summary: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Content;
