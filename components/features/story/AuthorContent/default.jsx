/* eslint-disable no-else-return */
import React from 'react';
import { useComponentContext } from 'fusion:context';

// const { globalContent } = useComponentContext();

const AuthorContent = () => {
  // eslint-disable-next-line no-console
  console.log('globalContent: ', useComponentContext);

  return <div className='row'>
    <div className='col-7'>
      <div className="lead-image-container">
        <img src="https://www.coxreps.com/rf/image_medium/Pub/Web/CoxReps/Special%20Contents/StaffMembers/Images/AnnHailer.jpg" />
      </div>
    </div>

    <div className='col-5'>
      <h1>Ann Pero Hailer</h1>
      <p className="job-title">Chief Operating Officer</p>
      <p>Text</p>
    </div>
  </div>;
};

export default AuthorContent;
