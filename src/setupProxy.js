const { createProxyMiddleware } = require('http-proxy-middleware')
//1.0.0版本前都是用proxy,1.0.0后使用porxy会报错,应使用createProxyMiddleware;
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/hh', {
      target: 'http://yapi.devdemo.trs.net.cn/mock/1084/api',
      pathRewrite: { '^/hh': '' },
      changeOrigin: true,
      secure: false,
      headers: {
        Host: 'yapi.devdemo.trs.net.cn',
        Origin: 'http://yapi.devdemo.trs.net.cn',
        Referer: 'http://yapi.devdemo.trs.net.cn'
      }
    })
  )
}

/**
 *  这里的/hh 要求发起请求的基地址要是/hh开头的
 *  pathRewrite这里面会将请求里面hh替换为空   axios.get('/hh/test')  会将/test拼接到target后面进行请求   chrome查看到的是通过本地发起的请求
 */
