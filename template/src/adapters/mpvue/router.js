export default {
  go (url) {
    if (url <= -1) {
      return wx.navigateBack({delta: Math.abs(url)}) // eslint-disable-line
    }
  },
  push (url) {
    return wx.navigateTo({ url: `/pages${url}` }) // eslint-disable-line
  },
  replace (url) {
    return wx.redirectTo({ url: `/pages${url}` }) // eslint-disable-line
  }
}
