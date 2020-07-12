// pages/classify/classify.js
import classifydata from "../../mock/classify.js"
import fatch from "../../utils/http.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstCategorys: classifydata.firstCategorys,
    secondCategorys: classifydata.secondCategorys,
    threeCategorys: classifydata.threeCategorys,
    fourCategorys: classifydata.fourCategorys,

    params: {
      free: 0,
      finish: 0,
      channelId: 22,
      sortId: ''
    }
  },
 



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fatch("/category/site/6?free=0&finish=0&channelId=&sortId=&page=1&pageSize=10&siteId=6",{
      method:"POST"
    }).then(res=>{
        this.setData({
          innitallData:res.data.bookList   
        })
      console.log(res)
    })
  },

  parentCallBack(e) {
    console.log("传过来的值", e)
    this.setData({
      params:{
        ...this.data.params,
        ...e.detail
      }
    })
    fatch(`/category/site/6?free=${this.data.params.free}&finish=${this.data.params.finish}&channelId=${this.data.params.channelId}&sortId=${this.data.params.sortId}&page=1&pageSize=10&siteId=6`, {
      method: "POST"
    }).then(res => {
      if (res.error_no==200){
           this.setData({
        innitallData: res.data.bookList
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