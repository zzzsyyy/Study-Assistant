Page({
  data: {

  },
  onAbout(){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  onFav(){
    wx.navigateTo({
      url: '../favorites/favorites',
    })
  },
  onIndex(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  onProfile(){
    wx.switchTab({
      url: '../profile/profile',
    })
  },
  onVocdetail(){
    wx.navigateTo({
      url: '../vocdetail/vocdetail',
    })
  },
  onVocsearch(){
    wx.navigateTo({
      url: '../vocsearch/vocsearch',
    })
  },
  onWelcome(){
    wx.navigateTo({
      url: '../welcome/welcome',
    })
  },
  onVocedit(){
    wx.navigateTo({
      url: '../vocedit/vocedit',
    })
  },
  onDetail_debug(){
    wx.navigateTo({
      url: '../detail_debug/detail_debug',
    })
  }
});