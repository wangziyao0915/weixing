let arrTranstion = function(arr,n){

let len =arr.length
let res=[]
  for (let i = 0; i < len/n;i++){
let temp=arr.slice(i*n,i*n+n)

    res.push(temp);

}
  return res

}
export default arrTranstion