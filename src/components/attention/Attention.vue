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
      <div class="attention">
        <header>
          <h3>发现更多感兴趣的人</h3>
          <img src="../..//assets/attention.jpg">
        </header>
        <ul>
          <li v-for="item of items" @click="toDetail(item.id)">
            <h3>
              <img :src="item.Avatar">
              <span>{{item.moving}}</span>
            </h3>
            <h2>{{item.title}}</h2>
            <div>
              <p>{{item.description}}</p>
              <img v-if=item.img :src="item.img">
            </div>
            <h4>
              <span>{{item.comment}}</span>
              <i>...</i>
            </h4>
          </li>
        </ul>
      </div>
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
       let result = await $.get('/api/attention')
                           .then(response => response.data.data)
        if(result.length > 0 && this.items == result){
          this.$refs.scroll.forceUpdate()
        }else{
          this.items = result
        }
      },
      async onPullingUp() {
        // 更新数据
        let result = await $.get('/api/attention')
                            .then(response => response.data.data)
        if(result.length > 0){
          setTimeout(function(){
            this.items = [...this.items,...result]  
          }.bind(this),2000)
          
        }else{
          this.$refs.scroll.forceUpdate()
        }
      },
      toDetail(index){
        this.$router.push({name:'detail',params: { id: index }})
      }
    },
    async created(){
      let result = await $.get('/api/attention')
                          .then(response => response.data.data)
      this.items = result || []
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/style/usage/core/reset.scss';
  .list-wrapper{
    background-color: #eee;
  }
  .attention{
    height: 100%;
  }
  header{
    height: .5rem;
    background:#fff;
    margin-top: 0.04rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    @include flexbox();
    @include justify-content(space-between);
    padding: 0 .16rem;
    h3{
      line-height: .5rem;
      font-size: .16rem;
    }
    img{
      height: .48rem
    }
  }
  ul{
    li{
      padding: .1rem;
      background: #fff;
      border: 1px 0 solid #999;
      margin-top: .08rem;
      span{
        font-size: .13rem;
        line-height: .2rem;
        color: #999;
      }
      h3{
        img{
          height: .2rem;
          border-radius: 50%;
          margin-right: .08rem;
        }
        span{
          font-weight:400;
        }
        margin-bottom: .08rem;
      }
      h2{
        font-size: .16rem;
        line-height: .24rem;
      }
      div{
        @include flexbox()
        p{
          font-size: .14rem;
          line-height: .24rem;
          color: #444;
          @include ellipsis(100%,3) 
          @include flex()
        }
        img{
          width: 1.1rem;
          height: .75rem;
          border-radius: .05rem;
        }
        margin-bottom: .1rem;
      }
      h4{
        font-weight: 400;
        line-height: .2rem;
        @include flexbox();
        @include justify-content(space-between);
        i{
          font-weight: 600;
          color: #d3d3d3;
          font-size: .2rem;
          line-height: .1rem;
          padding-right: .03rem;
        }
      }
    }
  }
</style>