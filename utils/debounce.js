const debounce = (callback,time=1000) => {
  let timer = null;
  return function (data){
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.call(this,data)
    }, time)

  }
}
export default debounce