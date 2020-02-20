const path = require('path');
const fs = require('fs-extra');

(async () => {
  const dist = path.resolve(__dirname, '..', 'resources', 'dist');
  await fs.remove(dist);
  console.log('Previous Webpack bundle deleted!');
})();
