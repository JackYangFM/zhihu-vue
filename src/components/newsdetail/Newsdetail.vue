<template>
  <div class="newsdetailbox">
    <header>
      <span @click="handleBack">&lt;</span>
			<span>消息</span>
			<span>&#xe8c0;</span>
		</header>
    <scroll class="scroll" 
      ref="scroll" 
      wrapper="wrappers" 
    >
      <slot>
        <div>{{data.id}} ：{{data.answerUser}}</div>
        <div>{{data.answerTitle}}</div>
        <div>{{data.answerContent}}</div>
        <div>{{data.time}}</div>
        <div><img :src="data.img" alt=""></div>
      </slot>
    </scroll>
    
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import Scroll from '../scroll/scroll.vue'
import $ from 'axios'

export default {
  data: () => ({
	  data: [],
  }),
  components: {
    Scroll
  },
	methods: {
		handleBack() {
			this.$router.back()
		}
  },
  mounted () {
    const ID = this.$route.query.id;
    $.get('/api/newslistdetail')
      .then((result) => {
        let data = result.data.data[ID]
        this.data = data;
      })
  }
}
</script>


<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
@font-face {
  font-family: 'yofont';
  src:
    url('../../assets/iconfonts/newsicon/iconfont.woff') format('woff'),
    url('../../assets/iconfonts/newsicon/iconfont.ttf') format('truetype')
}
.newsdetailbox{
  height: 100%;
  margin: 0;
  @include flexbox();
  @include flex-direction(column);
  header{
    width:100%;
    height:0.44rem;
    background:#fff;
    text-align:center;
    @include border(0 0 1px 0,#d3d3d3,solid);
    @include flexbox();
    span:nth-child(1){
      line-height:0.44rem;
      font-size:.18rem;
      color:#999;
      font-weight:600;
      width: .4rem;
    }
    span:nth-child(2){
      line-height:0.44rem;
      font-size:.16rem;
      color:#333;
      font-weight:500;
      @include flex();
      padding-right: .42rem;
    }
    span:nth-child(3){
      width:.22rem;
      height:.22rem;
      font-family:yofont;
      display:inline-block;
      position: absolute;
      top: .11rem;
      right: .2rem;
      font-size:.18rem;
      line-height:.22rem;
      color:#999;
    }
  }
  .scroll{
    background:none;
    div{
      div{
        margin-bottom: .1rem;
        padding: .1rem;
        background: #fff;
        font-size:.16rem;
      }
      div:nth-child(1){
        font-size: .18rem;
      }
      div:nth-child(2){
        font-size: .18rem;
        font-weight: 600;
      }
    }
  }
  
}
	
</style>