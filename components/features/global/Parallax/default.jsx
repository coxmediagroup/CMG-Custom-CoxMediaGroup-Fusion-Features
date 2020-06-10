import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Parallax = (props) => {
  const {
    headline, summary, link, newTab, image,
  } = props.customFields;

  const target = newTab ? '_blank' : '_self';

  return <section className="full-width-with-background parallax" style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {link && (
                        <a href={link} target={target}>
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
    headline: PropTypes.string.tag({
      label: 'Headline',
    }),
    summary: PropTypes.richtext.tag({
      label: 'Summary',
    }),
    link: PropTypes.string.tag({
      label: 'Link',
    }),
    newTab: PropTypes.boolean.tag({
      label: 'Open in a new tab',
    }),
    image: PropTypes.string.tag({
      label: 'Image',
    }),
  }),
};

export default Parallax;
