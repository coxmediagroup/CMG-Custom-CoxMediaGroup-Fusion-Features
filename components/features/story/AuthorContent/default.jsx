/* eslint-disable no-else-return */
import React from 'react';
// import { useComponentContext } from 'fusion:context';

const AuthorContent = () => {
  // const { globalContent } = useComponentContext();

  // const bodyElements = globalContent.content_elements.map((item) => {
  //   if (item.type === 'text') {
  //     return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
  //   } else if (item.type === 'image') {
  //     return <img src={item.url} />;
  //   } else {
  //     return null;
  //   }
  // });

  return <div className='row'>
    <div className='col-7'>
      <div className="lead-image-container">
        <img src="https://www.coxreps.com/rf/image_medium/Pub/Web/CoxReps/Special%20Contents/StaffMembers/Images/AnnHailer.jpg" />
      </div>
    </div>

    <div className='col-5'>
      <h1>Ann Pero Hailer</h1>
      <p className="job-title">Chief Operating Officer</p>
      <p>As Chief Operating Officer, Ann Pero Hailer brings more than 25 years of media experience to driving the ongoing operations and procedures of CoxReps across sales, analytics, technology and business development. She works closely with the EVPs to drive success for CoxReps’ premiere station group clients and provide the most advanced solutions to agencies and advertisers in the local media space. During her time at CoxReps, Ann has worked to foster collaboration and lead strategically to deliver results in the media space. She enjoys working for a company that is advancing and innovating the industry through change, where no matter the role, there is opportunity to be both a mentor and a pupil within the organization. After early-career positions on the station and agency sides of the business, Ann started as an Account Executive at TeleRep in 1997, and has held various leadership roles throughout the organization, most recently SVP, Director of Sales.</p>
      <p>Ann has served as the Chair of CMG’s Diversity &amp; Inclusion advisory council since 2016, where CMG leadership sets goals to insure CMG is driving business results through fostering inclusion and highlighting the diversity of our people, customers, communities, and suppliers. She sits on TVB’s Automotive Task Force and has been a member of the Detroit AdCraft group since 1993, serving on various boards and committees. She is a graduate of the inaugural CMGLP leadership program and holds her IAB Digital Certification.</p>
      <p>Ann graduated from Boston College with a degree in Political Science and lives in Troy, Michigan with her husband Mike and 2 children. She is a huge sports fan, cheering her own children through years of youth sports and following many favored college and professional teams.</p>
    </div>
  </div>;
};

export default AuthorContent;
