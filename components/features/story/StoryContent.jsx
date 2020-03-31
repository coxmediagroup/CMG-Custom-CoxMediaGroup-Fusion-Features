/* eslint-disable no-else-return */
import React from "react";

const StoryContent = (props) => {
  return <div className="base-test">
    <h1>Headline</h1>
    <p>
      <strong>Published: </strong>last_updated_date<br />
      {/* is there at least one credit */}
      <span className="bylines">
          <strong>By: </strong>
      </span>
    </p>
    <div className="lead-image-container">
      {/* <img src={ content.promo_items.lead_art.url } alt={ content.promo_items.lead_art.alt_text } alt={ content.promo_items.lead_art.alt_text } /> */}
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus urna, sagittis non egestas eu, vulputate eget lorem. Donec efficitur faucibus hendrerit. Fusce et commodo lectus. Vestibulum eu eleifend nisl. Curabitur mi elit, vulputate ut libero quis, imperdiet tempor velit. Nam consequat tristique erat. Fusce facilisis lorem at tincidunt mollis.</p>
    <p>Cras sollicitudin libero id bibendum semper. Mauris fringilla cursus libero, nec consectetur quam ullamcorper tincidunt. Morbi eget porta purus. Pellentesque hendrerit, ex non facilisis malesuada, orci nisi tristique nunc, at rhoncus nisi elit sit amet quam. Praesent ultrices ex sit amet consectetur varius. Nulla a mi dapibus, consectetur nisl at, facilisis libero. Nullam tempus pretium volutpat.</p>
    <p>Mauris dapibus, justo eget mattis ultrices, nisl diam dapibus enim, eget rhoncus erat lorem a arcu. Quisque euismod nibh est, at tristique dui hendrerit vitae. Aenean interdum sem lacus, at tristique nibh lacinia at. Ut in lobortis metus. Proin nec quam id sem aliquet porttitor. Aliquam vel massa pretium, venenatis purus quis, laoreet dolor. Fusce rutrum vulputate arcu nec iaculis. Praesent ullamcorper massa ut finibus facilisis. Nullam accumsan porta diam, vitae aliquet mauris laoreet et. Phasellus pharetra tellus ut nibh bibendum laoreet. Fusce vel quam magna. Nunc consequat varius eros, in ultrices sem rutrum vitae.</p>
    <p>Mauris accumsan magna elit, a feugiat arcu consequat in. Suspendisse potenti. Nullam sed odio ac tellus rhoncus eleifend ut in leo. Nullam sodales justo vitae magna aliquet, sed lobortis sapien imperdiet. Mauris ultrices lacinia lectus vel laoreet. Nullam varius pretium arcu ut efficitur. Proin quis mauris purus. In aliquam in eros a faucibus. Fusce sodales nunc lacus, nec scelerisque nibh gravida a.</p>
    <p>Nam placerat faucibus volutpat. Nulla placerat odio ut ipsum ultrices euismod sed eu enim. Quisque posuere fermentum lectus, sit amet pellentesque justo cursus sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In porta eu dolor id condimentum. Phasellus et viverra purus, ut blandit purus. Nulla commodo fringilla nulla et interdum. Sed vehicula mi eu felis porta pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet vestibulum lorem. Praesent vitae tempor arcu, quis sollicitudin erat. Donec tincidunt non ante sed aliquet.</p>
  </div>;
};

export default StoryContent;