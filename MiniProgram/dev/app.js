//app.js
App({
    towxml:require('/utils/towxml/index'),
    onLaunch(){
        wx.setStorageSync('lang', 'zh_CN')
    }
});
