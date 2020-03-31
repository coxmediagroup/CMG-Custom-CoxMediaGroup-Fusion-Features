/* eslint-disable no-else-return */
import React from 'react';

import { useComponentContext } from 'fusion:context';

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

  return <div className="base-test">
    <h1>{globalContent.headlines.basic}</h1>
    <p>
      <strong>Published: </strong>{ globalContent.last_updated_date }<br />
      {/* is there at least one credit */}
      {globalContent.credits.by.length > 0 && (
        <span className="bylines">
            <strong>By: </strong>
        </span>
      )}
    </p>
    <div className="lead-image-container">
      <img src={ globalContent.promo_items.lead_art.url } alt={ globalContent.promo_items.lead_art.alt_text } />
    </div>
    {bodyElements}
  </div>;
};

export default StoryContent;
