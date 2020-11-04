
# react_antd_scss_mobile
* js框架使用react 
* css采用sass(使用的是scss)预编译器    使用自带的css-modules配合组件嵌套   使用scss的嵌套语法和CSS 属性选择器来简单实现隔离
* webpack 打包 

* axios请求后台数据

# 文件介绍
 src->index.js   这个文件导入App组件 引入全局的css 和一些js常用工具方法
 src->App.js  这个文件配置redux (Provider) react-router-dom(控制路由)





* 不发起请求的时候验证登陆状态 ????
  * 初步想法,手动设置全局的cookie 时间  在项目启动的时候对cookie是否过期进行判断(过期则删除)
  * 针对请求的封装上面需要添加一层,默认不需要登录状态,配置了参数必须携带就必须携带(如果没这个cookie,则不发起请求),如果没有强制要求那么有就带,没有就不带...


  * 测试接口   http://yapi.devdemo.trs.net.cn/mock/1084/api/test    get
  * 返回数据   {"code":0,"msg":"ok","data":{"name":"zhangsan","age":18}}
  * 假设会出现跨域问题  
    * 可以通过axios.create创建axios的实例进行代理跨域????
