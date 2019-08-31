import loadingComponent from './Loading.vue'

let Loadong = {}

// 注册 Loadong
Loadong.install = function (Vue) {
    // 生成一个Vue的子类
    const ToastConstructor = Vue.extend(loadingComponent)
    // 生成一个该子类的实例
    const instance = new ToastConstructor()
    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    Vue.prototype.$loading = (Boolean) => {
        instance.isLoading = Boolean
    }
}

export default Loadong
