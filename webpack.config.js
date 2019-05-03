const CleanWebpackPlugin = require(`clean-webpack-plugin`)
const path = require(`path`)

const commonPublicPath = `/dist/`
const vendorsBundleName = `vendors`

module.exports = {
  entry: {
    extendableCardDemo: [`@babel/polyfill`, `./html/ExtendableCardDemo.js`],
    animalSpeciesSummary: [`@babel/polyfill`, `./html/AnimalSpeciesSummary.js`],
    experimentsPanelDemo: [`@babel/polyfill`, `./html/ExperimentsPanelDemo.js`],
    responsiveCardsRowDemo: [`@babel/polyfill`, `./html/ResponsiveCardsRowWithExtCardsDemo.js`]
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: `dist`
    })
  ],

  output: {
    library: `[name]`,
    path: path.resolve(__dirname, `dist`),
    filename: `[name].bundle.js`,
    publicPath: `/html/`
  },
  optimization: {
    runtimeChunk: {
       name: vendorsBundleName
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: vendorsBundleName,
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules\//,
        use: `babel-loader`
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      }
    ]
  },

  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, `html`),
    publicPath: commonPublicPath
  }
}
