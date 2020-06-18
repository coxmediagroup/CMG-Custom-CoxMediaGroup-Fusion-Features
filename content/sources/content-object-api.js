const resolve = (key = {}) => {
  if ((key.id).includes('/')) {
    return `/content/v4/?website=${key.website}&website_url=${key.id}`;
  }

  return `/content/v4/?website=${key.website}&_id=${key.id}`;
  // if you don't pass an api to search, it will search them all
};

export default {
  params: {
    id: 'text',
  },
  resolve,
  schemaName: '',
  filter: '',
};
