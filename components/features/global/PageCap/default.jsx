import React from 'react';
import PropTypes from 'prop-types';

const PageCap = (props) => {
  const { pagename } = props.customFields;

  return <div className="page-cap">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                  <h2>{ pagename }</h2>
                </div>
                <div className="col-sm-6">
                  <p className="pull-right">We are smart media</p>
                </div>
            </div>
        </div>
    </div>;
};

PageCap.propTypes = {
  customFields: PropTypes.shape({
    pagename: PropTypes.string,
  }),
};

export default PageCap;