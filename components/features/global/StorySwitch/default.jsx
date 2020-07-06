import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Tab from './Tab';

/**
 * Renders the content of a story.
 *
 * Only outputs text nodes for this widget.
 *
 * @param {object[]} contentElements `content_elements` from story
 */
const outputBody = (contentElements) => {
  return contentElements
    .filter((e) => { return e.type === 'text'; })
    .map((e) => { return <p key={e._id} dangerouslySetInnerHTML={{ __html: e.content }}></p >; });
};

/**
 * Display a tabbed interface allowing the user to switch between stories.
 */
const StorySwitch = (props) => {
  const {
    title, description, story1, story2, story3, story4, story5,
  } = props.customFields;
  const [currentStory, setCurrentStory] = useState(null);

  // Filter out the empty story slots and fetch the contents.
  const contents = [story1, story2, story3, story4, story5].filter((s) => { return !!s; }).map((s) => {
    return useContent({
      source: 'content-object-api',
      query: { website: 'cmg-ms-40020', id: s },
    });
  });

  // Default to the first story being selected, if there is one.
  if (!currentStory && contents[0]) {
    setCurrentStory(contents[0]._id);
  }

  return (
    <div className="story-switch">
      {title && <h3 className="story-switch_heading">{title}</h3>}
      {description && <div className="story-switch_description">{description}</div>}

      {/* Tabs */}
      <div className="story-switch_tabs">
        {contents.map((story) => {
          return <Tab key={story._id} caption={story.description.basic}
            imageAlt={story.promo_items.lead_art.alt_text}
            imageURL={story.promo_items.lead_art.url}
            isSelected={story._id === currentStory}
            onClick={() => { setCurrentStory(story._id); }} />;
        })}
      </div>

      {/* Content */}
      {contents.map((story) => {
        return <div key={story._id} className={`story-switch_content
          ${story._id === currentStory ? 'story-switch_content--selected' : ''}`}>
          <h3 className="story-switch_content_heading">{story.description.basic}</h3>
          {outputBody(story.content_elements)}
        </div>;
      })}
    </div>
  );
};

StorySwitch.label = 'Story Switch';

StorySwitch.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string.tag({
      label: 'Title',
    }),
    description: PropTypes.string.tag({
      label: 'Description',
    }),
    story1: PropTypes.string.tag({
      group: 'Stories',
      label: 'Story 1',
    }),
    story2: PropTypes.string.tag({
      group: 'Stories',
      label: 'Story 2',
    }),
    story3: PropTypes.string.tag({
      group: 'Stories',
      label: 'Story 3',
    }),
    story4: PropTypes.string.tag({
      group: 'Stories',
      label: 'Story 4',
    }),
    story5: PropTypes.string.tag({
      group: 'Stories',
      label: 'Story 5',
    }),
  }),
};

export default StorySwitch;
