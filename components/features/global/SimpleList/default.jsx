import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Item from './item';

const SimpleList = (props) => {
  const {
    title, id, linked, summary,
  } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  const items = content && content.content_elements.map((item, index) => {
    if (item._id) {
      return <Item key={index} article={item} summary={summary} linked={linked} />;
    }
    return null;
  });

  if (content) {
    return <div className='simple-list'>
        {title && (
          <h4>{title}</h4>
        )}
        <ul className='list-unstyled'>
          {items}
        </ul>
    </div>;
  }
  return null;
};

SimpleList.label = 'Simple List';

SimpleList.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string.tag({
      label: 'Title',
    }),
    id: PropTypes.string.tag({
      label: 'ID',
    }),
    linked: PropTypes.boolean.tag({
      label: 'Linked',
      defaultValue: true,
    }),
    summary: PropTypes.boolean.tag({
      label: 'Summary',
      defaultValue: true,
    }),
  }),
};

export default SimpleList;
