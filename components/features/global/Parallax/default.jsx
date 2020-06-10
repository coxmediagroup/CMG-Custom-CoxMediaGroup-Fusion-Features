import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Parallax = (props) => {
  const {
    Headline, Summary, Link, newWindow, Image,
  } = props.customFields;

  const target = newWindow ? '_blank' : '_self';

  return <section className="full-width-with-background parallax" style={{ backgroundImage: `url(${Image})` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {Link && (
                        <a href={Link} target={target}>
                            <Item headline={Headline} summary={Summary} />
                        </a>
                    )}
                    {!Link && (
                        <Item headline={Headline} summary={Summary} />
                    )}
                </div>
            </div>
        </div>
    </section>;
};

Parallax.propTypes = {
  customFields: PropTypes.shape({
    Headline: PropTypes.string,
    Summary: PropTypes.richtext,
    Link: PropTypes.string,
    newWindow: PropTypes.boolean,
    Image: PropTypes.string,
  }),
};

export default Parallax;
