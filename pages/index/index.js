//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    schoolList:[
      // { name: '幼儿园', en: 'nursery', linear:"linear-gradient(#fd9f9f,#ff69a6)"},
      { name: '小学', en: 'primary', linear: "linear-gradient(#b760ef,#f47edf)",title:""},
      { name: '中学', en: 'middle', linear: "linear-gradient(#5971f9,#f47edf)"},
      { name: '高中', en: 'high', linear: "linear-gradient(#5775f9,#5dabfd)"},
      { name: '大学', en: 'university', linear: "linear-gradient(#ff72aa,#fc869e)"},
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('222222222')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  selectSchool(e){
    console.log(e.currentTarget.dataset.page)
    let page = e.currentTarget.dataset.page

    wx.navigateTo({
      url: '../' + this.data.schoolList[page].en+'/' + this.data.schoolList[page].en,
    })
  }
})
