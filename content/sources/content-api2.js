const resolve = (key = {}) => {
  return `/content/v4/collections?website=${key.website}&_id=${key.id}`;
};
export default {
  params: {
    id: 'text',
  },
  resolve,
  schemaName: 'single-story',
  filter: '',
};
