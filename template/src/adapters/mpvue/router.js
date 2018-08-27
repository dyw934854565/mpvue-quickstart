export default {
  go (delta) {
    return wx.navigateBack({delta: Math.abs(delta)}) // eslint-disable-line
  },
  push (url) {
    return wx.navigateTo({ url: `/pages${url}` }) // eslint-disable-line
  },
  replace (url) {
    return wx.redirectTo({ url: `/pages${url}` }) // eslint-disable-line
  }
}
