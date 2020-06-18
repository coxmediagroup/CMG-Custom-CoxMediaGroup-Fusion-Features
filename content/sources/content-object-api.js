const resolve = (key = {}) => {
  return `/content/v4/${key.api}?website=${key.website}&_id=${key.id}`;
};
export default {
  params: {
    id: 'text',
  },
  resolve,
  schemaName: '',
  filter: '',
};
