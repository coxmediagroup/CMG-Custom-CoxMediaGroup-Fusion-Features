// Native Node modules.
const path = require("path");

const baseDir = path.resolve(__dirname, "..");

module.exports = {
  base: baseDir,
  components: path.resolve(baseDir, "components"),
  chains: path.resolve(baseDir, "components", "chains"),
  config: path.resolve(baseDir, "config"),
  docs: path.resolve(baseDir, "docs"),
  dist: path.resolve(baseDir, "resources", "dist"),
  features: path.resolve(baseDir, "components", "features"),
  fonts: path.resolve(baseDir, "resources", "fonts"),
  images: path.resolve(baseDir, "resources", "images"),
  layouts: path.resolve(baseDir, "components", "layouts"),
  outputTypes: path.resolve(baseDir, "components", "output-types"),
  reports: path.resolve(baseDir, "reports"),
  resources: path.resolve(baseDir, "resources")
};
