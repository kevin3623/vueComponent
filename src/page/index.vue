<template>
  <div>
    <!-- <H2>modal 组件</H2>
    <modal></modal> -->
            
    <!-- <H2>倒计时</H2>
    <countdowmB @send="test"></countdowmB>
   -->

    <H2>toast 提示框</H2>
    <button @click="toast">toast提示</button>

    <!-- <H2>loding 加载提示</H2>
    <button @click="loading">loding 加载提示</button>
     -->
     
    <!-- <H2>alert 提示框</H2>

    <H2>confirm 提示框</H2>

    <H2>Switch 开关按钮</H2> -->

  </div>
</template>

<script>
import modal from '@/components/modal'
import countdowmB from '@/components/countdowmB'

export default {
  data () {
  return {
    
  }
  },
  components: {

    modal,
    countdowmB
  },
  methods: {
    test () {
      alert('d')
    },
    toast () {
      this.$toast('dd')
      // toast 
    },
    loading () {
      this.$loading(true)
    }
  }
}
</script>
