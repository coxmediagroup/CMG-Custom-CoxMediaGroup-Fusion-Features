import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

const Locations = (props) => {
  const {
    title, description, id,
  } = props.customFields;

  const allLocationIds = id.split(',').map((slug) => { return slug.trim(); });
  const locations = [];

  allLocationIds.forEach((item) => {
    const content = useContent({
      source: 'content-object-api-detail',
      query: { website: 'cmg-ms-40020', id: item },
    });

    locations.push(content);
  });

  console.log('locations: ', locations);

  const locationsArray = locations.length > 0 && locations.map((location, index) => {
    const bodyContent = location.content_elements.map((item) => {
      if (item.level && item.level === 2) {
        return <h3 dangerouslySetInnerHTML={{ __html: item.content }}></h3>;
      } if (item.level && item.level === 3) {
        return <h4 dangerouslySetInnerHTML={{ __html: item.content }}></h4>;
      } if (item.type === 'text') {
        return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
      } if (item.type === 'image') {
        return <img src={item.url} />;
      }
      return null;
    });

    return (
      <div key={index} className="col-md-4">
        {bodyContent}
      </div>
    );
  });

  return <div className='locations'>
    <>
      <div className="feature-options">
        {title && (
          <h3>{title}</h3>
        )}
        {description && (
          <div className="feature-description">{description}</div>
        )}
      </div>
      <div className="row">
        {locationsArray}
      </div>
    </>
  </div>;
};

Locations.label = 'Locations';

Locations.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string.tag({
      label: 'Title',
    }),
    description: PropTypes.string.tag({
      label: 'Description',
    }),
    id: PropTypes.string.tag({
      label: 'ID',
    }),
  }),
};

export default Locations;
