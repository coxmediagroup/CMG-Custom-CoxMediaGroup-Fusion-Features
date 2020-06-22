import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Display from './Display';

const PhotoList = (props) => {
  const {
    title, description, id, imagePlacement, linked, summary, columns, centered,
  } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  return <div className='photo-list'>
    <>
      <div className="feature-options">
        {title && (
          <h3>{title}</h3>
        )}
        {description && (
          <div className="feature-description">{description}</div>
        )}
      </div>
        {/* eslint-disable-next-line max-len */}
        <Display type={content.type} content={content} columns={columns} imagePlacement={imagePlacement} summary={summary} linked={linked} centered={centered} />
    </>
  </div>;
};

PhotoList.label = 'Photo List';

PhotoList.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Title',
    }),
    description: PropTypes.string.tag({
      group: 'Feature options',
      label: 'Description',
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
      1, 2, 3, 4,
    ]).tag({
      defaultValue: '12',
      description: 'This is the number of columns',
      group: 'Feature options',
      label: 'Columns',
      labels: {
        1: '1', 2: '2', 3: '3', 4: '4',
      },
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

export default PhotoList;
