// https://github.com/michael-ciniawsky/postcss-load-config

const postcssConfigs = {
  h5: {
    plugins: {
      precss: {},
      autoprefixer: {}
    }
  },
  mpvue: {
    plugins: {
      precss: {},
      'postcss-mpvue-wxss': {}
    }
  }
}

module.exports = postcssConfigs[process.env.BUILD_TO]
