import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

const Items = (props) => {
  const { api, index, article, columns, imagePlacement, summary, linked, centered } = props;
  let cols;

  switch (columns) {
    case '1':
      cols = 'col-md-12';
      break;
    case '3':
      cols = 'col-md-4';
      break;
    case '4':
      cols = 'col-md-3';
      break;
    default:
      cols = 'col-md-1';
  }

  const canonicalUrl = `${article.canonical_url}/?_website=cmg-ms-40020`;

  return (
    <div key={index} className={cols}>
      {linked && (
        <a href={canonicalUrl}>
          <Content api={api} article={article} centered={centered} summary={summary} />
        </a>
      )}

      {!linked && (
        <Content api={api} article={article} centered={centered} summary={summary} />
      )}
    </div>
  );
};

Items.propTypes = {
  api: PropTypes.string,
  index: PropTypes.integer,
  article: PropTypes.object,
  columns: PropTypes.string,
  imagePlacement: PropTypes.string,
  summary: PropTypes.boolean,
  linked: PropTypes.boolean,
  centered: PropTypes.boolean,
};

export default Items;
