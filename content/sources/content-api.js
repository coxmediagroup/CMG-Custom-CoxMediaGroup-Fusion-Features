const resolve = (key = {}) => {
  const { website_url: websiteUrl, "arc-site": arcSite } = key;
  return `/content/v4/?website=${arcSite}&website_url=${websiteUrl}`;
};

export default {
  params: {
    website_url: "text"
  },
  resolve
};
