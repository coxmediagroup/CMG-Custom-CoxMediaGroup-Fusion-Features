/* eslint-disable no-else-return */
import React from 'react';
import { useComponentContext } from 'fusion:context';
import moment from 'moment';

const StoryContent = () => {
  const { globalContent } = useComponentContext();

  const bodyElements = globalContent.content_elements.map((item) => {
    if (item.type === 'text') {
      return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
    } else if (item.type === 'image') {
      return <img src={item.url} />;
    } else {
      return null;
    }
  });

  return <>
    <h1>{globalContent.headlines.basic}</h1>
    <p className='story-info'>
      <strong>Published: </strong>{moment(globalContent.last_updated_date).format('dddd, MMMM D, YYYY @ h:mm a')}<br />
      {/* is there at least one credit */}
      {globalContent.credits.by.length > 0 && (
        <span className="bylines">
            <strong>By: </strong>{ globalContent.credits.by[0].name }
        </span>
      )}
    </p>
    <div className="lead-image-container">
      <div className='lead-image'>
        <img src={ globalContent.promo_items.lead_art.url } alt={ globalContent.promo_items.lead_art.alt_text } />
      </div>
    </div>
    <div className='article-content'>
      {bodyElements}
    </div>
  </>;
};

export default StoryContent;
