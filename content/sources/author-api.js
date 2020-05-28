const resolve = (key = {}) => {
  const { slug } = key;
  return `/author/v2/author-service/?slug=${slug}/`;
};

export default {
  params: {
    slug: 'text',
  },
  resolve,
};
