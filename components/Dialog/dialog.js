// components/dialog/dialos.js
Component({
  options:{
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {          // 属性名
      type: String,    // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      vlaue: "提示框"  // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    // 弹框内容
    content:{
      type:String,
      vlaue:"点击取消付款"
    },
    // 取消按钮提示文字
    cancleText:{
      type:String,
      value:"返回"
    },
    confirmText:{
      type:String,
      value:"确定"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeShow(){
      console.log('dianji')
      this.setData({
        isShow:!this.data.isShow
      })
    },
    hideDialog(){
      console.log('dianji')
      this.setData({
        isShow: !this.data.isShow
      })
    },
    closeDialog(){
      console.log('dianji')
      this.setData({
        isShow: !this.data.isShow
      })
    }
  }
})
