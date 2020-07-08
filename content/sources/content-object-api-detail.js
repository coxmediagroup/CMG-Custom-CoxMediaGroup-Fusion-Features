const resolve = (key = {}) => {
  const { id, website } = key;

  if ((id).includes('/')) {
    return `/content/v4/?website=${website}&website_url=${id}`;
  }

  return `/content/v4/?website=${website}&_id=${id}`;
  // if you don't pass an api to search, it will search them all
};

export default {
  params: {
    id: 'text',
  },
  resolve,
  schemaName: '',
  // filter: '{ _id }',
};
