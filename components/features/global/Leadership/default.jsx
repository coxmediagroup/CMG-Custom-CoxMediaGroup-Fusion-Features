import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

const Leadership = (props) => {
  const { slugs } = props.customFields;

  const allSlugs = slugs.split(',').map((slug) => { return slug.trim(); });
  const leaders = [];

  allSlugs.forEach((slug) => {
    const content = useContent({
      source: 'author-api',
      query: { slug },
    });

    leaders.push(content);
  });

  console.log('all slugs');

  const itemsArray = leaders.length > 0 && leaders.map((item, index) => {
    return (
      <div key={index} className="col-md-4">
        <a href={item.authors[0].bio_page}>
          <div className="image-holder">
            <img src={item.authors[0].image} alt={item.authors[0].byline} />
          </div>
          <div className="content-holder">
            <h4 className="headline">{item.authors[0].byline}</h4>
            <summary>{item.authors[0].role}</summary>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="leadership">
      <div className='row'>
        { itemsArray }
      </div>
    </div>
  );
};

Leadership.label = 'Leadership';

Leadership.propTypes = {
  customFields: PropTypes.shape({
    slugs: PropTypes.string.tag({
      label: 'Slugs (comma-separated)',
    }),
  }),
};

export default Leadership;
