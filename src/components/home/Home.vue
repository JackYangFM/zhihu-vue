<template>
  <div class="simple-scroll-demo">
    <header-seach></header-seach>
    <nav>
      <div  class="nav" @click="btnScrollto(0)" :class="{'nav-active': classNav[0]}">关注</div>
      <div class="nav" @click="btnScrollto(1)" :class="{'nav-active': classNav[1]}">推荐</div>
      <div class="nav" @click="btnScrollto(2)" :class="{'nav-active': classNav[2]}">热榜</div>
    </nav>
    <div @touchmove="ontouchmove" @touchstart="ontouchstart" style="height: 100%">
      <swiper :options="swiperOption" class="scroll-list-wrap"   ref="mySwiper">
        <swiperSlide class="page">
        </swiperSlide>
        <swiperSlide class="page">
        </swiperSlide>
        <swiperSlide class="page">
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
                          <span>{{item.hot}}</span>
                        </div>
                        <img class="small-img" :src="item.img" />
                      </li>
                    </ul>
                  </slot>
          </scroll>
        </swiperSlide>
        <div class="swiper-scrollbar"   slot="scrollbar" ref = "scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script >
  import Scroll from '../scroll/scroll.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import HeaderSeach from '../header/HeaderSeach.vue'
  import {mapActions} from 'vuex'
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
        // navItems: ['关注','推荐',]
        classNav: [0,0,1],
        swiperOption: {
          initialSlide :2,
          resistanceRatio : 0.1,
          scrollbar: {
              el: '.swiper-scrollbar',
            },
          on: {
            slideChangeTransitionStart: () =>{
              if(!this.swiper) return
              let arr = Array.apply(null, Array(3)).map(() => 0)
              arr[this.swiper.activeIndex] = 1
              this.classNav = arr
            }
          }
        }
      }
    },
    components: {
      Scroll,
      HeaderSeach,
      swiper, 
      swiperSlide
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
      },
      swiper() {
              return this.$refs.mySwiper.swiper
            }
    },
    methods: {
      async onPullingDown() {
        // 模拟更新数据
        // setTimeout(() => {
        //   if (Math.random() > 0) {
        //     // 如果有新数据
        //     this.items.unshift('111111')
        //   } else {
        //     // 如果没有新数据
        //     this.$refs.scroll.forceUpdate()
        //   }
        // }, 2000)      
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
          this.items = [...this.items,...result]
        }else{
          this.$refs.scroll.forceUpdate()
        }
      },
      ontouchstart(e) {
        this.startY =  e.changedTouches[0].pageY
        // console.log(e)
      },
      ontouchmove(e) {
        let endY = e.changedTouches[0].pageY - this.startY
        if(endY > 0){
          this.changeHidden(false)
        }else if(endY < 0){
          this.changeHidden(true)
        }
      },
      btnScrollto(index) {
        this.$refs.mySwiper.swiper.slideTo(index, 500, false)
        let arr = Array.apply(null, Array(3)).map(() => 0)
        arr[index] = 1
        this.classNav = arr
      },
      ...mapActions(['changeHidden'])
    },
    async created(){
      let result = await $.get('/api/home')
                          .then(response => response.data.data)
      this.items = result || []
    }
  }

</script>

<style  lang="scss" >
  @import '@/style/usage/core/reset.scss';
    .simple-scroll-demo{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      .scroll-list-wrap{
        position: relative;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, .1);
        transform: rotate(0deg);
        overflow: hidden;
        .page{
          height: 100%;
        }
        .list-item{
          width: 100%;
          height: .95rem;
          border-bottom: 1px solid #ececec;
          @include flexbox();
          @include flex-direction('column');
          font-size: .16rem;
          line-height: .24rem;
          padding-top: .12rem;
          .top-num{
            width: .38rem;
            color: #ee2420;
            text-align: center;
            font-weight: 600;
          }
          .top-content{
            @include flex();
            padding: 0 .05rem;
            h3{
              font-weight: normal;
            }
            span{
              display: block;
              font-size: .12rem;
              color: #9d9d9d;
              line-height: .34rem;
            }
          }
          .small-img{
            width: 1.05rem;
            padding-right: 0.1rem;
            height: .7rem;
            border-radius: 0.05rem;
          }
        }
      }
    }
    .swiper-wrapper{
      height: 100%;
    }
    nav{
      height: .36rem;
      background: #fff;
      border-top: #efefef solid .01rem;
      @include flexbox();
      .nav{
        @include flex();
        font-size: .14rem;
        line-height: .36rem;
        color: #999;
        text-align: center;
        &.nav-active{
          color: #000;
        }
      }
    }
    // .swiper-scrollbar{
    //   position: absolute;
    //   width: 100%;
    //   z-index: 101;
    //   top: 0;
    //   height: 10px;
    //   background: #000;
    // }
    .swiper-container-horizontal > .swiper-scrollbar{
      top: 0;
      left: 0;
      z-index: 110;
      width: 100%;
      height: 2px;
      .swiper-scrollbar-drag{
        border-radius: 0;
        background: #4c4c4c;
      }
    }
     
</style>
