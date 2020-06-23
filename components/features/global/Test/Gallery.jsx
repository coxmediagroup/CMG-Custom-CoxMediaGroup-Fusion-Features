import React from 'react';
import PropTypes from 'prop-types';
import Swiper from './Swiper';

const Gallery = (props) => {
  const {
    content, id, linked, summary, centered, loop, pagination, navigation, delay,
  } = props;

  const bodyContent = content.description.basic.split(/[\n\r]+/).map((line) => { return `<p>${line}</p>`; }).join('');

  return <div className='gallery'>
    <>
      <div className="content-holder">
        <h4 className={`headline${centered ? ' centered' : ''}`}>{content.headlines.basic}</h4>
        {summary && (
          <summary className={`${
            summary ? ' show-me' : ' show-me-mobile'}${
            centered ? ' centered' : ''}`} dangerouslySetInnerHTML={{ __html: bodyContent }}></summary>
        )}
      </div>
      <Swiper gallery={content.content_elements} loop={loop} pagination={pagination} navigation={navigation} delay={delay} />
    </>
  </div>;
};

Gallery.propTypes = {
  content: PropTypes.object,
};

export default Gallery;
