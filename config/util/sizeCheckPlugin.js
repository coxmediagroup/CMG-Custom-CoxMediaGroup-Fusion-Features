// adjusted from https://github.com/HarshwardhanSingh/webpack-bundle-size-check-plugin
const chalk = require("chalk");

class sizeCheckPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.plugin("done", stats => {
      if (!Array.isArray(this.options)) {
        throw new TypeError(
          chalk.red(`Expected an array of configuration options. Necessary fields are: 
          fileName, maxSize (KB). Optional: warningSize (KB).`)
        );
      }
      const { assets } = stats.compilation;
      const assetsName = Object.keys(assets);

      this.options.forEach(assetObj => {
        if (assetsName.indexOf(assetObj.fileName) > -1) {
          const content =
            assets[assetObj.fileName]._cachedSource ||
            assets[assetObj.fileName].children[0]._value;
          const sizeBytes = Buffer.byteLength(content, "utf8");

          // convert sizes to comparable values
          const sizeKB = sizeBytes / 1024; // Kibibytes
          // eslint-disable-next-line no-param-reassign
          assetObj.maxSize /= 1000;
          // eslint-disable-next-line no-param-reassign
          assetObj.warningSize /= 1000;

          if (sizeKB > assetObj.maxSize) {
            const message = `Build Size for ${
              assetObj.fileName
            } exceeded the permitted size. 
            Current size: ${sizeKB.toFixed(
              2
            )} KB but the allowed maxSize is ${assetObj.maxSize.toFixed(2)} KB`;
            throw new Error(chalk.white.bgRed.bold(message));
            // eslint-disable-next-line no-restricted-globals
          } else if (
            !isNaN(assetObj.warningSize) &&
            sizeKB >= assetObj.warningSize
          ) {
            console.error(
              chalk.white.bgRed.bold(`Warning: Bundle size for ${
                assetObj.fileName
              } is reaching towards the maxSize specified.
              Current size: ${sizeKB.toFixed(
                2
              )} KB with the allowed maxSize of ${assetObj.maxSize.toFixed(
                2
              )} KB`)
            );
          }
        }
      });
    });
  }
}

module.exports = sizeCheckPlugin;
