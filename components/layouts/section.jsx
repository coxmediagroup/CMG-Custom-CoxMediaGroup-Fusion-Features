import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * The section layout component
 * */
class Section extends Component {
  /**
   * Renders the section layout component
   * */
  render() {
    const [header, full01, body01, full02, body02, full03, body03, full04, footer] = this.props.children;

    return (
      <div className="section-layout">

        <section>
          <div className="row header">
            <div className="col">
              {header}
            </div>
          </div>
        </section>

        <section>
          <div className="row main-content">
            <div className="col">
              {full01}
            </div>
          </div>
        </section>

        <section className="container body-width">
          <div className="row main-content">
            <div className="col">
              {body01}
            </div>
          </div>
        </section>

        <section>
          <div className="row main-content">
            <div className="col">
              {full02}
            </div>
          </div>
        </section>

        <section className="container body-width">
          <div className="row main-content">
            <div className="col">
              {body02}
            </div>
          </div>
        </section>

        <section>
          <div className="row main-content">
            <div className="col">
              {full03}
            </div>
          </div>
        </section>

        <section className="container body-width">
          <div className="row main-content">
            <div className="col">
              {body03}
            </div>
          </div>
        </section>

        <section>
          <div className="row main-content">
            <div className="col">
              {full04}
            </div>
          </div>
        </section>

        <footer className="container-fluid footer">
          <div className="row">
            <div className="col">
              {footer}
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

Section.propTypes = {
  children: PropTypes.array,
};

Section.sections = ['header', 'full01', 'body01', 'full02', 'body02', 'full03', 'body03', 'full04', 'footer'];

export default Section;
