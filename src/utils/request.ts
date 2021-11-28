const request=(params: WechatMiniprogram.RequestOption)=>{
    const baseUrl = "https://amourestunart.asia";
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          url: baseUrl + params.url,
          success:(result)=>{
              resolve(result);
          },
          fail:(err)=>{
              reject(err);
          }
        });
    })
};
