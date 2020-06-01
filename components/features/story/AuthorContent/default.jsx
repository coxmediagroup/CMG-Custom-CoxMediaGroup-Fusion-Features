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

  const bioFormatted = authorData.longBio.split("/n").map(line => `<p>${line}</p>`).join() 

  return <div className='row'>
    <div className='col-md-7'>
      <div className="lead-image-container">
        <div className='lead-image'>
          <img src={authorData.image} />
        </div>
      </div>
    </div>

    <div className='col-md-5'>
      <h1>{authorData.byline}</h1>
      <p className="job-title">{authorData.role}</p>
      <div className='author-content'>

          {bioFormatted}

        
      </div>
    </div>
  </div>;
};

export default AuthorContent;
