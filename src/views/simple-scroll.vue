<template>
  <div class="simple-scroll-demo">
    <div class="scroll-list-wrap">
      <scroll ref="scroll"
              :data="items"
              :pullDownRefresh="pullDownRefreshObj"
              :pullUpLoad="pullUpLoadObj"
              @pullingDown="onPullingDown"
              @pullingUp="onPullingUp">
              <slot>
              </slot>
      </scroll>
    </div>
  </div>
</template>

<script >
  import Scroll from '../components/scroll/scroll.vue'

  export default {
    data() {
      return {
        pullDownRefresh: true,
        pullDownRefreshThreshold: 40,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 40,
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '已经没有更多数据',
        scrollToX: 0,
        scrollToY: -200,
        scrollToTime: 700,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        items: [],
        itemIndex: 0
      }
    },
    components: {
      Scroll
    },
    computed: {
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          stop: 40,
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    methods: {
      onPullingDown() {
        // 模拟更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift('111111')
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 2000)
      },
      onPullingUp() {
        // 更新数据
        console.log('pulling up and load data')
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = []
            for (let i = 0; i < 10; i++) {
              newPage.push('11111')
            }

            this.items = this.items.concat(newPage)
          }
        }, 1500)
      }
    }
  }
</script>

<style scoped lang="scss" >
  @import '@/style/usage/core/reset.scss';
    .simple-scroll-demo{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      @media screen and (min-width: 42rem){
        flex: 0 0 23rem;
      }
      @media screen and (max-width: 42rem){
        flex: 0 0 100%;
        /*margin-bottom: 1rem*/
        margin: 10px;
      }
      .scroll-list-wrap{
        position: relative;
        @media screen and (min-width: 42rem){
          /*height: 30rem*/
          height: 100%;
        }
        @media screen and (max-width: 42rem){
          /*height: 26rem*/
          height: 100%;
        }
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 0.3rem;
        transform: rotate(0deg);
        overflow: hidden;
      }
    }
     
</style>
