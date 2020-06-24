import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

const Leadership = (props) => {
  const { slugs } = props.customFields;

  let allSlugs = slugs.split(', ');
  let leaders = [];

  allSlugs.forEach((slug) => {

    const content = useContent({
      source: 'author-api',
      query: { slug },
    });

    leaders.push(content);
  });

  const itemsArray = leaders.length > 0 && leaders.map((item, index) => {
    console.log('item: ', item.authors[0]);

    return (
      <>
        <a href={item.authors[0].bio_page}>
          <div className="image-holder">
            <img src={item.authors[0].image} alt={item.authors[0].byline} />
          </div>
          <div className="content-holder">
            <h4 className="leadership">{item.authors[0].byline}</h4>
            <summary>{item.authors[0].role}</summary>
          </div>
        </a>
      </>
    );
  });

  return (
    <div className="leadership">
      { itemsArray }
    </div>
  );
};

Leadership.label = 'Leadership';

Leadership.propTypes = {
  customFields: PropTypes.shape({
    slugs: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Slugs',
    }),
  }),
};

export default Leadership;
