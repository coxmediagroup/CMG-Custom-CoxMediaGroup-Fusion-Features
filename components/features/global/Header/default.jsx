import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import './default.scss';

const Header = () => {
  const toggleNavbar = () => {
    document.getElementById('navbar').classList.toggle('collapse');
  };

  const content = useContent({
    source: 'navigation-api',
    query: { website: 'cmg-ms-40020' },
  });

  console.log('navigation: ', content)

  return (
    <section className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <div className="logo">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/sandbox.cmg/YDAQIMVRDVA3ZLIUEMXQNOH5GY.png" />
              </div>
            </a>
            <button type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
              onClick={toggleNavbar}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="/our-companies/">Our Companies</a>
              </li>
              <li>
                <a href="/our-leadership/">Our Leadership</a>
              </li>
              <li>
                <a href="/our-opportunities/">Our Opportunities</a>
              </li>
              <li>
                <a href="/watch-and-read/">Watch &amp; Read</a>
              </li>
              <li>
                <a href="/contact-us/">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
};

Header.label = 'Header';

export default Header;
