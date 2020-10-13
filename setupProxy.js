const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/index', {
      target: 'https://baidu.com',
      changeOrigin: true //  是否跨域
      // headers: {
      //   Host: '',    //   目标地址域名
      //   Origin: '',  //   源地址
      //   Referer: ''  //   来源地址
      // }
    })
  )
  // 这里可以写多个app.use  用来匹配多个接口基地址
  // app.use(
  //   createProxyMiddleware('/index', {
  //     target: 'https://baidu.com',
  //     changeOrigin: true //  是否跨域
  //     // headers: {
  //     //   Host: '',    //   目标地址域名
  //     //   Origin: '',  //   源地址
  //     //   Referer: ''  //   来源地址
  //     // }
  //   })
  // )
}
