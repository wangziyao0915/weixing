// pages/search/search.js
import fetch from "../../utils/http.js"
import debounce from "../../utils/debounce.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchlist: [],
    everybodyList: [],
    bgColor: ["red", "green", "yellow", "pink"],
    historyData: [],
    historyList: [],
    falg: true,
    pageNom: 1,
    searchValue: ""


  },
  inputEvent: debounce(
    function (e) {
      this.setData({
        searchValue: e.detail.value,
        pageNom: 1
      })
      fetch(`/search?word=${e.detail.value}&pageNo=${this.data.pageNom}&pageSize=10`).then(res => {
        console.log(res)
        if (res.error_no == 200 && res.data.bookList) {
          this.setData({
            searchlist: res.data.bookList,
            falg: false
          })
        }
        if (res.data.bookList == false) {
          this.setData({
            falg: true
          })
        }
      })
      let that = this
      wx.getStorage({
        key: 'histor',
        success(res) {
          that.data.historyData = JSON.parse(res.data)

          let flag = that.data.historyData.find(item => {
            return item == e.detail.value
          })
          if (!flag && e.detail.value != "") {
            that.data.historyData.push(e.detail.value)
          }

          wx.setStorage({
            key: "histor",
            data: JSON.stringify(that.data.historyData)
          })
        },
        fail: function (err) {
          console.log(that)
          that.data.historyData.push(e.detail.value)
          wx.setStorage({
            key: "histor",
            data: JSON.stringify(that.data.historyData)
          })
        }
      })
    }

  ),





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let searchhistory = wx.getStorageSync("histor")
    console.log()
    this.setData({
      historyList: JSON.parse(searchhistory)
    })
    console.log(this.data.historyData)
    fetch("/search/recommend").then(res => {
      this.setData({
        everybodyList: res.data.bookNameArray
      })
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
    this.setData({
      pageNom: this.data.pageNom*1+1
    })
    console.log("加载更多", this.data.pageNom)
    fetch(`/search?word=${this.data.searchValue}&pageNo=${this.data.pageNom}&pageSize=10`).then(res => {
      this.setData({
        searchlist: [...this.data.searchlist, ...res.data.bookList]

      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})