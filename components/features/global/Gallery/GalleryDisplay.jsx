import React from 'react';
import PropTypes from 'prop-types';
import Swiper from './Swiper';

const GalleryDisplay = (props) => {
  const {
    content, id, imagePlacement, linked, summary, centered, loop, pagination, navigation, delay,
  } = props;

  const bodyContent = content.description.basic.split(/[\n\r]+/).map((line) => { return `<p>${line}</p>`; }).join('');

  return <div className='gallery'>
    <>
      {imagePlacement && imagePlacement === 'top' && (
        <Swiper gallery={content.content_elements} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />
      )}
      <div className="content-holder">
        <h4 className={`headline${centered ? ' centered' : ''}`}>{content.headlines.basic}</h4>
        {summary && (
          <summary className={`${
            summary ? ' show-me' : ' show-me-mobile'}${
            centered ? ' centered' : ''}`} dangerouslySetInnerHTML={{ __html: bodyContent }}></summary>
        )}
      </div>
      {imagePlacement && imagePlacement === 'bottom' && (
        <Swiper gallery={content.content_elements} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />
      )}
    </>
  </div>;
};

GalleryDisplay.propTypes = {
  content: PropTypes.object,
  id: PropTypes.string,
  imagePlacement: PropTypes.string,
  linked: PropTypes.boolean,
  summary: PropTypes.string,
  centered: PropTypes.boolean,
  loop: PropTypes.boolean,
  pagination: PropTypes.boolean,
  navigation: PropTypes.boolean,
  delay: PropTypes.integer,
};

export default GalleryDisplay;
