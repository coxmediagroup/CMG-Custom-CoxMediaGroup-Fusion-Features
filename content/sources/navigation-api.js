const resolve = (key = {}) => {
  const { website } = key;
  return `/navigation/${website}/`;
};

export default {
  params: {
    site: 'text',
  },
  resolve,
};
