import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

const Leadership = (props) => {
  const { title, slugs } = props.customFields;

  const content = useContent({
    source: 'author-api',
    query: { slug: slugs },
  });

  console.log('content: ', content);

  return (
    <div className="leadership">
      <div className="image-holder">
        <img src={content.authors[0].image} alt={content.authors[0].byline} />
      </div>
      <div className="content-holder">
        <h4 className="leadership">{content.authors[0].byline}</h4>
        <summary>{content.authors[0].role}</summary>
      </div>
    </div>
  );
};

Leadership.label = 'Leadership';

Leadership.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Title',
    }),
    slugs: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Slugs',
    }),
  }),
};

export default Leadership;
