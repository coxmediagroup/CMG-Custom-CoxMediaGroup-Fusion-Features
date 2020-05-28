import React from 'react';
import './default.scss';

const Header = () => {
  const toggleNavbar = () => {
    document.getElementById('navbar').classList.toggle('collapse');
  };

  return (
    <section className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="//www.coxreps.com/">
              <div className="logo">
                <img src="https://www.coxreps.com/rw/PortalConfig/coxreps/assets/images/logo.png" />
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
                <a href="//www.coxreps.com/our-companies/">Our Companies</a>
              </li>
              <li>
                <a href="//www.coxreps.com/our-leadership/">Our Leadership</a>
              </li>
              <li>
                <a href="//www.coxreps.com/our-opportunities/">Our Opportunities</a>
              </li>
              <li>
                <a href="//www.coxreps.com/watch-and-read/">Watch &amp; Read</a>
              </li>
              <li>
                <a href="//www.coxreps.com/contact-us/">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default Header;
