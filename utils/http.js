const baseUrl ="https://app2.motie.com"
function fetch(url,option={}){
 return new Promise((resolve,reject)=>{
    wx.request({
      url:baseUrl+url,
      data:option.body,
      header:option.header,
      timeout:option.timeout || 3000,
      method:option.method || "GET",
      success(res){
            console.log(res)
        if (res.statusCode===200){
          resolve(res.data)
          }
      },
      fail(err){
        reject(err)

      },
      complete(){

      }
      




    })
  })


}
export default fetch