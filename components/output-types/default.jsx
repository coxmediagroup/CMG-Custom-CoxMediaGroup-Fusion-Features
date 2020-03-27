import React from 'react';
import PropTypes from 'prop-types';
import getProperties from 'fusion:properties';

const DefaultOutputType = (props) => {
  const {
    arcSite = getProperties().sites[0],
    children,
    contextPath,
    deployment,
    CssLinks,
    Fusion,
    Libs,
    MetaTags,
  } = props;

  return (
    <html>
      <head>
        <title>CoxReps II Article</title>
        <MetaTags />
        <Libs />
        <CssLinks />
        <link
          rel="stylesheet"
          href={deployment(
            `${contextPath}/resources/dist/${arcSite}/css/style.css`,
          )}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={deployment(`${contextPath}/resources/favicon.ico`)}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway"
        />
      </head>
      <body>
        <div id="fusion-app">{children}</div>
        <Fusion />
      </body>
    </html>
  );
};

DefaultOutputType.propTypes = {
  arcSite: PropTypes.string,
  children: PropTypes.node,
  contextPath: PropTypes.string,
  deployment: PropTypes.func,
  CssLinks: PropTypes.object,
  Fusion: PropTypes.func,
  Libs: PropTypes.array,
  MetaTags: PropTypes.object,
};

DefaultOutputType.transform = {
  testio({ context }) {
    return {
      contentType: 'application/json',
      data: {
        tree: context.tree,
        globalContent: context.globalContent,
        renderables: context.props.renderables,
      },
    };
  },
};

export default DefaultOutputType;
