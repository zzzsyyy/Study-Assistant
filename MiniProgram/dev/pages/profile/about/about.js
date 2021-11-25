import {version, contact} from "../../../utils/config";

Page({
  data: {},
  onLoad() {
    const _version = version;
    console.log(version);
    const _contact = contact;
    this.setData({ _version, _contact });
  },
  setPaste(e) {
    wx.setClipboardData({
      data: e.currentTarget.id == 1 ? this.data._contact.email : this.data._contact.wx_id,
    });
  },
});
