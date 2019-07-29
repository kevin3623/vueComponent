# [前言]：

自己封装的vue组件 和 校验值的插件
 
# [功能描述]：
 
1. modal 组件（模态框）
   * 描述 ： 参考 https://blog.csdn.net/w1170375057/article/details/78510230 这个案例，按照自己需求写的。
2. countdowmB 组件（获取验证码倒计时）   
   * 描述 ：这个组件是一个发送验证码的按钮，点击这个按钮就会进入倒计时。时间结束才可以继续点击，发送请求。
   * 用法 ：在需要这个组件的页面中，引入组件，在 <countdowmB @send="test"></countdowmB> 标签就可以了，test是发送请求的ajax方法。
3. 图片放大组件
   * 描述：

4. toast 提示弹框

5. alert 提示框

6. confirm 提示框

7. Switch 开关按钮



# [开发环境依赖模块]
> webpack相关模块（项目是使用vue-cli脚手架 创建的，自带的模块不写）
   
```
lib-flexible                          // 自动添加 自适应的meta
px2rem-loader                         // css 自动把px 转化为 rem
less 
less-loader
```

> 开发相关模块
```
vue
vue-router
```
# [技术栈]：
 
vue2 + vuex + vue-router + webpack + ES6/7
 
 
# [项目运行]：
 
```
npm install

npm run dev
 
 
访问: http://localhost:1200
 
```