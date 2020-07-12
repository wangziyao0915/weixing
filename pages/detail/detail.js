// pages/detail/detail.js
import fetch from "../../utils/http.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookid:"",
    bookDetail:{}
  },
  addBook(){
    app.globalData.addBookId={
      bookid: this.data.bookid
    }

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.bookid)
  this.setData({
    bookid: options.bookid
  })

    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('goDetallData',  (data)=> {
      console.log("传过来的数据",data)
      this.setData({
        bookid: data 

      })
  
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    fetch(`/books/${this.data.bookid}/detail`).then(res=>{
      console.log("书本数据",res)
      if (res.error_no==200){
        this.setData({
          bookDetail:res.data
        })
      }
    })

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