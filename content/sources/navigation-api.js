const resolve = (key = {}) => {
  const { website } = key;
  return `/site/v3/navigation/${website}/`;
};

export default {
  params: {
    site: 'text',
  },
  resolve,
};
