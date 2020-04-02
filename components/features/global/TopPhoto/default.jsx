import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Item from './item';

const TopPhoto = (props) => {
  const {
    Title, Collection, Linked, Summary, Columns,
  } = props.customFields;

  const content = useContent({
    source: 'content-api2',
    query: { id: Collection, website: 'cmg-ms-40020' },
    filter: '',
  });

  console.log("Summary: ", Summary)

  const items = content && content.content_elements.map((item, index) => {
    return <Item key={index} article={item} columns={Columns} summary={Summary} linked={Linked} />;
  });

  return <div className='top-photo'>
      {Title && (
        <h3>{Title}</h3>
      )}
      <div className='row'>
        {items}
      </div>
  </div>;
};

TopPhoto.propTypes = {
  customFields: PropTypes.shape({
    Title: PropTypes.string,
    Collection: PropTypes.string.isRequired,
    Linked: PropTypes.boolean,
    Summary: PropTypes.boolean,
    Columns: PropTypes.oneOf([
      '1', '3', '4',
    ]).tag({
      defaultValue: '1',
      description: 'This is the number of columns',
      // group: 'examples',
      labels: { 1: '1', 3: '3', 4: '4' },
    }),
  }),
};

export default TopPhoto;
