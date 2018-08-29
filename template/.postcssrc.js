// https://github.com/michael-ciniawsky/postcss-load-config

const postcssConfigs = {
  h5: {
    plugins: {
      autoprefixer: {}
    }
  },
  mpvue: {
    plugins: {
      'postcss-mpvue-wxss': {}
    }
  }
}

module.exports = postcssConfigs[process.env.BUILDTO]
