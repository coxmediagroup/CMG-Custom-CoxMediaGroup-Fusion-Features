import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Author extends Component {
  render() {
    const [header, mainContent, footer] = this.props.children;

    return (
      <div className='author-layout'>
        <section className='width-full'>{header}</section>

        <section className='container width-full'>
          {mainContent}
        </section>

        <footer className='width-full'>
          {footer}
        </footer>
      </div>
    );
  }
}

Author.propTypes = {
  children: PropTypes.array,
};

Author.sections = ['header', 'main', 'footer'];

export default Author;
