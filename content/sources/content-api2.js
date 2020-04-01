const resolve = (key = {}) => {
  return `/content/v4/collections?website=cmg-ms-40020&_id=${key.id}`;
};
export default {
  params: {
    id: 'text',
  },
  resolve,
  schemaName: 'single-story',
  filter: '',
};
