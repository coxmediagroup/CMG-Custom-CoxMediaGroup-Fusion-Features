import React from 'react';

const Item = (props) => {
  const { headline, summary } = props;

  const summaryFormatted = summary.split(/[\n\r]+/).map((line) => { return `<p>${line}</p>`; }).join('');

  return (
    <div className="tease item-with-background">
        <h3 className="headline">{headline}</h3>
        <div className="listText">
            <summary dangerouslySetInnerHTML={{ __html: summaryFormatted }}></summary>
        </div>
    </div>
  );
};

export default Item;
