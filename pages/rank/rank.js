// pages/rank/rank.js
import fetch from "../../utils/http.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigation:[],
    changeIndex:0
  },
  navigationChange(e){
    console.log(e)
  this.setData({
    changeIndex: e.currentTarget.dataset.index

  })
    console.log(this.data.changeIndex)
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch("/ranking?rankType=9&sex=22&pageNo=1&siteId=6&timeLimit=4&group=1&pageSize=10").then(res=>{
      if(res.error_no==200){
        this.setData({
          navigation:res.data.rank
        })
      }
        console.log(res)
    })
    fetch("/ranking?rankType=9&sex=22&pageNo=1&siteId=6&timeLimit=4&group=1&pageSize=10").then(res => {
      if (res.error_no == 200) {
        this.setData({
          navigation: res.data.rank
        })
      }
      console.log(res)
    })


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