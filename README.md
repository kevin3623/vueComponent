# 自己封装的vue组件 和 校验值的插件

## [组件功能描述]
1. modal 组件（模态框）
* 描述 ： 参考 https://blog.csdn.net/w1170375057/article/details/78510230 这个案例，按照自己需求写的。
2. countdowmB 组件（获取验证码倒计时）
* 描述 ：这个组件是一个发送验证码的按钮，点击这个按钮就会进入倒计时。时间结束才可以继续点击，发送请求。
* 用法 ：
在需要这个组件的页面中，引入组件，在 <countdowmB @send="test"></countdowmB> 标签就可以了，test是发送请求的ajax方法。


## [开发环境]
1. 安装 less 包  
* npm install less less-loader --save-dev
2.  

## [运行步骤]
1. npm install
2. npm run dev
