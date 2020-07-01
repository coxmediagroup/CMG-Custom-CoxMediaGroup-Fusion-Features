import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {
    missionStatement, twitterUrl,
  } = props.customFields;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName('twitter-embed')[0].appendChild(script);
  }, []);

  const date = new Date();
  const fullyear = date.getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6>Our mission</h6>
            <p>{missionStatement}</p>
          </div>
          <div className="col-lg-4 twitter-embed">
            <h6>Twitter feed</h6>
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-tweet-limit="1"
              hide_media="true"
              data-chrome="nofooter noheader noborders transparent"
              href={twitterUrl}
            ></a>
          </div>
          <div className="col-lg-4">
            <h6>Our instagram</h6>
            <script src="//lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
              src="https://lightwidget.com/widgets/2de34fb3382653858015b9dd30228130.html"
              scrolling="no"
              allowTransparency={true}
              className="lightwidget-widget"
              style={{
                width: '100%',
                border: '0px',
                overflow: 'hidden',
                height: '393px',
              }}
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 footer">
            <div>
              <a href="/pf/visitor-agreement/">Visitor Agreement</a> | <a href="/pf/privacy-statement/">Privacy Statement</a>
            </div>
            <p className="footerCopyRight">&#169; {fullyear}&nbsp;CoxReps</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.label = 'Footer';

Footer.propTypes = {
  customFields: PropTypes.shape({
    missionStatement: PropTypes.string.tag({
      label: 'Mission Statement',
    }),
    twitterUrl: PropTypes.string.tag({
      label: 'Twitter URL',
    }),
  }),
};

export default Footer;
