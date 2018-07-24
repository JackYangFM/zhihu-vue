<template>
  <scroll ref="scroll"
          :data="items"
          :pullDownRefresh="pullDownRefreshObj"
          :pullUpLoad="pullUpLoadObj"
          wrapper="wrappers"
          @pullingDown="onPullingDown"
          @pullingUp="onPullingUp"
         >
          <slot>
            <ul class="list-content">
              <li  class="list-item" v-for="item in items" :key="item.key" :id="item.id">
                <div class="top-num">{{item.top}}</div>
                <div class="top-content">
                  <h3>{{item.title}}</h3>
                  <span>{{item.hot}}热度</span>
                </div>
                <img class="small-img" :src="item.img" />
              </li>
            </ul>
          </slot>
  </scroll>
</template>

<script >
  import Scroll from '../scroll/scroll.vue'
  import $ from 'axios'
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
        items: [],
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
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    methods: {
      async onPullingDown() {    
        let result = await $.get('/api/newhome')
                            .then(response => response.data.data)
        if(result.length > 0 && this.items == result){
          this.$refs.scroll.forceUpdate()
        }else{
          this.items = result
        }
      },
      async onPullingUp() {
        // 更新数据
        console.log('pulling up and load data')
        let result = await $.get('/api/newhome')
                            .then(response => response.data.data)
        if(result.length > 0){
          setTimeout(function(){
            this.items = [...this.items,...result]  
          }.bind(this),2000)
          
        }else{
          this.$refs.scroll.forceUpdate()
        }
      }
    },
    async created(){
      let result = await $.get('/api/home')
                          .then(response => response.data.data)
      this.items = result || []
    }
  }
</script>