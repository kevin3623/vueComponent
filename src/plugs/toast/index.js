import ToastComponent from './toast.vue'// 引入先前写好的vue
 
const Toast = {}
 
// 注册Toast
Toast.install = function (Vue) {
    // 生成一个Vue的子类
    const ToastConstructor = Vue.extend(ToastComponent)
    // 生成一个该子类的实例
    const instance = new ToastConstructor()

    instance.$mount() // 将这个实例 在文档外渲染
    document.body.appendChild(instance.$el) // 将渲染好的DOM，挂载到body内部
 
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 <br>    // 其中的duration是持续时间
    Vue.prototype.$toast = (msg, duration = 1250) => {
        instance.msg = msg
        instance.theToast = true
 
        setTimeout(() => {
            console.log(33)
            
            instance.theToast = false
        }, duration)
    }
}
 
export default Toast
