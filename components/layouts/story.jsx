import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './story.scss';

/**
 * The article right rail layout component
 * */
class Story extends Component {
  /**
   * Renders the article-one-right-rail layout component
   * */
  render() {
    const [header, mainContent, rightRail, footer] = this.props.children;

    return (
      <div className="story-layout">
        <section className="width-full">{header}</section>

        <section className="container width-full">
          <div className="row">
            <div className="col-8 main-content">
              {mainContent}
            </div>

            <div className="col-4 right-rail">
              {rightRail}
            </div>
          </div>
        </section>

        <footer className="width-full">
          {footer}
        </footer>
      </div>
    );
  }
}

Story.propTypes = {
  children: PropTypes.array,
};

Story.sections = ['header', 'main', 'right-rail', 'footer'];

export default Story;
