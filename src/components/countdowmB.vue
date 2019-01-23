<template>
  <button @click="getCode" :disabled="isDisabled">{{buttonText}}</button>
</template>
<script>
export default {
  data () {
    return {
      wait: 60,
      buttonText: '发送验证码',
      isDisabled: false
    }
  },
  methods: {
    getCode () {
      this.$emit('send')
      this.time()
    },
    time () {
      if (this.wait === 0) {
        this.isDisabled = false
        this.buttonText = '发送验证码'
        this.wait = 60
      } else {
        this.isDisabled = true
        this.buttonText = this.wait + 's'
        this.wait--
        setTimeout(() => {
          this.time()
        }, 1000)
      }
    }
  }
}
</script>
<style scoped>
  button {
      width: 230px;
      height: 80px;
      background-color: #4075ed;
      color: #d3dcf3;
      border-radius: 10px;
      font-size: 20px;
  }
</style>
