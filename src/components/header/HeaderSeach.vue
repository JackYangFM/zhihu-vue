<template>
  <div class="header-seach">
    <div class="content-seach">
      <div class="seach" @click="clickSeach">
        <i class="icon icon-seach">&#xe7b7;</i>
        搜索知乎内容
      </div>
      <div class="put-question" @click="clickQuestion">
        <i class="icon icon-question">&#xe6f4;</i>
        提问
      </div>
    </div>
  </div>
</template>

<script >
  export default {
    data() {
      return {

      }
    },
    methods: {
      clickSeach() {
        console.log('seach')
      },
      clickQuestion() {
        console.log('Question')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/style/usage/core/reset.scss';
  .header-seach{
    // margin-bottom: .06rem;
    height: .44rem;
    background: #fff;
    padding: .06rem .1rem;
    .content-seach{
      height: 100%;
      background: #ebebeb;
      border-radius: .06rem;
      padding: .06rem 0;
      color: #646464;
      font-size: .14rem;
      @include flexbox();
      .seach{
        padding-left: .63rem;
        position: relative;
        @include flex();
      }
      .put-question{
        padding-left: .44rem;
        position: relative;
        width: .92rem;
        border-left: .01rem solid #bfbfbf;
      }
    }
  }
  .icon{
    font-family: yofont;
    position: absolute;
  }
  .icon-question{
    font-weight: 500;
    left: .18rem;
    top: -.03rem;
    font-size: .16rem;
  }
  .icon-seach{
    font-size: .12rem;
    left: .2rem;
    top: -.01rem;
    font-weight: 600;
  }
</style>