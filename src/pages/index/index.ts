import { createPage } from '@mpxjs/core'
import { navTo } from '../../utils/common'

createPage({
  data: {
    keyword: ''
  },
  onChange: function (e: any) {
    this.keyword=e.detail
  },
  onClick: function () {
    var keyword = this.data.keyword;
    if (keyword.trim()) {//输入合法性判断 
      navTo({page: 'searchEntry', args: `?keyword=${keyword}`});
    } else {
      this.setData!({keyword: ''})
    }
  },
  onShow () {
    this.setData!({keyword: ''})
  }
})
