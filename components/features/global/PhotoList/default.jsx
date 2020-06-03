import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Item from './item';

const TopPhoto = (props) => {
  const {
    Title, Description, Collection, ImagePlacement, Linked, Summary, Columns, Centered,
  } = props.customFields;

  const content = useContent({
    source: 'content-api2',
    query: { id: Collection, website: 'cmg-ms-40020' },
    filter: '',
  });

  const items = content && content.content_elements.map((item, index) => {
    return <Item key={index} article={item} columns={Columns} summary={Summary} linked={Linked} centered={Centered} />;
  });

  console.log("ImagePlacement: ", ImagePlacement);

  return <div className='photo-list'>
    <div className="feature-options">
      {Title && (
        <h3>{Title}</h3>
      )}
      {Description && (
        <div className="feature-description">{Description}</div>
      )}
      <div className='row'>
        {items}
      </div>
    </div>
  </div>;
};

TopPhoto.propTypes = {
  customFields: PropTypes.shape({
    Title: PropTypes.string.tag({
      group: 'Feature options',
    }),
    Description: PropTypes.string.tag({
      group: 'Feature options',
    }),
    Collection: PropTypes.string.tag({
      group: 'Feature options',
    }),
    ImagePlacement: PropTypes.oneOf([
      'Top', 'Left', 'Right',
    ]).tag({
      defaultValue: 'top',
      description: 'This is the image placemnet',
      group: 'Feature options',
      labels: { top: 'Top', left: 'Left', right: 'Right' },
    }),
    Columns: PropTypes.oneOf([
      '1', '3', '4',
    ]).tag({
      defaultValue: '1',
      description: 'This is the number of columns',
      group: 'Feature options',
      labels: { 1: '1', 3: '3', 4: '4' },
    }),
    Linked: PropTypes.boolean.tag({
      group: 'Item options',
      defaultValue: true,
    }),
    Summary: PropTypes.boolean.tag({
      group: 'Item options',
      defaultValue: true,
    }),
    Centered: PropTypes.boolean.tag({
      group: 'Item options',
      defaultValue: true,
    }),
  }),
};

export default TopPhoto;
