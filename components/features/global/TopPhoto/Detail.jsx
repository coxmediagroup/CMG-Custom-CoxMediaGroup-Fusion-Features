import React from 'react';
import PropTypes from 'prop-types';

const Detail = (props) => {
  const { api, article, summary, centered } = props;

  let bodyContent;

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

  return (
    <>
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
    </>
  );
};

Detail.propTypes = {
  api: PropTypes.string,
  article: PropTypes.object,
  summary: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Detail;
