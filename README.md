# [前言]：

自己封装的vue组件 和 插件
 
# [功能描述]：

### 组件：
1. modal 组件（模态框）
   * 描述 ： 参考 https://blog.csdn.net/w1170375057/article/details/78510230 这个案例，按照自己需求写的。
   
2. countdowmB 组件（获取验证码倒计时）   
   * 描述 ：这个组件是一个发送验证码的按钮，点击这个按钮就会进入倒计时。时间结束才可以继续点击，发送请求。
   * 用法 ：在需要这个组件的页面中，引入组件，在 <countdowmB @send="test"></countdowmB> 标签就可以了，test是发送请求的ajax方法。

3. Switch 开关按钮
   * 描述：
   * 用法：

### 插件：

1. 图片放大插件
   * 描述：

2. toast 提示弹框（需要考虑到，ios键盘呼起时，会不会遮挡到toast弹框）
   * 描述：js通过一个方法调用toast提示框
   * 用法：调用 this.$toast(text,time) 方法。text 的提示框的内容，time 是显示的时间。

3. loading 组件
   * 描述：
   * 用法：

4. confirm 提示框
   * 描述：
   * 用法：
5. 上拉刷新、下拉加载
   * 描述：
   * 用法：
   
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