import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import './default.scss';

const Header = (props) => {
  const { logo } = props.customFields;

  const toggleNavbar = () => {
    document.getElementById('navbar').classList.toggle('collapse');
  };

  const content = useContent({
    source: 'navigation-api',
    query: { website: 'cmg-ms-40020' },
  });

  const navigationItems = content && content.children.map((item, index) => {
    if (index > 0) {
      return (
        <li key={index}>
          <a href={item._id} alt={item.name}>{item.name}</a>
        </li>
      );
    }
    return null;
  });

  return (
    <section className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <div className="logo">
                <img src={ logo } alt="Coxreps" />
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
              {navigationItems}
              <li>
                <a href="/contact-us" alt="Contact Us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
};

Header.label = 'Header';

Header.propTypes = {
  customFields: PropTypes.shape({
    logo: PropTypes.string.tag({
      label: 'Logo',
    }),
  }),
};

export default Header;
