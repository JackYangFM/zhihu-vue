<template>
    <div slot="options" style="height: 100%; overflow: scroll;">
	    <div class="scroll-list-wrap" slot="demo" style="height: 100%; overflow: scroll;">
	      <scroll ref="scroll"
	              :data="items"
	              :scrollbar="scrollbarObj"
	              :pullDownRefresh="pullDownRefreshObj"
	              :pullUpLoad="pullUpLoadObj"
	              @pullingDown="onPullingDown"
	              @pullingUp="onPullingUp"
	              @click="clickItem"
	      >
	      </scroll>
	    </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Scroll from '../components/scroll/scroll.vue'

  export default {
    data() {
      return {
        scrollbarFade: false,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        items: [],
        itemIndex: 0
      }
    },
    created() {
      for (let i = 0; i < 2; i++) {
        this.items.push('11111')
      }
    },
    components: {
      Scroll,
    },
    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullDown()
          } else {
            scroll.closePullDown()
          }
        },
        deep: true
      },
      pullUpLoadObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullUp()
          } else {
            scroll.closePullUp()
          }
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    methods: {
      onPullingDown() {
        // 模拟更新数据
        console.log('pulling down and load data')
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift('1111')
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
          if (this._isDestroyed) {
            return
          }
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = []
            for (let i = 0; i < 10; i++) {
              newPage.push('111111')
            }

            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1500)
      },
      clickItem() {
        this.$router.back()
      },
      rebuildScroll() {
        this.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    }
  }
</script>

<style scoped lang="sass" >
</style>
