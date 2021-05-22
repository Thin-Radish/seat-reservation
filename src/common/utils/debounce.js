// export default function debounce(func, delay) {   //防抖动函数
//   let timer = null
//   return function (...args) {
//     console.log(555);
//     if (timer) clearInterval(timer)
//     timer = setTimeout(() => {         //演示器里的代码会被延迟到程序空闲时执行
//       func.apply(this, args)
//     }, delay)
//   }
// }

/**
 * 函数防抖
 */
export default function debounce(fn, delay) {
  // 记录上一次的延时器
  var timer = null;
  var delay = delay || 200;
  return function () {
    var args = arguments;
    var that = this;
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(that, args)
    }, delay);
  }
}