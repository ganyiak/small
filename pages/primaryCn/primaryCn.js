// pages/primaryCn/primaryCn.js
let text = "少年请开始你的表演"
let chinese = require('../../data/primary/chinese.js')
let quesNum = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTime:"",
    text: ['少','年','请','开','始','你','的','表','演','.','.','.'],
    testTime:'06:00',
    timeNum:1,
    proWidth:"0%",
    animationData1:{},
    isShow:true,
    question:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(chinese.chinese)
    this.setData({
      question: chinese.chinese[quesNum]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      transformOrigin: '50% 50% 0'
    })
  },
  // 题目弹出
  landing(){
    this.animation.scale(1,1).step()
    this.setData({
      animationData1: this.animation.export()
    })
  },
  //答案选项动画
  bounce(){
    // this.animation.scale(1.5, 1.5).step()
    // this.animation.scale(1, 1).step()
    this.setData({
      animationData2: this.animation.export()
    })
  },
  selectAnswer(e){
    quesNum++
    console.log(e)
    setTimeout( ()=> {
      this.setData({
        question: chinese.chinese[quesNum]
      })
    },1000)
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let sub = 0;
    let str = ""
    let textTime = setInterval(() => {
      str += this.data.text[sub]
      sub++;
      this.setData({
        showTime: str
      })
      if (sub == this.data.text.length)
      {
        this.startTest()
        this.landing()
        clearInterval(textTime) 
      } 
    },200)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('555')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('66')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  startTest(){
    let intDiff = this.data.timeNum * 60
    let step = 100 / intDiff,
        pro = 0
    let timerDown = setInterval( () =>{
      intDiff--;
      let day = 0,
          hour = 0,
          minute = 0,
          second = 0;//时间默认值
      if (intDiff > 0) {
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
      }
      if (minute <= 9) minute = '0' + minute;
      if (second <= 9) second = '0' + second;
      let timeText = minute + ":"+ second;
      pro += step
      this.setData({
        testTime:timeText,
        proWidth:pro + '%'
      })
      if(intDiff == 0) clearInterval(timerDown)
    }, 1000);
  }
})