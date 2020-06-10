import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Item from './item';

const TopPhoto = (props) => {
  const {
    title, description, api, id, imagePlacement, linked, summary, columns, centered,
  } = props.customFields;

  let content;
  let test;

  if (api === 'contentApi') {
    test = useContent({
      source: 'content-api',
      query: { website_url: id },
    });
  } else {
    content = useContent({
      source: 'content-api2',
      query: { id, website: 'cmg-ms-40020' },
      filter: '',
    });
  }

  console.log('test: ', test);

  const items = content && content.content_elements.map((item, index) => {
    return <Item key={index} article={item} columns={columns} summary={summary} linked={linked} centered={centered} />;
  });

  return <div className='top-photo'>
    <div className="feature-options">
      {title && (
        <h3>{title}</h3>
      )}
      {description && (
        <div className="feature-description">{description}</div>
      )}
      <div className='row'>
        {items}
      </div>
    </div>
  </div>;
};

TopPhoto.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Title',
    }),
    description: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Description',
    }),
    api: PropTypes.oneOf([
      'contentApi', 'contentApi2',
    ]).tag({
      defaultValue: 'contentApi2',
      description: 'This is the api you wish to use',
      group: 'Feature options',
      label: 'API',
      labels: { contentApi: 'content-api', contentApi2: 'content-api2' },
    }),
    id: PropTypes.string.tag({
      group: 'Feature options',
      label: 'ID',
    }),
    imagePlacement: PropTypes.oneOf([
      'Top', 'Left', 'Right',
    ]).tag({
      defaultValue: 'top',
      description: 'This is the image placemnet',
      group: 'Feature options',
      label: 'Image Placement',
      labels: { top: 'Top', left: 'Left', right: 'Right' },
    }),
    columns: PropTypes.oneOf([
      '1', '3', '4',
    ]).tag({
      defaultValue: '12',
      description: 'This is the number of columns',
      group: 'Feature options',
      label: 'Columns',
      labels: { 1: '1', 3: '3', 4: '4' },
    }),
    linked: PropTypes.boolean.tag({
      group: 'Item options',
      label: 'Linked',
      defaultValue: true,
    }),
    summary: PropTypes.boolean.tag({
      group: 'Item options',
      label: 'Summary',
      defaultValue: true,
    }),
    centered: PropTypes.boolean.tag({
      group: 'Item options',
      label: 'Centered',
      defaultValue: true,
    }),
  }),
};

export default TopPhoto;
