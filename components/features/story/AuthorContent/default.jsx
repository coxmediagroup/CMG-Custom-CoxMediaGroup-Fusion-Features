/* eslint-disable no-else-return */
import React from 'react';
import { useComponentContext } from 'fusion:context';

const AuthorContent = () => {
  const { globalContent } = useComponentContext();
  let authorData;

  if (globalContent && globalContent.authors.length > 0) {
    authorData = globalContent.authors[0];
  }

  console.log('authorData: ', authorData);

  return <div className='row'>
    <div className='col-7'>
      <div className="lead-image-container">
        <img src={authorData.image} />
      </div>
    </div>

    <div className='col-5'>
      <h1>{authorData.byline}</h1>
      <p className="job-title">{authorData.role}</p>
      {authorData.longBio}
    </div>
  </div>;
};

export default AuthorContent;
