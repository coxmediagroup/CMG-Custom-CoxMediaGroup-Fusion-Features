import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName('twitter-embed')[0].appendChild(script);
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Our mission</h6>
            <p>
              CoxReps strives to maximize revenue for client stations and provide value to agency partners. Through cutting-edge research
              and data, a steadfast commitment to our clients, and the immeasurable value of our people, we deliver local smart-media
              solutions that reach audiences on every screen.
            </p>
          </div>
          <div className="col-md-4 twitter-embed">
            <h6>Twitter feed</h6>
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-tweet-limit="1"
              hide_media="true"
              data-chrome="nofooter noheader noborders transparent"
              href="https://twitter.com/coxreps"
            ></a>
          </div>
          <div className="col-md-4">
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
          <div className="col-md-12 footer">
            <div>
              <a href="/pf/visitor-agreement/">Visitor Agreement</a> | <a href="/pf/privacy-statement/">Privacy Statement</a>
            </div>
            <p>© 2020&nbsp;CoxReps</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
