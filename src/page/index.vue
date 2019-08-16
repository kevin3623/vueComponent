<template>
  <div>
    <!-- <H2>modal 组件</H2>
    <modal></modal> -->
            
    <!-- <H2>倒计时</H2>
    <countdowmB @send="test"></countdowmB>
   -->

    <H2>toast 提示框</H2>
    <button @click="toast">toast提示</button>

    <H2>轮播图</H2>
    <!-- <carousel></carousel> -->
    <!-- <H2>Switch 开关按钮</H2> -->

  </div>
</template>

<script>
import modal from '@/components/modal'
import countdowmB from '@/components/countdowmB'
import carousel from '@/components/carousel/carousel'

export default {
  components: {

    modal,
    
    countdowmB,
    carousel
  },
  methods: {
    test () {
      alert('d')
    },
    toast () {
      this.$toast('dd')
      // toast 
    }
  }
}
</script>
