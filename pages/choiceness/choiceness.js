// pages/choiceness/choiced'dness.js
import data from "../../mock/data.js"
import promote from "../../mock/promote.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    bannerlist: data.dataList,
    sectionData: [{ name: "分类", icon: "icon-icon_classify" }, { name: "排行", icon: "icon-dragon" }, { name: "全本", icon: "icon-city" }, { name: "免费", icon: "icon-dragon" }],
    recommend: data.recommend , //主编力荐数据
    bestsellersone: data.bestsellers[0], //本期主打第一项
    bestsellersList: data.bestsellers.slice(1, data.bestsellers.length), //本期主打剩下的
    everybody: data.everybody,
    endBook:data.endBook.slice(0,3)
  },

  optionclick(e) {
    console.log(e.currentTarget.dataset.flag)
    this.setData({
      flag: e.currentTarget.dataset.flag * 1
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.bestsellersList)
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