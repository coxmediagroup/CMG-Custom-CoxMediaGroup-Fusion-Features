import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { api, article, imagePlacement, summary, centered } = props;

  let bodyContent;
  let contentClass;

  console.log('imagePlacement: ', imagePlacement);

  if (api === 'contentApi') {
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
      {article.promo_items.lead_art.url && (
        <div className='image-holder'>
          <img src={article.promo_items.lead_art.url} alt={ article.promo_items.lead_art.alt_text } />
        </div>
      )}
      <h4
        className={`headline${
          centered ? ' centered' : ''}`}>{article.headlines.basic}
      </h4>
      {article.description.basic && (
        <div className={`listText${
          summary ? ' show-me' : ' show-me-mobile'}${
          centered ? ' centered' : ''}`}>{bodyContent}</div>
      )}
    </div>
  );
};

Content.propTypes = {
  api: PropTypes.string,
  article: PropTypes.object,
  summary: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Content;
