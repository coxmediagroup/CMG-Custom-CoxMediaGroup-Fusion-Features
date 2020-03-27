import React, { Component } from 'react';
import PropTypes from "fusion:prop-types";
import { useComponentContext } from "fusion:context";
import { useContent } from "fusion:content";
import './story.scss';

const Story = () => {
  // console.log("props: ", props);

  const { globalContent } = useComponentContext();
  const content = useContent({
    source: 'content-api',
    query:  { website_url: '/home/kim-guthrie-quintessential-team-player/INTAVEXPUVCRDN5WKGEJB4EXFI/' },
    filter: '',
  });

  console.log("content:", content);

  const bodyElements = content.content_elements.map(item => {
    if (item.type === "text"){
      return <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
    } else if (item.type === "image") {
      return <img src={item.url} />;
    }
  });

    // const [header, mainContent, rightRail, footer] = this.props.children;

    return (
      <div className="story-layout">
        <section className="width-full">header</section>

        <section className="container">
            <div className="row">

                <div className="col-sm-8 main-content">
                  <h1>{content.headlines.basic}</h1>
                  <p>
                    <strong>Published: </strong>{ content.last_updated_date }<br />
                    {/* is there at least one credit */}
                    {content.credits.by.length > 0 && (
                      <span className="bylines">
                          <strong>By: </strong>
                      </span>
                    )}
                  </p>
                  <div className="lead-image-container">
                    <img src={ content.promo_items.lead_art.url } alt={ content.promo_items.lead_art.alt_text } alt={ content.promo_items.lead_art.alt_text } />
                  </div>
                  {bodyElements}
                </div>

                <div className="col-sm-4 right-rail-content">
                    <h4>More Stories</h4>
                    <ul className="list-unstyled">
                      <li>
                        <h3>
                            <span className="">
                              <a href="http://www.coxreps.com/news/kim-guthrie-quintessential-team-player/a0Jq4Gksk1blESPbpd5kuK/" target="_self">
                              Kim Guthrie: Quintessential Team Player</a>
                              </span>
                              <span class="timeStamp">
                            </span>
                        </h3>
                      </li>
                    </ul>
                </div>

            </div>
        </section>

        <footer className="width-full">
          {/* {footer} */}
        </footer>
      </div>
    );
//   }
}

Story.propTypes = {
    customFields: PropTypes.shape({
        contentConfig: PropTypes.contentConfig('ansstory').tag({
        group: 'Data Configuration',
        name: 'Content Source',
        }),
    }),
}

Story.sections = ['header', 'main', 'right-rail', 'footer'];

export default Story;
