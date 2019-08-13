<template>
  <div class="wrapper" ref="bscroll">
    <ul class="content">
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
      <li>djhajfjafhafhf</li>
    </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      
    }
  },
  mounted () {
      let scroll = new BScroll(this.$refs.bscroll, {
        pullUpLoad: {
          threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
          // threshold: '加载滚动'
        }
      })
      scroll.on('pullingUp', () => {
        console.log('加载ajax数据')
        scroll.finishPullUp() // 可以多次执行上拉刷新
      })
      scroll.refresh()
  }
}
</script>
<style scoped>
.wrapper{
     width: 100%;
    height: 70vH;
    overflow: hidden;
}
li{
  height: 70px;
}
</style>
