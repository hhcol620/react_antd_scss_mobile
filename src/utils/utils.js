/**
 * @params : fn 需要防抖执行的方法 wait 足够的空闲时间 immediately 是否立即执行
 * @return :
 * @description : 函数防抖就是在函数需要频繁触发的情况下，只有足够的空闲时间，才执行一次。
 * @date : 2020-10-19 09:32
 * @author : hhcol_JS
 */
/**
 *
 * @param {*} fn
 * @param {*} wait
 * @param {*} immediately
 * use ?  使用的时候首先将对应的参数传入下面方法 将返回的函数放到点击事件内部才能实现防抖效果
 */
export function debounce(fn, wait = 300, immediately) {
  // 防抖
  // wait 默认提供300ms
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    if (!timer && immediately) fn.apply(this, args)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

/**
 * @params : fn 需要节流执行的方法 wait 足够的时间差
 * @return :
 * @description : 一个函数只有在大于执行周期时才执行，周期内调用不执行。好像水滴积攒到一定程度才会触发一次下落一样。
 * @date : 2020-10-19 09:33
 * @author : hhcol_JS
 */

/**
 * - 抢券时疯狂点击，既要限制次数，又要保证先点先发出请求
 * - 窗口调整
 * - 页面滚动
 * - 使用的时候需要先将节流函数执行  并传入相应的参数 需要在点击或者滚动的时间内部调用返回的函数
 */
export function throttle(fn, wait = 300) {
  //节流
  let lastTime = 0
  return function (...args) {
    let nowTime = new Date().getTime()
    if (nowTime - lastTime >= wait) {
      fn.apply(this, args)
      lastTime = nowTime
    }
  }
}

/**
 * @params :
 * @return :
 * @description : 跳转不将地址压入栈  replace
 * @date : 2020-10-20 11:51
 * @author : hhcol_JS
 */
