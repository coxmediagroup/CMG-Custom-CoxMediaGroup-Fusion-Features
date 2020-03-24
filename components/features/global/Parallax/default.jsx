import React from 'react';
// import PropTypes from 'fusion:prop-types';
import PropTypes from 'prop-types';

const Parallax = (props) => {
  const { headline, summary, link, image } = props.customFields

  return <section className="full-width-with-background" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tease item-with-background ">
                            <h3>
                                <span className="headline ">
                                    <a href={link}>{headline}</a>
                                </span>
                            </h3>
                            <p>
                                <a href={link}></a>
                            </p>
                            <div className="listText">
                                <a href={link}>
                                    <summary>
                                        <p>{summary}</p>
                                    </summary>
                                </a>
                            </div>
                        </div>
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
    // content: PropTypes.contentConfig('single-story').tag({
    //   name: 'Content Source',
    // }),
    // canonicalUrl: PropTypes.string.tag({
    //   name: 'Composer URL',
    // }),
  }),
};

export default Parallax;
