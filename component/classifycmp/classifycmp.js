// component/classify/classify.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      menu:{
        type: String,
        value: ""
      },
     option:{
       type: Array,
       value: []
     },
    catkey:{
      type:String,
      value:""

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    changeIndexfFlay:0,
    triangleflag:true,

   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeOption(e){
      console.log(e.currentTarget.dataset.id)
      this.setData({
        changeIndexfFlay: e.currentTarget.dataset.index

      })
      this.triggerEvent('data',{
        [this.properties.catkey]: e.currentTarget.dataset.id

      })
  



    },
    triangle(){
      this.setData({
        triangleflag:!this.data.triangleflag
      })
    }
  }
})
