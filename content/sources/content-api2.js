const resolve = (key = {}) => {
  return `/content/v4/collections?website=${key.website}&_id=${key.id}`;
};
export default {
  params: {
    id: 'text',
  },
  resolve,
  schemaName: 'single-story',
  filter: '{ content_elements { headlines { basic }, canonical_url, promo_items { lead_art { additional_properties }}}}',
};
