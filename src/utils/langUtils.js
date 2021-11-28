import zh from "../i18n/zh-CN.js";
import en from "../i18n/en-US.js";
// import Constants from '../constants/Constants';

export default {
  initLang() {
    let lang = wx.getStorageSync("lang");
    if (!lang) {
      this.setLang('zh_CN');
    }
  },
  setLang(lang) {
    try {
      wx.setStorageSync("lang", lang);
    } catch (e) {
      console.log("设置语言失败", e);
    }
  },
  getLang() {
    try {
      let lang = wx.getStorageSync("lang");
      return lang;
    } catch (e) {
      console.log("获取语言设置失败", e);
    }
  },
  getLangSrc() {
    let lang = this.getLang();
    return lang || 'zh_CN'
  },
  setNavigationBarTitle(title) {
    wx.setNavigationBarTitle({
      title: title,
    });
  },
  /**
   * 设置 tabBar。因为 tabBar 是在 app.json 里写死的，需要使用 wx.setTabBarItem
   * 循环设置 tabBar
   */
  setTabBarLang() {
    let tabBarTitles = this.getLangSrc().tabBarTitles;
    console.log("tabBarTitles", tabBarTitles);
    tabBarTitles.forEach((item, index) => {
      console.log(item, index);
      wx.setTabBarItem({
        index: index,
        text: item,
        success: (res) => {
          console.log("setTabBarItem success", res);
        },
        fail: (err) => {
          console.log("setTabBarItem fail", err);
        },
      });
    });
  },
};
