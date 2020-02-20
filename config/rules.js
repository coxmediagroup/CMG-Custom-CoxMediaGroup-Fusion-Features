// extended sass importer
const globImporter = require("node-sass-glob-importer");

// Configurations
const paths = require("./paths");
const autoprefixer = require("autoprefixer");

// webpack plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// linter fix based on input
const parseCliArgs = require("./util/parseCliArgs");

const cliArgs = parseCliArgs(JSON.parse(process.env.npm_config_argv));

module.exports = env => {
  return [
    {
      test: /\.jsx?$/,
      enforce: "pre",
      exclude: [/node_modules/],
      use: [
        {
          loader: "eslint-loader",
          options: {
            configFile: "/config/linters/.eslintrc.js",
            fix: cliArgs && cliArgs.includes("eslint-fix")
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: paths.dist
          }
        },
        {
          loader: "css-loader"
        },
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [autoprefixer, require("css-mqpacker")({ sort: true })]
          }
        },
        {
          loader: "resolve-url-loader",
          options: {}
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            importer: globImporter(),
            outputStyle: env.prod ? "compressed" : "expanded"
          }
        }
      ]
    },
    {
      test: /\.(ttf|eot|svg|woff(2?))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      exclude: [/images/],
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            publicPath: "/pf/resources/dist/fonts",
            name: "[name].[ext]"
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "images",
            publicPath: "/pf/resources/dist/images",
            name: "[name].[ext]"
          }
        }
      ]
    }
  ];
};
