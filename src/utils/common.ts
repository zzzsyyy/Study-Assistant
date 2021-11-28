import { pages } from "types/config";

const navTo = (params: {page: string, args?: string}, success_callback?: any, fail_callback?: any) => {
  let page = params.page;
  let args = params.args || "";
  let s_callback = success_callback || null;
  let f_callback = fail_callback || null;
  if (page != "index" && page != "profile") {
    wx.navigateTo({
      url: pages[page] + args,
      success(res) {
        if (typeof s_callback === "function") {
          s_callback(res);
        }
      },
      fail(err) {
        if (typeof f_callback === "function") {
          f_callback(err);
        }
      },
    });
  } else {
    wx.switchTab({
      url: pages[page] + args,
      success(res) {
        if (typeof s_callback === "function") {
          s_callback(res);
        }
      },
      fail(err) {
        if (typeof f_callback === "function") {
          f_callback(err);
        }
      },
    });
  }
};
const convertUserInfo = (userInfo: UserInfo) => {
  let userinfo: userinfo = {};
  userinfo.avatar_url = userInfo.avatarUrl;
  userinfo.nick_name = userInfo.nickName;
  userinfo.city = userInfo.city;
  userinfo.country = userInfo.country;
  userinfo.gender = userInfo.gender;
  userinfo.language = userInfo.language;
  userinfo.province = userInfo.province;
  return userinfo;
};

const convertDetail = (detail: Detail) => {
  let edDetail: detail = {};
  edDetail.title = detail.title;
  edDetail.content = detail.content;
  edDetail.proof = detail.proof;
  edDetail.remark = detail.remark;
  edDetail.example = detail.example;
  edDetail.source = detail.source;
  edDetail.chinese = detail.chinese;
  return edDetail;
};

