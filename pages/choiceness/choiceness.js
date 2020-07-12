// pages/choiceness/choiced'dness.js
import data from "../../mock/data.js"
import promote from "../../mock/promote.js"
import girlData from "../../mock/girldata.js"
import arrTranstion from "../../utils/arrTranstion.js"
import fetch from "../../utils/http.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    bannerlist: data.dataList,
    sectionData: [{ name: "分类", icon: "icon-icon_classify" }, { name: "排行", icon: "icon-dragon" }, { name: "全本", icon: "icon-city" }, { name: "免费", icon: "icon-dragon" }],
    recommend: arrTranstion(data.recommend,3)      , //主编力荐数据
    bestsellersone: data.bestsellers[0], //本期主打第一项
    bestsellersList: data.bestsellers.slice(1, data.bestsellers.length), //本期主打剩下的
    everybody: data.everybody,
    endBook:data.endBook.slice(0,3),
    indexChangeFlag:0,
    brand:{}

  },

  optionclick(e) {
    console.log(e.currentTarget.dataset.flag)
    this.setData({
      flag: e.currentTarget.dataset.flag * 1
    })

    if (e.currentTarget.dataset.flag==1){
      this.setData({
        bannerlist:girlData.dataList,
        recommend: arrTranstion(girlData.recommend, 3)     , //主编力荐数据
        bestsellersone: girlData.bestsellers[0], //本期主打第一项
        bestsellersList: girlData.bestsellers.slice(1, data.bestsellers.length), //本期主打剩下的
        everybody: girlData.everybody,
        endBook: girlData.endBook.slice(0, 3)
      })

    }else{
      this.setData({
        bannerlist: data.dataList,
        recommend: arrTranstion(data.recommend,3), //主编力荐数据
        bestsellersone: data.bestsellers[0], //本期主打第一项
        bestsellersList: data.bestsellers.slice(1, data.bestsellers.length), //本期主打剩下的
        everybody: data.everybody,
        endBook: data.endBook.slice(0, 3)
      })


    }
  },
  goDetail(e){
    
    console.log(e.currentTarget.dataset.bookid)
    wx.navigateTo({
      url:"../detail/detail",
      success:function(res){
        res.eventChannel.emit("goDetallData", e.currentTarget.dataset.bookid)
      }
    })


  },


  sweiperbind(e){
    this.setData({
      indexChangeFlag: e.detail.current
    })
   
  },
  onsearch(){
    wx.navigateTo({
      url: "../search/search"
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // wx.showLoading({
    //   title: '努力奔跑中',
 
    // })
    console.log(fetch)
    fetch('/h5/sites',{
      body:"789"
    }).then(res=>{
      console.log(res)
      this.setData({
        brand:res.items
      })
    })
  },

  storeClick(e){
    if (e.currentTarget.dataset.index==0){
      wx.navigateTo({
        url:"../classify/classify"
      })
    } else if (e.currentTarget.dataset.index == 1){
      wx.navigateTo({
        url: "../rank/rank"
      })

    }

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