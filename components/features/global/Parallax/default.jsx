import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Parallax = (props) => {
  const {
    headline, summary, link, image,
  } = props.customFields;

  return <section className="full-width-with-background parallax" style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {link && (
                        <a href={link}>
                            <Item headline={headline} summary={summary} />
                        </a>
                    )}
                    {!link && (
                        <Item headline={headline} summary={summary} />
                    )}
                </div>
            </div>
        </div>
    </section>;
};

Parallax.propTypes = {
  customFields: PropTypes.shape({
    headline: PropTypes.string,
    summary: PropTypes.richtext,
    link: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Parallax;
