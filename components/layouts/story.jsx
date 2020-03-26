import React, { Component } from 'react';

// import PropTypes from 'prop-types';
import PropTypes from "fusion:prop-types";
import { useComponentContext } from "fusion:context";
import { useContent } from "fusion:content";

import './story.scss';

const Story = (props) => {
  console.log("props: ", props);

  const { globalContent } = useComponentContext();
  const content = useContent({
    source: 'content-api',
    query:  { website_url: '/home/kim-guthrie-quintessential-team-player/INTAVEXPUVCRDN5WKGEJB4EXFI/' },
    filter: '',
  });
  console.log("api response:", content);

    // const [header, mainContent, rightRail, footer] = this.props.children;
    

    return (
      <div className="story-layout">
        <section className="width-full">header</section>

        <section className="container">
            <div className="row">
                <div className="col-sm-8 main-content">
                    <h1>Main Content</h1>
                    {/* {StoryContent} */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis tortor lacus, eget commodo justo tristique non. Morbi vel ipsum et nibh ultricies vulputate sed ac risus. Aenean velit quam, laoreet et ornare nec, posuere at enim. Curabitur luctus nunc at lacus faucibus molestie. Vivamus nec leo felis. Morbi aliquet metus vitae maximus elementum. Aliquam sapien enim, sollicitudin eget tempus eu, dignissim ac nisl. Aliquam id ex vel lacus vulputate dictum eu at lorem. Ut ullamcorper id dui et commodo. Vivamus vel commodo orci, vel convallis tellus. Curabitur suscipit convallis ligula a dapibus. Ut blandit dui leo.</p>
                    {/* {mainContent} */}
                </div>

                <div className="col-sm-4 right-rail">
                    <h1>Right Rail</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis tortor lacus, eget commodo justo tristique non. Morbi vel ipsum et nibh ultricies vulputate sed ac risus. Aenean velit quam, laoreet et ornare nec, posuere at enim. Curabitur luctus nunc at lacus faucibus molestie. Vivamus nec leo felis. Morbi aliquet metus vitae maximus elementum. Aliquam sapien enim, sollicitudin eget tempus eu, dignissim ac nisl. Aliquam id ex vel lacus vulputate dictum eu at lorem. Ut ullamcorper id dui et commodo. Vivamus vel commodo orci, vel convallis tellus. Curabitur suscipit convallis ligula a dapibus. Ut blandit dui leo.</p>
                    {/* {rightRail} */}
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

// Story.propTypes = {
//     children: PropTypes.array,
//     customFields: PropTypes.shape({
//         contentConfig: PropTypes.contentConfig('ansstory').tag({
//         group: 'Data Configuration',
//         name: 'Content Source',
//         }),
//     }),
// };

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
