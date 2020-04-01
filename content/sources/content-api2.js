const resolve = (key = {}) => {
  return `/content/v4/collections?website=gray&_id=${key.id}`;
};
export default {
  params: {
    id: 'text',
  },
  resolve,
  schemaName: 'single-story',
  filter: '{ content_elements { headlines { basic }}}',
};
