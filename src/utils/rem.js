;((doc, win) => {
  var docEle = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var relac = function () {
    var clientWidth = docEle.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEle.style.fointSize = '100px'
      win.__remScale = 1
    } else {
      docEle.style.fontSize = 100 * (clientWidth / 750) + 'px'
      win.__remScale = clientWidth / 750
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, relac, false)
  doc.addEventListener('DOMContentLoaded', relac, false)
})(document, window)
