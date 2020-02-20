// Configurations
const paths = require("./paths");
const rules = require("./rules");
const entries = require("./entries");
const plugins = require("./plugins");

// Configuration
module.exports = env => {
  return {
    module: {
      rules: rules(env)
    },
    devtool: env.prod ? "none" : "source-map",
    context: paths.base,
    mode: "none",
    entry: entries,
    output: {
      path: paths.dist,
      filename: "[name]/js/index.js"
    },
    plugins: plugins(env, entries)
  };
};
