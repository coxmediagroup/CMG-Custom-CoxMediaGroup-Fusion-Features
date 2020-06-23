import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

const Items = (props) => {
  const {
    type, index, article, columns, imagePlacement, summary, linked, centered,
  } = props;
  let cols;

  console.log('type: ', type);
  console.log('article: ', article);

  switch (columns) {
    case 1:
      cols = 'col-md-12';
      break;
    case 2:
      cols = 'col-md-6';
      break;
    case 3:
      cols = 'col-md-4';
      break;
    case 4:
      cols = 'col-md-3';
      break;
    default:
      cols = 'col-md-12';
  }

  const canonicalUrl = `${article.canonical_url}/?_website=cmg-ms-40020`;

  return (
    <div key={index} className={cols}>
      {linked && (
        <a href={canonicalUrl}>
          <Content type={type} article={article} summary={summary} imagePlacement={imagePlacement} centered={centered} />
        </a>
      )}

      {!linked && (
        <Content type={type} article={article} summary={summary} imagePlacement={imagePlacement} centered={centered} />
      )}
    </div>
  );
};

Items.propTypes = {
  type: PropTypes.string,
  index: PropTypes.integer,
  article: PropTypes.object,
  columns: PropTypes.number,
  imagePlacement: PropTypes.string,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Items;
