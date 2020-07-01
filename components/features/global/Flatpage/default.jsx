import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';

const Flatpage = (props) => {
  const {
    id,
  } = props.customFields;

  const content = useContent({
    source: 'content-object-api',
    query: { website: 'cmg-ms-40020', id },
  });

  const bodyContent = content.content_elements.map((item) => {
    if (item.type === 'text') {
      return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
    } if (item.type === 'image') {
      return <img src={item.url} />;
    }
    return null;
  });

  return <div className='flatpage'>
    <>
      {bodyContent}
    </>
  </div>;
};

Flatpage.label = 'Flatpage';

Flatpage.propTypes = {
  customFields: PropTypes.shape({
    id: PropTypes.string.tag({
      label: 'ID',
    }),
  }),
};

export default Flatpage;
