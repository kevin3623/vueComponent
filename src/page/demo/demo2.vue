<template>
  <div class="pulldown">
    <div ref="bsWrapper" class="pulldown-bswrapper">
      <div class="pulldown-scroller">
        <div class="pulldown-wrapper">
          <div v-show="beforePullDown">
            <span>Pull Down and refresh</span>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span>Loading...</span>
            </div>
            <div v-show="!isPullingDown"><span>Refresh success</span></div>
          </div>
        </div>
        <ul class="pulldown-list">
          <li v-for="i of dataList" :key="i" class="pulldown-list-item">
            {{ `I am item ${i} ` }}
          </li>
        </ul>
      </div>      
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  function getOneRandomList (step = 0) {
    const arr = Array.apply(null, {length: (30 + step)}).map((...args) => args[1])
    return arr.sort(() => Math.random() - 0.5)
  }

/* 肯定是更加深刻的房间爱的是开发商可 */
  const TIME_BOUNCE = 800
  const TIME_STOP = 600
  const THRESHOLD = 70
  const STOP = 56
  let STEP = 0

  export default {
    data () {
      return {
        beforePullDown: true,
        isPullingDown: false,
        dataList: getOneRandomList()
      }
    },
    created () {
      this.bscroll = null
    },
    mounted () {
      this.initBscroll()
    },
    methods: {
      initBscroll () {
        this.bscroll = new BScroll(this.$refs.bsWrapper, {
          scrollY: true,
          bounceTime: TIME_BOUNCE,
          pullDownRefresh: {
            threshold: THRESHOLD,
            stop: STOP
          }
        })

        this.bscroll.on('pullingDown', this.pullingDownHandler)
        this.bscroll.on('scroll', this.scrollHandler)
      },
      scrollHandler (pos) {
        console.log(pos.y)
      },
      async pullingDownHandler () {
        this.beforePullDown = false
        this.isPullingDown = true
        STEP += 10

        await this.requestData()

        this.isPullingDown = false
        this.finishPullDown()
      },
      async finishPullDown () {
        const stopTime = TIME_STOP
        await new Promise(resolve => {
          setTimeout(() => {
            this.bscroll.finishPullDown()
            resolve()
          }, stopTime)
        })
        setTimeout(() => {
          this.beforePullDown = true
          this.bscroll.refresh()
        }, TIME_BOUNCE)
      },
      async requestData () {
        try {
          // const newData = await this.ajaxGet(/* url */)
          // this.dataList = newData
        } catch (err) {
          // handle err
          console.log(err)
        }
      },
      ajaxGet (/* url */) {
        return new Promise(resolve => {
          setTimeout(() => {
            const dataList = getOneRandomList(STEP)
            resolve(dataList)
          }, 1000)
        })
      }
    }
  }
</script>

<style>
.pulldown{
  height: 100%;
}

.pulldown-bswrapper{
  position: relative;
  height: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}

.pulldown-list{
 padding: 0;
}
 
.pulldown-list-item{
  padding: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ccc;
}

.pulldown-wrapper{
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
</style>
