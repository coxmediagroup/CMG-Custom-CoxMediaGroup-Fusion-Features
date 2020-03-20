import React from 'react';
import PropTypes from 'fusion:prop-types';

const Parallax = (props) => {
  const text = 'Parallax People';
  return <section className="full-width-with-background" style={{backgroundImage: "url(http://www.coxreps.com/rf/image/Pub/Web/CoxReps/Special%20Contents/Links/Images/ourlocations.jpg)"}}>
            {/* the background image will come from the custom field */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tease item-with-background ">
                            <h3>
                                <span className="headline ">
                                    {/* the headline and link will come from the custom field */}
                                    <a href="/contact-us/" target="_self">Our Locations</a>
                                </span>
                            </h3>
                            <p>
                                <a href="/contact-us/" target="_self"></a>
                            </p>
                            <div className="listText">
                                {/* the link will come from the custom field */}
                                <a href="/contact-us/" target="_self">
                                    {/* the summary will come from the custom field - make sure to accomodate for html in the field */}
                                    <summary>
                                        <p className="p">Headquartered in New York City, CoxReps is located in the heart of Midtown Manhattan,</p>
                                        <p>at historic 1 Dag Hammarskjold Plaza. CoxReps regional offices are located in the most exciting cities across the country.</p>
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
    // content: PropTypes.contentConfig('single-story').tag({
    //   name: 'Content Source',
    // }),
    // canonicalUrl: PropTypes.string.tag({
    //   name: 'Composer URL',
    // }),
  }),
};

export default Parallax;
