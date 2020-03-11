import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * The article right rail layout component
 * */
class Basic extends Component {
  /**
   * Renders the article-one-right-rail layout component
   * */
  render() {
    const [header, mainContent, rightRail, footer] = this.props.children;

    return (
      <div className="basic-layout">
        <section className="width-full">{header}</section>

        <section className="width-full">
          <div className="main-content">
            {mainContent}
          </div>

          <div className="right-rail">
            {rightRail}
          </div>
        </section>

        <footer className="width-full">
          {footer}
        </footer>
      </div>
    );
  }
}

Basic.propTypes = {
  children: PropTypes.array,
};

Basic.sections = ['header', 'main', 'right-rail', 'footer'];

export default Basic;
