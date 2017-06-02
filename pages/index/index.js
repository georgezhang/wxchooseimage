//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      uploadimage: null,
  },
  //事件处理函数
  bindChooseImage: function() {
      var that = this
      wx.chooseImage({
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
              var tempFilePaths = res.tempFilePaths
              that.setData({
                  uploadimage: tempFilePaths[0]
              })
          }
      })
  },
  onLoad: function () {
  }
})
