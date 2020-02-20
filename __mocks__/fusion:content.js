/**
 * Global mock for a fusion:content when running
 * unit tests of anything using a Content HOC.
 *
 * In order to use this mock you must do
 * `import Content from 'fusion:content';`
 * at the top of your unit test file, this will
 * trigger jest to mock the Content import below
 * */
jest.mock("fusion:content", component => {
  return function(component) {
    class element extends component {
      constructor(props) {
        super(props);
        this.props = props;
      }
    }

    return element;
  };
});
