// pages/read/read.js
import fetch from "../../utils/http.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catalog:[],
    fistCatalog:"",
    content:[],
    name:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    fetch(`/books/${options.bookid}/chapters`).then(res=>{
      console.log(res.data.data[1].id)
      this.setData({
        catalog:res.data.data,
        fistCatalog: res.data.data[1].id
      })
      fetch(`/chapters/${this.data.fistCatalog}`).then(res => {
        let content = res.data.content.split('<br/>')

        this.setData({
          content: content,
          name: res.data.name
        })
      })

    })
    

    console.log(this.data.fistCatalog)



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})