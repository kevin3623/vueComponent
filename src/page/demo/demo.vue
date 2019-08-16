<template>
  <div class="wrapper" ref="bscroll">
    <div class="li">
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>dfldfdfj</div>
      <div>加载</div>
    </div>
    <div>刷新</div>
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
          threshold: 0 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
          // threshold: '加载滚动'
        },
        pullDownRefresh: {
          threshold: 0
        }
      })
      scroll.on('beforeScrollStart', () => {
        console.log('beforeScrollStart')
      })
      scroll.on('scrollStart', () => {
        console.log('scrollStart')
      })
      // scroll.on('scroll', (res) => {
      //   console.log('scroll')
      //   console.log(res.x, res.y)
      // })
      scroll.on('scrollCancel', () => {
        console.log('scrollCancel')
      })
      scroll.on('scrollEnd', (res) => {
        console.log('scrollEnd')
        console.log(res.x, res.y)
      })
      scroll.on('touchEnd', (res) => {
        console.log('touchEnd')
        console.log(res.x, res.y)
      })
      scroll.on('flick', () => {
        console.log('flick')
      })
      scroll.on('pullingDown', () => {
        console.log('pullingDown')
        scroll.finishPullDown()
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
.li div{
  height: 70px;
}
</style>
