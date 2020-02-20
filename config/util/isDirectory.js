const { lstatSync } = require("fs");

// stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
const isDirectory = source => {
  return lstatSync(source).isDirectory();
};

module.exports = {
  isDirectory
};
