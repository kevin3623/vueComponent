<template>
    <div class="modal" v-show="show">
        <div class="modal-dialog">
            <!-- 头部 -->
            <div class="modal-header">
                <slot name="header">
                    <p class="title">提示</p>
                </slot>
            </div>
            <!-- 内容区域 -->
            <div class="modal-body">
                <slot name="body">
                    <p class="msg">确定执行此操作?</p>
                </slot>
            </div>
             <!-- 尾部，操作按钮 -->
            <div class="modal-footer">
                <slot name="footer">
                    <div class="button">
                        <button @click="cancel">取消</button>
                        <button @click="confirm">确认</button>
                    </div>
                </slot>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    data () {
        return {
                show: true // 是否显示模态框
        }
    },
/**
 * modal 模态接口参数
 * @param {string} options.title 模态框标题
 * @param {boolean} options.showCancelButton 是否显示取消按钮
 * @param {string} options.cancelButtonClass 取消按钮样式
 * @param {string} options.cancelButtonText 取消按钮文字
 * @param {string} options.showConfirmButton 是否显示确定按钮
 * @param {string} options.confirmButtonClass 确定按钮样式
 * @param {string} options.confirmButtonText 确定按钮标文字
 */
    props: ['options'],
    methods: {
        confirm () {
            this.show = false // 点击确定按钮,关闭
            this.$emit('confirmClick') // 触发自定义的 confirmClick 事件 
        },
        cancel () {
            this.show = false
        }
    },
    mounted () {
        this.show = true
    }
}
</script>

<style scoped>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1001;
        overflow: hidden;
    }
    .modal-dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        z-index: 1002;
        width: 80%;
    }
    .modal-header {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #eee;
        text-align: center;
    }
    .modal-body{
        line-height: 2em;
        text-align: center;
    }
    .modal-footer {
        border-top: 1px solid #eee;
    }
    .button{
            display: flex;
            justify-content: space-around;
            align-items: center;
    }
    button{
        border: none;
        background-color:transparent;
        height: 38px;
        width: 50%;                 
    }
    button:first-child{

        border-right: 1px solid #f4f4f5;
    }  
</style>
